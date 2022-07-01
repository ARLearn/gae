package org.celstec.arlearn2.delegators;

import com.google.api.server.spi.response.ForbiddenException;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.run.Run;
import org.celstec.arlearn2.beans.run.RunAccess;
import org.celstec.arlearn2.beans.run.RunAccessList;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.classes.GameAccessEntity;
import org.celstec.arlearn2.jdo.classes.RunAccessEntity;
import org.celstec.arlearn2.jdo.manager.GameAccessManager;
import org.celstec.arlearn2.jdo.manager.RunAccessManager;
import org.celstec.arlearn2.jdo.manager.RunManager;

import java.util.Iterator;
import java.util.List;
import java.util.StringTokenizer;


public class RunAccessDelegator {

//    public RunAccessDelegator(EnhancedUser user) {
//        super(user);
//    }

    public RunAccessDelegator() {

    }

    public RunAccess provideAccessWithCheck(Long runIdentifier, Long gameId, String fullId, Integer accessRight) throws ForbiddenException {
        StringTokenizer st = new StringTokenizer(fullId, ":");
        Integer accountType = null;
        String localId = null;
        if (st.hasMoreTokens()) {
            accountType = Integer.parseInt(st.nextToken());
        }
        if (st.hasMoreTokens()) {
            localId = (st.nextToken());
        }
        if (accountType == null || localId == null) {
            return null;
        }
        RunAccessList ral = getRunAccess(runIdentifier);
        if (accessRight != RunAccessEntity.OWNER && ral.amountOfAdmins() <= 1) {
            if (ral.isAdmin(fullId)) {
                throw new ForbiddenException("LAST_ADMIN");
            }
        }
        return RunAccessManager.addRunAccess(localId, accountType, runIdentifier, gameId, accessRight);
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

    public void provideAccess(Long runIdentifier, Long gameId, String fullId, int accessRights) {

        StringTokenizer st = new StringTokenizer(fullId, ":");
        int accountType = 0;
        String localID = null;
        if (st.hasMoreTokens()) {
            accountType = Integer.parseInt(st.nextToken());
        }
        if (st.hasMoreTokens()) {
            localID = st.nextToken();
        }
        RunAccessManager.addRunAccess(localID, accountType, runIdentifier, gameId, accessRights);
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

    public RunAccessList getRunsAccess(Long gameId, int accountType, String localID) {
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


    public RunAccessList getRunAccess(String account, String resumptionToken, long from) {
        StringTokenizer st = new StringTokenizer(account, ":");
        int accountType = 0;
        String localID = null;
        if (st.hasMoreTokens()) {
            accountType = Integer.parseInt(st.nextToken());
        }
        if (st.hasMoreTokens()) {
            localID = st.nextToken();
        }
        return RunAccessManager.getRunListFrom(accountType, localID, resumptionToken, from);
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
        Run run = RunManager.getRun(runId);
        provideAccess(runId, run.getGameId(), fullId, RunAccessEntity.ACCESS_REMOVED);
//        RunAccessManager.removeRunAccess(localID, accountType, runId);

    }


    public boolean canView(Long gameId, final EnhancedUser user) {
        List<RunAccess> rl = RunAccessManager.getRunList(user.getProvider(), user.getLocalId(), null, gameId);
        for (RunAccess runAccess : rl) {
            if (runAccess.getAccessRights() > 0) {
                return true;
            }
        }
        return false;

    }



}
