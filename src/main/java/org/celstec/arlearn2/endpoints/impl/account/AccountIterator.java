package org.celstec.arlearn2.endpoints.impl.account;

import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.account.AccountList;
import org.celstec.arlearn2.delegators.AccountDelegator;
import org.celstec.arlearn2.jdo.manager.AccountManager;
import org.celstec.arlearn2.tasks.beans.GenericBean;

public class AccountIterator extends GenericBean {

    String cursor;

    public AccountIterator() {

    }

    public AccountIterator(String cursor) {
        this.cursor = cursor;
    }

    public String getCursor() {
        return cursor;
    }

    public void setCursor(String cursor) {
        this.cursor = cursor;
    }

    @Override
    public void run() {
        AccountList al = AccountManager.queryAll(cursor);
        AccountDelegator ad = new AccountDelegator();
        for (Account account: al.getAccountList()) {
            if ((account.getFirebaseId() == null || account.getFirebaseId().startsWith("7:")) && account.getAccountType() == 7) {
                account.setFirebaseId(account.getLocalId());
                ad.createAccount(account.getFirebaseId(),
                        account.getLocalId(), account.getAccountType(), account.getEmail().toLowerCase(),
                        account.getName(), null, account.getExpirationDate()==null?-1l:account.getExpirationDate(), account.getLabel());
            }
            if (account.getName() == null) {
                account.setName("");
            }
            if (account.getEmail() == null) {
                account.setEmail("");
            }
            new AccountSearchIndex(account.getFullId(), account.getName().toLowerCase(), account.getLabel(),
                    account.getEmail().toLowerCase(), account.getExpirationDate()).addToIndex();
        }
        if (al.getResumptionToken()!= null) {
            System.out.println("AccountIterator schedule task "+cursor+" - "+al.getResumptionToken());
            new AccountIterator(al.getResumptionToken()).scheduleTask();
        } else {
            System.out.println("AccountIterator null don't schedule task "+cursor+" - "+al.getResumptionToken());

        }
    }

    public void scheduleTask() {
        Queue queue = QueueFactory.getDefaultQueue();
        TaskOptions to  = TaskOptions.Builder.withUrl("/asyncTask")
                .param("type", this.getClass().getName());
        queue.add(setParameters(to));
    }
}
