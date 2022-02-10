package org.celstec.arlearn2.jdo.manager;

import com.google.appengine.api.datastore.*;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.account.AccountList;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.classes.AccountEntity;

import java.util.Iterator;
import java.util.List;

public class AccountManager {

    private static DatastoreService datastore;

    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    public static Account addAccount(Account account) {
        boolean allowTrackLocation = false;
        if (account.getAllowTrackLocation() != null) allowTrackLocation = account.getAllowTrackLocation();
        return addAccount(account.getFirebaseId(), account.getLocalId(), account.getAccountType(), account.getEmail(), account.getGivenName(), account.getFamilyName(), account.getName(), account.getPicture(), allowTrackLocation).toAccount();
    }

    public static Account deleteAccount(String accountId) throws Exception{
        Key key = KeyFactory.createKey(AccountEntity.KIND,
                accountId);
        Entity result = datastore.get(key);
        datastore.delete(key);
        return new AccountEntity(result).toAccount();
    }

    public static AccountEntity addAccount(String fbId, String localID, int accountType,
                                           String email, String given_name, String family_name, String name,
                                           String picture, boolean allowTrackLocation) {
        try {
            AccountEntity account = getAccount(accountType, localID);
            account.setFirebaseId(fbId);
            account.setLocalId(localID);
            account.setAccountType(accountType);
            account.setUniqueId();
            account.setEmail(email);
//            account.setGiven_name(given_name);
//            account.setFamily_name(family_name);
            account.setName(name);
            account.setPicture(picture);
            account.setLastModificationDate(System.currentTimeMillis());
            account.setAllowTrackLocation(allowTrackLocation);
            return account;
        } catch (Exception e) {

        }

        AccountEntity account = new AccountEntity();
        account.setFirebaseId(fbId);
        account.setLocalId(localID);
        account.setAccountType(accountType);
        account.setUniqueId();
        account.setEmail(email);
//        account.setGiven_name(given_name);
//        account.setFamily_name(family_name);
        account.setName(name);
        account.setPicture(picture);
        account.setLastModificationDate(System.currentTimeMillis());
//        account.setAccountLevel(AccountEntity.USER);
        account.setAllowTrackLocation(allowTrackLocation);

        datastore.put(account.toEntity());
        return account;

    }


    public static AccountEntity overwriteAccount(String fbId, String localID, int accountType,
                                                 String email,
//                                                 String given_name, String family_name,
                                                 String name,
                                                 String picture,
                                                 boolean allowTrackLocation,
                                                 long expirationDate,
                                                 String labels
    ) {
        AccountEntity account = getAccount(accountType, localID);
        if (account == null) {
            account = new AccountEntity();
            account.setLocalId(localID);
            account.setAccountType(accountType);
            account.setUniqueId();
        }
        account.setFirebaseId(fbId);
        account.setEmail(email);
        account.setName(name);
        account.setLabels(labels);
        account.setPicture(picture);
        account.setLastModificationDate(System.currentTimeMillis());
        account.setAllowTrackLocation(allowTrackLocation);
        account.setExpirationDate(expirationDate);
        datastore.put(account.toEntity());
        return account;
    }

    public static AccountEntity overwriteAccount(Account acc) {
        AccountEntity account = getAccount(acc.getAccountType(), acc.getLocalId());
        if (account == null) {
            account = new AccountEntity();
            account.setLocalId(acc.getLocalId());
            account.setAccountType(acc.getAccountType());
            account.setUniqueId();
        }
        account.setFirebaseId(acc.getFirebaseId());
        account.setEmail(acc.getEmail());
        account.setName(acc.getName());
        account.setLabels(acc.getLabel());
        account.setPicture(acc.getPicture());
        account.setLastModificationDate(System.currentTimeMillis());
        account.setAllowTrackLocation(false);
        account.setExpirationDate(acc.getExpirationDate());
        account.setSuspended(acc.getSuspended());
        datastore.put(account.toEntity());
        return account;
    }

    public static Account getAccount(Account myAccount) {
        return (getAccount(myAccount.getAccountType() + ":" + myAccount.getLocalId()));
    }

    public static Account getAccount(EnhancedUser user) {
        return (getAccount(user.getProvider() + ":" + user.getLocalId()));
    }

    public static AccountEntity getAccount(int accountType, String localID)  {
        return getAccountEntity(accountType + ":" + localID);
    }

    public static Account getAccount(String accountId, boolean resetLogin) {
        AccountEntity accountEntity = getAccountEntity(accountId);
        if (accountEntity == null) return null;
        if (resetLogin) {
            accountEntity.setLastLoginDate(System.currentTimeMillis());
        }
        datastore.put(accountEntity.toEntity());
        return accountEntity.toAccount();
    }

    public static Account getAccount(String accountId) {
            return getAccount(accountId, false);
    }

    public static AccountEntity getAccountEntity(String accountId){
        try {
        Key key = KeyFactory.createKey(AccountEntity.KIND,
                accountId);

        Entity result = datastore.get(key);
        return new AccountEntity(result);
        } catch (Exception e) {
            return null;
        }

    }



