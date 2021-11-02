package org.celstec.arlearn2.endpoints.impl.account;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.delegators.AccountDelegator;
import org.celstec.arlearn2.endpoints.impl.portaluser.FirebaseAuthPersistence;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.AccountManager;

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
        new AccountSearchIndex(fullId, userRecord.getDisplayName(), label, email, System.currentTimeMillis()+(365*24*3600000)).scheduleTask();
        return AccountManager.overwriteAccount(userRecord.getUid(), userRecord.getUid(), 7,
                userRecord.getEmail().toLowerCase(),
                userRecord.getDisplayName(),
                null,
                false,
                -1l,
                label
        ).toAccount();
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
            account.setFirebaseId(FirebaseAuthPersistence.getInstance().getUserViaEmail(account.getEmail()));
        }
        UserRecord.UpdateRequest request = new UserRecord.UpdateRequest(account.getFirebaseId());
        request.setDisplayName(account.getName());
        FirebaseAuth.getInstance().updateUser(request);
        new AccountSearchIndex(account.getFullId(), account.getName(), account.getLabel(), account.getEmail(), account.getExpirationDate()).scheduleTask();

        if (account.getExpirationDate() != null) {
            FirebaseAuthPersistence.getInstance().updateExpirationDate(account.getFirebaseId(), account.getExpirationDate());
        }
        return new AccountDelegator().createAccount(
                account.getFirebaseId(),
                account.getLocalId(), account.getAccountType(), account.getEmail().toLowerCase(),
                account.getName(), null, account.getExpirationDate(), account.getLabel());
    }

    public void resetIndex() {
        new AccountSearchIndex().resetIndex();

    }

    public void setExpirationDate(String accountId, Long setExpirationDate) {
        Account account = AccountManager.setExpirationDate(accountId, setExpirationDate);
        new AccountSearchIndex(account.getFullId(), account.getName(), account.getLabel(), account.getEmail(), account.getExpirationDate()).scheduleTask();
        if (account != null && account.getFirebaseId() != null) {
            try {
                FirebaseAuthPersistence.getInstance().updateExpirationDate(account.getFirebaseId(), setExpirationDate);
            } catch (FirebaseAuthException e) {
                e.printStackTrace();
            }
        }

    }

    public Account setOrganisationId(String accountId, Long organisationId) {
        return AccountManager.setOrganisationId(accountId, organisationId);
    }

    public Account setAdvanced(String accountId, Boolean value) {
        Account account = AccountManager.setAdvanced(accountId, value);
        if (account != null && account.getFirebaseId() != null) {
            System.out.println("in set advanced");
            try {
                FirebaseAuthPersistence.getInstance().setAdvanced(account.getFirebaseId(), value);
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
                FirebaseAuthPersistence.getInstance().makeAdmin(account.getFirebaseId(), value);
            } catch (FirebaseAuthException e) {
                e.printStackTrace();
            }
        }
        return account;
    }


}
