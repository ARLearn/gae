package org.celstec.arlearn2.endpoints;

import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;


import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.config.Nullable;
import com.google.api.server.spi.response.ConflictException;
import com.google.api.server.spi.response.ForbiddenException;
import com.google.api.server.spi.response.NotFoundException;
import com.google.appengine.api.datastore.EntityNotFoundException;
import com.google.appengine.api.search.Results;
import com.google.appengine.api.search.ScoredDocument;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.Timestamp;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.UserRecord;
import org.celstec.arlearn2.beans.Password;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.account.AccountList;
import org.celstec.arlearn2.beans.run.Run;
import org.celstec.arlearn2.delegators.AccountDelegator;
import org.celstec.arlearn2.delegators.RunDelegator;
import org.celstec.arlearn2.endpoints.impl.account.AccountIterator;
import org.celstec.arlearn2.endpoints.impl.account.AccountSearchIndex;
import org.celstec.arlearn2.endpoints.impl.account.CreateAccount;
import org.celstec.arlearn2.endpoints.impl.account.GetAccount;
import org.celstec.arlearn2.endpoints.impl.portaluser.FirebaseAuthPersistence;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.AccountManager;
import org.celstec.arlearn2.tasks.beans.account.DeleteAccount;
import org.celstec.arlearn2.tasks.beans.account.DeleteRunsForAccount;
import org.celstec.arlearn2.tasks.mail.ResetPwTaks;

import javax.naming.AuthenticationException;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.security.InvalidParameterException;
import java.util.*;

/**
 * ****************************************************************************
 * Copyright (C) 2019 Open Universiteit Nederland
 * <p/>
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * <p/>
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * <p/>
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library.  If not, see <http://www.gnu.org/licenses/>.
 * <p/>
 * Contributors: Stefaan Ternier
 * ****************************************************************************
 */
@Api(name = "account")
public class AccountApi extends GenericApi {
    static {
        FirebaseAuthPersistence.getInstance();
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "accountDetails",
            path = "/account/accountDetails"
    )
    public Account getUserEmail(EnhancedUser user) throws EntityNotFoundException {

        return new AccountDelegator().getContactDetails(user);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "usersForOrganisation",
            path = "/account/organisation/{organisationId}/list"
    )
    public AccountList listOrganisation(EnhancedUser user,
                                        @Named("organisationId") Long organisationId) {
        return new AccountDelegator().listOrganisation(organisationId);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "eraseAnonAccount",
            path = "/account/eraseAnonAccount"
    )

