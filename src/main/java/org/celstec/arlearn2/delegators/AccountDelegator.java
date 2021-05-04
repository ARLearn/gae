package org.celstec.arlearn2.delegators;

import com.google.appengine.api.datastore.EntityNotFoundException;
import org.celstec.arlearn2.api.Service;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.account.AccountList;
import org.celstec.arlearn2.cache.AccountCache;
import org.celstec.arlearn2.endpoints.impl.account.GetOrganization;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.AccountManager;

import java.util.List;
import java.util.UUID;

public class AccountDelegator extends GoogleDelegator {

    public AccountDelegator() {
        super();
    }

    public AccountDelegator(String authToken) {
        super(authToken);
    }

    public AccountDelegator(Service service) {
        super(service);
    }

    public AccountDelegator(GoogleDelegator gd) {
        super(gd);
    }

    public Account getAccountInfo(Account myAccount) {
        return AccountManager.getAccount(myAccount.getFullId());

    }

    public Account getContactDetails(EnhancedUser user) throws EntityNotFoundException {
        Account account = getContactDetails(user.createFullId());
        if (account == null && user != null) {
            account = AccountManager.addAccount(user.getLocalId(), user.localId, user.getProvider(), user.getEmail(),user.name, "", user.name,user.picture, false).toAccount();
            if (account != null) {
                AccountCache.getInstance().storeAccountValue(account.getFullId(), account);
            }
        }
        if (account.getOrganisationId() != null) {

            account.enrichWithOrganisation(GetOrganization.getInstance().getOrganisation(account.getOrganisationId()));
        }
        return account;
    }

    public Account getContactDetails(String accountId) {
        Account account = AccountCache.getInstance().getAccount(accountId);
        if (account == null) {
            account = AccountManager.getAccount(accountId);
        }
        return account;
    }

//    public Account createAnonymousContact(Account inContact) {
//        String localID = UUID.randomUUID().toString();
//        return AccountManager.addAccount(localID, 0, inContact.getEmail(), inContact.getGivenName(), inContact.getFamilyName(), inContact.getName(), inContact.getPicture(), false).toAccount();
//    }


    public Account createAccount(String fbId, String localID, int accountType, String email, String displayName, String picture, Long expirationDate, String labels) {
        return AccountManager.overwriteAccount(fbId, localID, accountType, email, displayName, picture,
                false,
                expirationDate,
                labels

        ).toAccount();
    }

//    public void makeSuper(String accountId) {
//        AccountManager.makeSuper(accountId);
//    }

    public void deleteAccount(String fullIdentifier){

        try {
            AccountManager.deleteAccount(fullIdentifier);
        } catch (Exception e) {
            e.printStackTrace();
        }


    }

    public AccountList listOrganisation(Long organisationId) {
        return AccountManager.listOrganisation(organisationId);
    }


}
