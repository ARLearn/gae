package org.celstec.arlearn2.tasks.beans.account;

import org.celstec.arlearn2.jdo.manager.AccountManager;
import org.celstec.arlearn2.tasks.beans.GenericBean;

public class DeleteAccount extends GenericBean {


    public DeleteAccount() {super();}

    public DeleteAccount(int accountType, String localId) {
        super();
        this.localId = localId;
        this.accountType = accountType;
    }

    private int accountType;
    private String localId;

    public int getAccountType() {
        return accountType;
    }

    public void setAccountType(int accountType) {
        this.accountType = accountType;
    }

    public String getLocalId() {
        return localId;
    }

    public void setLocalId(String localId) {
        this.localId = localId;
    }

    @Override
    public void run() {
        try {
            AccountManager.deleteAccount(accountType+":"+localId);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
