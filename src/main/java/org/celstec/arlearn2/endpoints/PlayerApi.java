package org.celstec.arlearn2.endpoints;

import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.config.Nullable;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.account.AccountList;
import org.celstec.arlearn2.beans.api.ConnectionInvitation;
import org.celstec.arlearn2.delegators.AccountDelegator;
import org.celstec.arlearn2.delegators.CollaborationDelegator;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.ContactManager;

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
@Api(name = "player")
public class PlayerApi extends GenericApi {


    @ApiMethod(
            name = "myGamesSince",
            path = "/account/myContacts/list/{since}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public AccountList myAccountsSince(final EnhancedUser user,
                                  @Named("since") long from,
                                  @Nullable @Named("resumptionToken") String cursor) {
        CollaborationDelegator cd = new CollaborationDelegator();
        return cd.getContacts(user, from, cursor);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "myContacts",
            path = "/player/myContacts"
    )
    public AccountList getMyContacts(EnhancedUser user) {
        CollaborationDelegator cd = new CollaborationDelegator();
        return cd.getContacts(user, null);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "myContactsCursor",
            path = "/player/myContacts/cursor/{cursor}"
    )
    public AccountList getMyContactsCursor(EnhancedUser user, @Named("cursor") String cursor) {
        CollaborationDelegator cd = new CollaborationDelegator();
        return cd.getContacts(user, cursor);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "contacts",
            path = "/player/myContacts/{tillTime}"
    )
    public AccountList getContacts(EnhancedUser user, @Named("tillTime") long time) {
        CollaborationDelegator cd = new CollaborationDelegator();
        return cd.getContacts(user,0l, time, null);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "one_contact",
            path = "/player/contact/{userFullId}"
    )
    public Account getOneContact(EnhancedUser user, @Named("userFullId") String fullId) {
        CollaborationDelegator cd = new CollaborationDelegator();
        AccountDelegator ad = new AccountDelegator();
        return ad.getContactDetails(fullId);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "contactsWithCursor",
            path = "/player/myContacts/{cursor}/{time}"
    )
    public AccountList getContactsWithCursor(EnhancedUser user
            , @Named("time") long time
            , @Named("cursor") String cursor) {

        CollaborationDelegator cd = new CollaborationDelegator();
        return cd.getContacts(user, 0l, time, cursor);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "pendinginvitations",
            path = "/player/pendingInvitations"
    )
    public AccountList getPending(EnhancedUser user) {
        CollaborationDelegator cd = new CollaborationDelegator();
        return cd.pendingInvitations(user);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "pendinginvitationsToMe",
            path = "/player/invitationsToMe"
    )
    public AccountList getPendingInvitationsToMe(EnhancedUser user) {
        return ContactManager.pendingInvitationsToEmail(user.getEmail());
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "confirmInvitation",
            path = "/player/confirmInvitation/{invitationId}"
    )
    public void confirmInvitation(EnhancedUser user, @Named("invitationId") String invitationId) {
        CollaborationDelegator cd = new CollaborationDelegator();
        cd.confirmAddContact(invitationId, user);
    }


    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "getInvitation",
            path = "/player/invitation/{invitationId}"
    )
    public Account getAccountForInvitation(@Named("invitationId") String invitationId) {
        CollaborationDelegator cd = new CollaborationDelegator();
        return cd.getAccountForInvitation(invitationId);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "removePending",
            path = "/player/pending/{identifier}"
    )
    public void removePending(EnhancedUser user, @Named("identifier") String identifier) {

        CollaborationDelegator cd = new CollaborationDelegator();
        cd.removeInvitation(identifier);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "reinvite",
            path = "/player/reinvite/{invitationId}"
    )
    public void resendInvitation(EnhancedUser user, @Named("invitationId") String invitationId) {
        CollaborationDelegator cd = new CollaborationDelegator();
        cd.resendInvitation(invitationId, ((EnhancedUser) user).name);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "addcontact",
            path = "/player/add"
    )
    public void addContacts(final User user, ConnectionInvitation metadata) {
        EnhancedUser us = (EnhancedUser) user;
        CollaborationDelegator cd = new CollaborationDelegator();
        if (metadata.addpers) {
            cd.addContactViaEmail(metadata.email, metadata.note, ((EnhancedUser) user).name, us);
        } else {
            cd.addContactViaEmail(metadata.email, "default note", ((EnhancedUser) user).name, us);
        }

    }


    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "removeContact",
            path = "/player/remove/{accountType}/{localId}"
    )
    public void removeContacts(EnhancedUser user, @Named("accountType") int accountType, @Named("localId") String localId) {
        CollaborationDelegator cd = new CollaborationDelegator();
        cd.removeContact(accountType, localId, user);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "deleteContact",
            path = "/player/delete/{accountType}/{localId}"
    )
    public void deleteContacts(EnhancedUser user, @Named("accountType") int accountType, @Named("localId") String localId) {
        CollaborationDelegator cd = new CollaborationDelegator();
        cd.softDeleteContact(accountType, localId, user);
    }

}