    public Account eraseAnonAccount(EnhancedUser user) throws EntityNotFoundException {
        if (user.provider == 8) {
            new DeleteAccount(user.getProvider(), user.getLocalId()).scheduleTask();
            new DeleteRunsForAccount(user.getProvider(), user.getLocalId()).scheduleTask();
        }
        return new AccountDelegator().getContactDetails(user);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "create_account",
            path = "/account/create"
    )
    public Account createAccount(final User user, Account account) throws Exception {
        adminCheck(user);
        EnhancedUser us = (EnhancedUser) user;
        if (AccountManager.queryViaEmail(account.getEmail()) != null) {
            throw new ConflictException("User exists");
        }
        return CreateAccount.getInstance().createUser(account.getEmail(), account.getPassword(), account.getName(), account.getLabel());
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "update_display_name",
            path = "/account/update/displayName/asUser"
    )
    public Account updateDisplayName(final User user, Account account) throws Exception {
        FirebaseAuthPersistence.getInstance().updateDisplayName(user.getId(), account.getName());
        return CreateAccount.getInstance().updateUserWithoutAdmin(user.getId(), account.getEmail(), account.getName());
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "empty_account_index",
            path = "/account/resetIndex"
    )
    public void resetAccountIndex(final User user) throws Exception {
        adminCheck(user);
        EnhancedUser us = (EnhancedUser) user;
        CreateAccount.getInstance().resetIndex();
    }


    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "updateAccounts",
            path = "/account/updateOnce"
    )
    public void updateOnce(final User user) throws Exception {
        adminCheck(user);
        new AccountIterator().scheduleTask();
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "set_expiration_date",
            path = "/account/{fullId}/expiration/{dateAsEpoch}"
    )
    public void setExpirationDate(final User user, @Named("fullId") String accountId, @Named("dateAsEpoch") Long date) throws Exception {
        adminCheck(user);
        EnhancedUser us = (EnhancedUser) user;
        CreateAccount.getInstance().setExpirationDate(accountId, date);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "set_organisation_id",
            path = "/account/{fullId}/organisation/{organisationId}"
    )
    public Account setOrganisationId(final User user,
                                     @Named("fullId") String accountId,
                                     @Named("organisationId") Long organisationId) throws Exception {
        adminCheck(user);
        return CreateAccount.getInstance().setOrganisationId(accountId, organisationId);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "make_advanced",
            path = "/account/{fullId}/advanced/{value}"
    )
    public Account setAdvanced(final User user, @Named("fullId") String accountId, @Named("value") Boolean value) throws Exception {
        adminCheck(user);
        EnhancedUser us = (EnhancedUser) user;
        return CreateAccount.getInstance().setAdvanced(accountId, value);
    }


    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "make_admin",
            path = "/account/{fullId}/admin/{value}"
    )
    public Account makeAdmin(final User user, @Named("fullId") String accountId, @Named("value") Boolean value) throws Exception {
        adminCheck(user);
        EnhancedUser us = (EnhancedUser) user;
        return CreateAccount.getInstance().makeAdmin(accountId, value);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "set_can_AddUsers",
            path = "/account/{fullId}/canAddUsers/{value}"
    )
    public Account canAddUsers(final User user, @Named("fullId") String accountId, @Named("value") Boolean value) throws Exception {
        adminCheck(user);
        return AccountManager.setCanAddUsers(accountId, value);
    }


    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "set_can_publish_games",
            path = "/account/{fullId}/canPublishGames/{value}"
    )
    public Account canPublishGames(final User user, @Named("fullId") String accountId, @Named("value") Boolean value) throws Exception {
        adminCheck(user);
        return AccountManager.setCanPublishGames(accountId, value);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "update_account",
            path = "/account/update"
    )
    public Account updateAccount(final User user, Account account) throws Exception {
        adminCheck(user);
        return CreateAccount.getInstance().updateAccount(account);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "accountDetailsWithId",
            path = "/account/{fullId}"
    )
    public Account getFullAccount(EnhancedUser user, @Named("fullId") String accountId) {
        return new AccountDelegator().getContactDetails(accountId);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "accountDetailsWithIdAsAdmin",
            path = "/admin/account/{fullId}"
    )
    public Account getFullAccountAsAdmin(EnhancedUser user, @Named("fullId") String accountId) throws Exception {
        adminCheck(user);
        Account account = new AccountDelegator().getContactDetails(accountId);
        if (account != null && account.getFirebaseId() != null) {
            UserRecord record = FirebaseAuthPersistence.getInstance().getUser(account.getFirebaseId());
            if (record != null) {
                account.setClaimsFromMap(record.getCustomClaims());
            }
        }

        return account;
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "deleteAccount",
            path = "/account/{fullId}"
    )
    public Account deleteAccount(final User user, @Named("fullId") String accountId) throws Exception {
        adminCheck(user);
        if (accountId.startsWith("7:")) {
            try {
                FirebaseAuth.getInstance().deleteUser(accountId.substring(2));
            } catch(Exception e) {

            }
            new AccountSearchIndex(accountId, "", "", true).scheduleTask();
            return AccountManager.deleteAccount(accountId);
        } else {
            Account acc = new AccountDelegator().getContactDetails(accountId);
            String firebaseId = acc.getFirebaseId();
            if (firebaseId != null) {
                try {
                    FirebaseAuth.getInstance().deleteUser(firebaseId);
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
            new AccountSearchIndex(acc.getFullId(), "", "", true).scheduleTask();
            return AccountManager.deleteAccount(accountId);
        }
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "suspendAccount",
            path = "/account/suspend/{fullId}"
    )
    public Account suspendAccount(EnhancedUser user, @Named("fullId") String accountId) throws ForbiddenException {
        adminCheck(user);
        Account account = new AccountDelegator().getContactDetails(accountId);
        CreateAccount.getInstance().suspend(account);
        return account;
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "unSuspendAccount",
            path = "/account/unsuspend/{fullId}"
    )
    public Account unSuspendAccount(EnhancedUser user, @Named("fullId") String accountId) throws ForbiddenException, FirebaseAuthException {
        adminCheck(user);
        Account account = new AccountDelegator().getContactDetails(accountId);
        CreateAccount.getInstance().unsuspend(account);
        account.setExpirationDate(System.currentTimeMillis()+(24*3600000 *365L));
        CreateAccount.getInstance().updateAccount(account);
        return account;
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "accountDetailsWithIds",
            path = "/accounts/{fullIds}"
    )
    public AccountList getFullIdAccounts(EnhancedUser user, @Named("fullIds") String accountIds) {
        AccountList returnList = new AccountList();
        List<String> idList = Arrays.asList(accountIds.split(";"));
        for (String s : idList) {
            returnList.addAccount(new AccountDelegator().getContactDetails(s));
        }
        return returnList;
    }


    //todo set account name

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "delete_account",
            path = "/account/deleteMe"
    )
    public void deleteMe(final User user) {
        EnhancedUser us = (EnhancedUser) user;
        new AccountDelegator().deleteAccount(us);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "recentAccounts",
            path = "/usermgt/recent"
    )
    public AccountList getRecentAccounts(EnhancedUser user, @Nullable @Named("resumptionToken") String cursor) {
        return new AccountDelegator().recentAccounts(cursor);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "searchAllUsers",
            path = "/usermgt/accounts/{query}"
    )
    public AccountList searchUsers(EnhancedUser user, @Named("query") String query) throws ForbiddenException {
        adminCheck(user);
        AccountList returnList = new AccountList();
        if (user.isAdmin()) {
//            AccountManager.query(query)
            Results<ScoredDocument> results = new AccountSearchIndex().getIndex().search(query);
            for (ScoredDocument document : results) {
                Account account = new Account();
                account.setFullid(document.getId());
                account.setName(document.getFields("displayName").iterator().next().getText());
                account.setLabel(document.getFields("labels").iterator().next().getText());
                account.setEmail(document.getFields("email").iterator().next().getText());
                if (document.getFields("suspended") != null){
                    String suspendText = document.getFields("suspended").iterator().next().getText();
                    if (suspendText != null) {
                        account.setSuspended(Boolean.parseBoolean(suspendText));
                    }
                }


                try {
                    String exp = document.getFields("expirationDate").iterator().next().getText();
                    if (exp != null) {
                        account.setExpirationDate(Long.parseLong(exp));
                    }
                } catch (NullPointerException | NumberFormatException e ) {

                }
                returnList.addAccount(account);
            }
        }

        return returnList;
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "resetPw",
            path = "/account/resetpw/{email}",
            httpMethod = ApiMethod.HttpMethod.POST
    )
    public void resetPw(
            @Named("email") String email) throws Exception {
        Account account = new AccountDelegator().getWithEmail(email);

        if (account == null) {
            throw new NotFoundException("Account with email: "+email+ " was not found");
        } else {
            account.setInitPasswordToken(UUID.randomUUID().toString());
            account.setTokenExpirationDate((System.currentTimeMillis())+ 3000000);
            AccountManager.unsecureSave(account);
            String link = System.getenv("URL") + "/#/reset/wachtwoord/"+account.getInitPasswordToken();
            ResetPwTaks.setup(
                    account.getEmail(),
                    link,
                    account.getName()
            );
        }

    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "getAccountViaResetToken",
            path = "/account/resetPwToken/{token}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public Account getAccountViaResetToken(@Named("token") String token) throws Exception {
        Account account = new AccountDelegator().getAccountWithToken(token);
        System.out.println("account is "+ account);
        if (account == null || account.getTokenExpirationDate() == null ) {
            throw new NotFoundException("This token is not valid");
        }
        if (account.getTokenExpirationDate() < System.currentTimeMillis()) {
            throw new ForbiddenException("TOKEN.EXPIRED");
        }
        return account;
    }


    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "setNewpw",
            path = "/account/setPw/{token}",
            httpMethod = ApiMethod.HttpMethod.POST
    )
    public Account setNewPw(
            Password newPassword,
            @Named("token") String token) throws Exception {
        Account account = new AccountDelegator().getAccountWithToken(token);
        if (account == null || account.getTokenExpirationDate() == null ) {
            throw new NotFoundException("This token is not valid");
        }
        if (account.getTokenExpirationDate() < System.currentTimeMillis()) {
            throw new ForbiddenException("TOKEN.EXPIRED");
        }
        FirebaseAuthPersistence.getInstance().setPassword(account.getFirebaseId(), newPassword.getPassword(), newPassword.displayName);
        if (newPassword.displayName !=null) {
            account.setName(newPassword.displayName);
        }
        account.unsetToken();
        AccountManager.unsecureSave(account);
        return account;
    }

}
