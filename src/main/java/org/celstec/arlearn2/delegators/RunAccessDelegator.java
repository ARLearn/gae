package org.celstec.arlearn2.delegators;

import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.run.RunAccess;
import org.celstec.arlearn2.beans.run.RunAccessList;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.classes.RunAccessEntity;
import org.celstec.arlearn2.jdo.manager.RunAccessManager;

import java.util.Iterator;
import java.util.StringTokenizer;


public class RunAccessDelegator  {

//    public RunAccessDelegator(EnhancedUser user) {
//        super(user);
//    }

    public RunAccessDelegator() {

    }

    public RunAccess provideAccessWithCheck(Long runIdentifier, Long gameId, EnhancedUser account, Integer accessRight) {
        return provideAccess(runIdentifier, gameId, account, accessRight);
    }

    public RunAccess provideAccess(Long runIdentifier, Long gameId, EnhancedUser us, int accessRights) {
        return RunAccessManager.addRunAccess(us.localId, us.getProvider(), runIdentifier, gameId, accessRights);
    }

    public void provideAccess(Long runIdentifier, Long gameId, Account account, int accessRights) {
        RunAccessManager.addRunAccess(account.getLocalId(), account.getAccountType(), runIdentifier, gameId, accessRights);
    }

//    public RunAccessList getRunsAccess(Long from, Long until) {
//        RunAccessList gl = new RunAccessList();
//        if (account != null) {
//            return getRunsAccess(account.getFullId(), from, until);
//        }
//        gl.setError("login to retrieve your list of runs");
//        return gl;
//    }

//    public RunAccessList getRunsAccess(Long gameId) {
//        RunAccessList gl = new RunAccessList();
//        if (account != null) {
//            return getRunsAccess(account.getFullId(), gameId);
//        }
//        gl.setError("login to retrieve your list of runs");
//        return gl;
//    }

    public RunAccessList getRunsAccess(String account, Long from, Long until) {
        StringTokenizer st = new StringTokenizer(account, ":");
        int accountType = 0;
        String localID = null;
        if (st.hasMoreTokens()) {
            accountType = Integer.parseInt(st.nextToken());
        }
        if (st.hasMoreTokens()) {
            localID = st.nextToken();
        }
        Iterator<RunAccess> it = RunAccessManager.getRunList(accountType, localID, from, until).iterator();
        RunAccessList rl = new RunAccessList();
        while (it.hasNext()) {
            RunAccess ga = (RunAccess) it.next();
            rl.addRunAccess(ga);
        }
        rl.setServerTime(System.currentTimeMillis());
        return rl;
    }

    public RunAccessList getRunsAccess( Long gameId, int accountType, String localID) {
//        StringTokenizer st = new StringTokenizer(account, ":");
//        int accountType = 0;
//        String localID = null;
//        if (st.hasMoreTokens()) {
//            accountType = Integer.parseInt(st.nextToken());
//        }
//        if (st.hasMoreTokens()) {
//            localID = st.nextToken();
//        }
        Iterator<RunAccess> it = RunAccessManager.getRunList(accountType, localID, gameId).iterator();
        RunAccessList rl = new RunAccessList();
        while (it.hasNext()) {
            RunAccess ga = (RunAccess) it.next();
            rl.addRunAccess(ga);
        }
        rl.setServerTime(System.currentTimeMillis());
        return rl;
    }


    public RunAccessList getRunAccess(Long runId) {
        RunAccessList ral = new RunAccessList();
        ral.setRunAccess(RunAccessManager.getRunAccessList(runId));
        return ral;
    }

    public boolean isOwner(Long runId, EnhancedUser us) {
        try {
            return RunAccessManager.getAccessById(us.createFullId() + ":" + runId).getAccessRights() == RunAccessEntity.OWNER;
        } catch (Exception e) {
            return false;
        }

    }

    public boolean isOwner(Long runId, String fullId) {
        try {
            return RunAccessManager.getAccessById(fullId + ":" + runId).getAccessRights() == RunAccessEntity.OWNER;
        } catch (Exception e) {
            return false;
        }

    }

    public void removeAccessWithCheck(Long runId, String fullId) {
        StringTokenizer st = new StringTokenizer(fullId, ":");
        int accountType = 0;
        String localID = null;
        if (st.hasMoreTokens()) {
            accountType = Integer.parseInt(st.nextToken());
        }
        if (st.hasMoreTokens()) {
            localID = st.nextToken();
        }
        RunAccessManager.removeRunAccess(localID, accountType, runId);

    }



//    public void broadcastRunUpdate(Run run) {
//        for (RunAccess ra : RunAccessManager.getRunAccessList(run.getRunId())) {
//            new NotificationDelegator(this).broadcast(run, ra.getAccount());
//        }
//
//
//    }
}
