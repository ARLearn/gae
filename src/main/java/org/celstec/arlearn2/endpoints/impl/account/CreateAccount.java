package org.celstec.arlearn2.endpoints.impl.account;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.delegators.AccountDelegator;
import org.celstec.arlearn2.endpoints.impl.portaluser.FirebaseAuthPersistence;
import org.celstec.arlearn2.jdo.manager.AccountManager;

import java.util.Map;

public class CreateAccount {

    private static CreateAccount createAccountInstance = null;

    private CreateAccount() {
    }


    public static CreateAccount getInstance() {
        if (createAccountInstance == null)
            createAccountInstance = new CreateAccount();
        return createAccountInstance;
    }

    public Account createUser(String email, String password, String name, String label) throws FirebaseAuthException {
        UserRecord userRecord = FirebaseAuthPersistence
                .getInstance().createFirebaseUser(email, password, name);

        String fullId = "7:" + userRecord.getUid();
        Long expirationDate = System.currentTimeMillis()+(365*24*3600000);
        new AccountSearchIndex(fullId, userRecord.getDisplayName(), label, email, expirationDate).scheduleTask();
        Account account =  AccountManager.overwriteAccount(userRecord.getUid(), userRecord.getUid(), 7,
                userRecord.getEmail().toLowerCase(),
                userRecord.getDisplayName(),
                null,
                false,
                expirationDate,
                label
        ).toAccount();

        expirationCheck(account);

        return account;
    }

    public Account updateUserWithoutAdmin(String uuid, String email, String name) {
        String fullId = "7:" + uuid;
        new AccountSearchIndex(fullId, name, "app_account", email, -1l).scheduleTask();
        return AccountManager.overwriteAccount(uuid, uuid, 7,
                email.toLowerCase(),
                name,
                null,
                false,
                -1l,
                "app_account"
        ).toAccount();
    }


    public Account updateAccount( Account account) throws FirebaseAuthException {
        FirebaseAuthPersistence.getInstance();
        if (account.getFirebaseId() == null) {
            account.setFirebaseId(FirebaseAuthPersistence.getInstance().getFirebaseIdViaEmail(account.getEmail()));
        }
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(account.getFirebaseId());
        request.setDisplayName(account.getName());
        FirebaseAuth.getInstance().updateUser(request);
        new AccountSearchIndex(account.getFullId(), account.getName(), account.getLabel(), account.getEmail(), account.getExpirationDate()).scheduleTask();


        expirationCheck(account);
        return new AccountDelegator().createAccount(
                account.getFirebaseId(),
                account.getLocalId(), account.getAccountType(), account.getEmail().toLowerCase(),
                account.getName(), null, account.getExpirationDate(), account.getLabel());
    }

    public Account updateDbAccount( Account account){
        return AccountManager.overwriteAccount(account).toAccount();
    }


    public void resetIndex() {
        new AccountSearchIndex().resetIndex();

    }

    public void setExpirationDate(String accountId, Long setExpirationDate) {
        Account account = AccountManager.setExpirationDate(accountId, setExpirationDate);
        new AccountSearchIndex(account.getFullId(), account.getName(), account.getLabel(), account.getEmail(), account.getExpirationDate()).scheduleTask();
        expirationCheck(account);
//        if (account != null && account.getFirebaseId() != null) {
//            try {
//                FirebaseAuthPersistence.getInstance().updateExpirationDate(account.getFirebaseId(), setExpirationDate);
//            } catch (FirebaseAuthException e) {
//                e.printStackTrace();
//            }
//        }

    }

    public Account setOrganisationId(String accountId, Long organisationId) {
        return AccountManager.setOrganisationId(accountId, organisationId);
    }

    public Account setAdvanced(String accountId, Boolean value) {
        Account account = AccountManager.setAdvanced(accountId, value);
        if (account != null && account.getFirebaseId() != null) {
            try {
                Map<String, Object> customClaims = FirebaseAuthPersistence.getInstance().setAdvanced(account.getFirebaseId(), value);
                if (customClaims != null) {
                    account.setClaimsFromMap(customClaims);
                }
            } catch (FirebaseAuthException e) {
                e.printStackTrace();
            }
        }
        return account;
    }

    public Account makeAdmin(String accountId, Boolean value) {
        Account account = AccountManager.setAdmin(accountId, value);
        if (account != null && account.getFirebaseId() != null) {
            try {
                Map<String, Object> customClaims = FirebaseAuthPersistence.getInstance().makeAdmin(account.getFirebaseId(), value);
                if (customClaims != null) {
                    account.setClaimsFromMap(customClaims);
                }
            } catch (FirebaseAuthException e) {
                e.printStackTrace();
            }
        }
        return account;
    }

    public void suspend(Account account) {
        try {
            if (account != null && account.getFirebaseId() != null) {
                account.setSuspended(true);
                FirebaseAuthPersistence.getInstance().suspend(account.getFirebaseId());
                new AccountSearchIndex(account.getFullId()
                        , account.getName().toLowerCase(), account.getLabel(),
                        account.getEmail().toLowerCase(), account.getExpirationDate(), true).scheduleTask();
                updateDbAccount(account);
            }

        } catch (FirebaseAuthException e) {
            e.printStackTrace();
        }
    }

    public void unsuspend(Account account) {
        try {
            if (account != null && account.getFirebaseId() != null) {
                account.setSuspended(false);
                FirebaseAuthPersistence.getInstance().unSuspend(account.getFirebaseId());
                new AccountSearchIndex(account.getFullId()
                        , account.getName().toLowerCase(), account.getLabel(),
                        account.getEmail().toLowerCase(), account.getExpirationDate(), false).scheduleTask();
                updateDbAccount(account);
            }

        } catch (FirebaseAuthException e) {
            e.printStackTrace();
        }
    }

    public void expirationCheck(Account account) {
        Long now = System.currentTimeMillis();
        if (account.getExpirationDate() == null || account.getExpirationDate() < now) {
            String expiredClaims = System.getenv("USER_EXP_CLAIMS");
            try {
                FirebaseAuthPersistence.getInstance().setClaims(account.getFirebaseId(), expiredClaims);
            } catch (FirebaseAuthException e) {
                System.out.println("message type is "+e.getErrorCode());
                if (e.getErrorCode().equals("user-not-found")) {
                    account.setFirebaseId(null);
                    new AccountDelegator().deleteAccount(account);
                }
                e.printStackTrace();
            }
        } else {
            String activeClaims = System.getenv("USER_ACTIVE_CLAIMS");
            try {
                FirebaseAuthPersistence.getInstance().setClaims(account.getFirebaseId(), activeClaims);
            } catch (FirebaseAuthException e) {
                e.printStackTrace();
            }
        }
    }
}