    public static AccountList queryAll(String cursorString) {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(5);
        if (cursorString != null) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(cursorString));
        }
        AccountList itemsResult = new AccountList();
        Query q = new Query(AccountEntity.KIND);
        PreparedQuery pq = datastore.prepare(q);


        QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);
        for (Entity result : results) {
            itemsResult.addAccount(new AccountEntity(result).toAccount());
        }
        if (results.size() == 5) {
            System.out.println("queryAll set cursor "+results.size());
            itemsResult.setResumptionToken(results.getCursor().toWebSafeString());
        } else {
            System.out.println("queryAll do not set cursor "+results.size());
        }
        return itemsResult;
    }


    public static AccountList listOrganisation(Long organisationId) {

        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(50);
//        if (cursorString != null) {
//            fetchOptions.startCursor(Cursor.fromWebSafeString(cursorString));
//        }
        AccountList itemsResult = new AccountList();
        Query q = new Query(AccountEntity.KIND);
        q.setFilter(new Query.FilterPredicate(AccountEntity.COL_ORGANISATIONID, Query.FilterOperator.EQUAL, organisationId));

        PreparedQuery pq = datastore.prepare(q);


        QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);
        for (Entity result : results) {
            itemsResult.addAccount(new AccountEntity(result).toAccount());
        }
//        if (results.size() == 5) {
//            System.out.println("queryAll set cursor "+results.size());
//            itemsResult.setResumptionToken(results.getCursor().toWebSafeString());
//        } else {
//            System.out.println("queryAll do not set cursor "+results.size());
//        }
        return itemsResult;
    }

    //recentAccounts
    public static AccountList recentAccounts(String cursorString) {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(25);
        if (cursorString != null) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(cursorString));
        }
        AccountList itemsResult = new AccountList();
        Query q = new Query(AccountEntity.KIND)
                .addSort(AccountEntity.COL_LASTLOGINDATE, Query.SortDirection.DESCENDING);
        PreparedQuery pq = datastore.prepare(q);


        QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);
        for (Entity result : results) {
            itemsResult.addAccount(new AccountEntity(result).toAccount());
        }
        if (results.size() == 25) {
            itemsResult.setResumptionToken(results.getCursor().toWebSafeString());
        }
        return itemsResult;
    }


    public static Account queryViaEmail(String email) {
        AccountList itemsResult = new AccountList();
        Query q = new Query(AccountEntity.KIND)
                .setFilter(new Query.FilterPredicate(AccountEntity.COL_EMAIL, Query.FilterOperator.EQUAL, email.toLowerCase()));
        PreparedQuery pq = datastore.prepare(q);

        List<Entity> results = pq.asList(FetchOptions.Builder.withLimit(2));
        Iterator<Entity> it = results.iterator();
        if (it.hasNext()) {
            return new AccountEntity(it.next()).toAccount();
        }
        return null;
    }

    public static Account setExpirationDate(String accountId, Long expirationDate) {
        AccountEntity accountEntity = null;
        try {
            accountEntity = getAccountEntity(accountId);
            accountEntity.setExpirationDate(expirationDate);
            datastore.put(accountEntity.toEntity());
            return accountEntity.toAccount();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Account setOrganisationId(String accountId, Long organisationId) {
        AccountEntity accountEntity = null;
        try {
            accountEntity = getAccountEntity(accountId);
            accountEntity.setOrganisationId(organisationId);
            datastore.put(accountEntity.toEntity());
            return accountEntity.toAccount();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Account setAdvanced(String accountId, boolean value) {
        AccountEntity accountEntity = null;
        try {
            accountEntity = getAccountEntity(accountId);
            accountEntity.setAdvanced(value);
//            System.out.println("setting advanced to true in account entity "+accountEntity.getAdvanced());
            datastore.put(accountEntity.toEntity());
            return accountEntity.toAccount();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Account setAdmin(String accountId, boolean value) {
        AccountEntity accountEntity = null;
        try {
            accountEntity = getAccountEntity(accountId);
            accountEntity.setAdmin(value);
            datastore.put(accountEntity.toEntity());
            return accountEntity.toAccount();
        } catch (Exception e) {

            e.printStackTrace();
        }
        return null;
    }

    public static Account setCanPublishGames(String accountId, Boolean value) {
        AccountEntity accountEntity = null;
        try {
            accountEntity = getAccountEntity(accountId);
            accountEntity.setCanPublishGames(value);
            datastore.put(accountEntity.toEntity());
            return accountEntity.toAccount();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static Account setCanAddUsers(String accountId, Boolean value) {
        AccountEntity accountEntity = null;
        try {
            accountEntity = getAccountEntity(accountId);
            accountEntity.setCanAddUsersToOrganisation(value);
            datastore.put(accountEntity.toEntity());
            return accountEntity.toAccount();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static void updateLastLogin(Account account) {

    }


//    public static void createAnonymousUser(int type, String firebaseId, String fullId) {
//        AccountEntity account = getAccount(accountType, localID);
//        if (account == null) {
//            account = new AccountEntity();
//            account.setLocalId(localID);
//            account.setAccountType(accountType);
//            account.setUniqueId();
//        }
//        account.setFirebaseId(fbId);
//        account.setEmail(email);
//        account.setName(name);
//        account.setLabels(labels);
//        account.setPicture(picture);
//        account.setLastModificationDate(System.currentTimeMillis());
//        account.setAllowTrackLocation(allowTrackLocation);
//        account.setExpirationDate(expirationDate);
//        datastore.put(account.toEntity());
//        return account;
//    }
}
