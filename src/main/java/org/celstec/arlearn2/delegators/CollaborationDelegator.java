package org.celstec.arlearn2.delegators;

import com.google.appengine.api.utils.SystemProperty;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.account.AccountList;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.classes.ContactEntity;
import org.celstec.arlearn2.jdo.manager.AccountManager;
import org.celstec.arlearn2.jdo.manager.ContactManager;
import org.celstec.arlearn2.tasks.mail.AddContactMail;

public class CollaborationDelegator {

//    public CollaborationDelegator(EnhancedUser user) {
//        super(user);
//    }

    public CollaborationDelegator() {
        super();
    }
//    public CollaborationDelegator(GoogleDelegator gd) {
//        super(gd);
//    }

    public Account getContactDetails(String addContactToken) {
        Account myAccount = ContactManager.getContactViaId(addContactToken);
        if (myAccount == null) return null;
        AccountDelegator ad = new AccountDelegator();
        myAccount = ad.getAccountInfo(myAccount);
        if (myAccount == null) return null;
        return myAccount;
    }



    public void addContactViaEmail(String toEmail, String note, String from, EnhancedUser us) {
//        com.google.apphosting.api.ApiProxy.getCurrentEnvironment();
//
//        ContactEntity jdo = ContactManager.addContactInvitation(us.getLocalId(), us.getProvider(), toEmail, from);
//
//        String msgBody = "<html><body>";
//        msgBody += "Hi,<br>";
//        msgBody += "<p>";
//        msgBody += from + " has invited you to become his contact";
//        msgBody += "</p>";
//        msgBody += note;
//        msgBody += "<p>";
//        msgBody += "Click  <a href=\"http://" + SystemProperty.applicationId.get() + ".appspot.com/#/connections/pending/\">here</a> to accept this invitation.";
//        msgBody += "</p>";
//        msgBody += "</body></html>";
//
//        MailDelegator md;
//
//        md = new MailDelegator();
//        md.sendMail("no-reply@" + SystemProperty.applicationId.get() + ".appspotmail.com", from, toEmail, "Pending contact request", msgBody);

        AddContactMail.setup(toEmail, toEmail, from, note);

    }

    public String confirmAddContact(String addContactToken, EnhancedUser user) {
        Account fullAccount = getMyAccount(user);
        if (fullAccount == null) return null;
        Account targetAccount = ContactManager.getContactViaId(addContactToken);

        ContactManager.addContact(fullAccount, targetAccount, addContactToken);
        return "{}";
    }

    public void resendInvitation(String addContactToken, String from) {
        Account targetAccount = ContactManager.getContactViaId(addContactToken);
        String toEmail = targetAccount.getEmail();

//        String msgBody = "<html><body>";
//        msgBody += "Hi,<br>";
//        msgBody += "<p>";
//        msgBody += from + " is still waiting for you to become his contact";
//        msgBody += "Click  <a href=\"http://" + SystemProperty.applicationId.get() + ".appspot.com/#/connections/pending/\">here</a> to accept this invitation.";
//        msgBody += "</p>";
//        msgBody += "</body></html>";
//
//        MailDelegator md;
//
//        md = new MailDelegator();
//        md.sendMail("no-reply@" + SystemProperty.applicationId.get() + ".appspotmail.com", from, toEmail, "Pending contact request", msgBody);
        AddContactMail.setup(toEmail, toEmail, from, "");
    }


    public Account getAccountForInvitation(String addContactToken) {
        Account contact =  ContactManager.getContactViaId(addContactToken);
        if (contact.getError() != null) return contact;
        return  AccountManager.getAccount(contact.getFullId());
    }

    public Account getMyAccount(EnhancedUser user) {
        return AccountManager.getAccount(user);
    }


    public AccountList getContacts(EnhancedUser user, String cursor) {
        return ContactManager.getContacts(user.getProvider(), user.getLocalId(), cursor, new AccountDelegator());
    }

    public AccountList getContacts(EnhancedUser user, Long from, String cursor) {
        return ContactManager.getContacts(user.getProvider(), user.getLocalId(), from,  cursor, new AccountDelegator());
    }

    public AccountList getContacts(EnhancedUser user, Long from, Long until, String cursor) {
        return ContactManager.getContacts(user.getProvider(), user.getLocalId(), from, until, cursor, new AccountDelegator());
    }

    public AccountList pendingInvitations(EnhancedUser user) {
        return ContactManager.pendingInvitations(user.getProvider(), user.getLocalId());
    }


    public void removeInvitation(String invitation) {
        ContactManager.removeInvitation(invitation);
    }

    public void removeContact(Integer accountType, String localId, EnhancedUser user) {
        Account fullAccount = getMyAccount(user);
        ContactManager.removeContact(fullAccount.getAccountType(), fullAccount.getLocalId(), accountType, localId);
    }

    public void softDeleteContact(Integer accountType, String localId, EnhancedUser user) {
        Account fullAccount = getMyAccount(user);
        ContactManager.deleteContact(fullAccount.getAccountType(), fullAccount.getLocalId(), accountType, localId);
    }
}
