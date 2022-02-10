package org.celstec.arlearn2.tasks.account;

import com.google.appengine.api.taskqueue.DeferredTask;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import com.google.firebase.auth.FirebaseAuthException;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.endpoints.impl.account.CreateAccount;
import org.celstec.arlearn2.jdo.manager.AccountManager;

public class UpdateAccountExpirationForOrganisation implements DeferredTask {

    Long organisationId;
    Long expirationDate;

    public UpdateAccountExpirationForOrganisation(Long organisationId, Long expirationDate) {
        this.organisationId = organisationId;
        this.expirationDate = expirationDate;

    }

    @Override
    public void run() {
        for (Account acc : AccountManager.listOrganisation(organisationId).getAccountList()) {
            acc.setExpirationDate(expirationDate);
            try {
                CreateAccount.getInstance().updateAccount(acc);
            } catch (FirebaseAuthException e) {
                e.printStackTrace();
            }
        }
    }

    public static void setup(Long organisationId, Long expirationDate) {
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(
                                new UpdateAccountExpirationForOrganisation(organisationId, expirationDate)
                        )
        );
    }
}
