package org.celstec.arlearn2.tasks.beans.account;

import org.celstec.arlearn2.beans.run.RunAccess;
import org.celstec.arlearn2.jdo.manager.AccountManager;
import org.celstec.arlearn2.jdo.manager.RunAccessManager;
import org.celstec.arlearn2.jdo.manager.RunManager;
import org.celstec.arlearn2.tasks.beans.DeleteActions;
import org.celstec.arlearn2.tasks.beans.DeleteResponses;
import org.celstec.arlearn2.tasks.beans.GenericBean;

import java.util.List;

public class DeleteRunsForAccount  extends GenericBean {

    public DeleteRunsForAccount() {super();}

    public DeleteRunsForAccount(int accountType, String localId) {
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
            Long from = 0l;
            Long until = System.currentTimeMillis();
            List<RunAccess> rl = RunAccessManager.getRunList(accountType, localId, from, until);
            for (int i = 0; i < rl.size(); i++) {
                RunAccess runAccess = rl.get(i);
                RunAccessManager.removeRunAccess( localId, accountType, runAccess.getRunId());
                RunManager.removeRunAccess(runAccess.getRunId());
                DeleteActions da = new DeleteActions();
                da.setFullAccount(accountType+":"+localId);
                da.setRunId(runAccess.getRunId());
                da.scheduleTask();
                DeleteResponses dr = new DeleteResponses();
                dr.setRunId(runAccess.getRunId());
                dr.scheduleTask();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
