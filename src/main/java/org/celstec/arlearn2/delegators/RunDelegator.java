/*******************************************************************************
 * Copyright (C) 2013 Open Universiteit Nederland
 *
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 * Contributors: Stefaan Ternier
 ******************************************************************************/
package org.celstec.arlearn2.delegators;

import com.google.api.server.spi.response.ForbiddenException;
import org.celstec.arlearn2.beans.game.Config;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.run.*;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.classes.RunAccessEntity;
import org.celstec.arlearn2.jdo.manager.RunAccessManager;
import org.celstec.arlearn2.jdo.manager.RunManager;
import org.celstec.arlearn2.jdo.manager.UserManager;
import org.celstec.arlearn2.tasks.beans.*;
import org.celstec.arlearn2.util.RunsCache;

import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

public class RunDelegator {
    private static final Logger logger = Logger.getLogger(RunDelegator.class.getName());

    public RunDelegator() {

    }

//    public RunDelegator(EnhancedUser user) {
//        super(user);
//    }
//
//    public RunDelegator(GenericBean bean) {
//        super(bean);
//    }


//    public RunDelegator(GoogleDelegator gd) {
//        super(gd);
//    }

//    public RunDelegator(Account account, String authToken) {
//        super(account, authToken);
//    }

    public Run getRun(Long runId) {
        return getRun(runId, true);
    }

    public Run getRun(Long runId, boolean withGame) {
        Run r = RunsCache.getInstance().getRun(runId);
        if (r == null) {
            r = RunManager.getRun(runId);
            if (r == null)
                return null;
            RunsCache.getInstance().putRun(runId, r);
        }
        if (withGame) {
            GameDelegator gd = new GameDelegator();
            r.setGame(gd.getGame(r.getGameId(), false));
        }
        return r;
    }

//    public RunList getRuns() {
//        RunList rl = new RunList();
//        UsersDelegator qu = new UsersDelegator();
//        String myAccount = qu.getCurrentUserAccount();
//
//        if (myAccount == null) {
//            rl.setError("login to retrieve your list of games");
//        } else {
//            rl.setRuns(RunManager.getRunsWithAccount(myAccount));
//        }
//        return rl;
//    }

    public long getRunDuration(Long runId) {
        Run r = getRun(runId);
        if (r == null) {
            System.out.println("runid is null");
            return 0;
        }
        Long runStartTime = r.getStartTime();
        if (runStartTime == null)
            return 0;
        return System.currentTimeMillis() - r.getStartTime();
    }



    public boolean hasParticipateRuns(Long gameId, String fullId) {
        return UserManager.hasUserListByGameId(gameId, fullId);
    }

    public RunList getParticipateRuns(Long gameId, String fullId) {

        Iterator<User> it = UserManager.getUserListByGameId(gameId, fullId).iterator();
        RunList rl = new RunList();
        while (it.hasNext()) {
            User user = (User) it.next();
            Run r = getRun(user.getRunId());
            if (r != null) {
                if (r.getDeleted() == null || r.getDeleted() == false) r.setDeleted(user.getDeleted());
                rl.addRun(r);
            } else {
                logger.severe("following run does not exist" + user.getRunId());

            }
        }
        rl.setServerTime(System.currentTimeMillis());

        return rl;
    }

    public RunList getRuns(String accountId) {
        UsersDelegator qu = new UsersDelegator();

        // TODO migrate this method to UserQuery
        // TODO add this to cache
        // TODO migrate RunsCache
        Iterator<User> it = UserManager.getUserList(accountId).iterator();
        RunList rl = new RunList();
        while (it.hasNext()) {
            User user = (User) it.next();
            Run r = getRun(user.getRunId());
            if (r != null) {
                if (r.getDeleted() == null || r.getDeleted() == false) r.setDeleted(user.getDeleted());
                rl.addRun(r);
            } else {
                logger.severe("following run does not exist" + user.getRunId());

            }
        }
        rl.setServerTime(System.currentTimeMillis());

        return rl;
    }

//    public RunList getParticipateRuns(Long from, Long until) {
//        UsersDelegator qu = new UsersDelegator();
//        String myAccount = qu.getCurrentUserAccount();
//        // TODO migrate this method to UserQuery
//        // TODO add this to cache
//        // TODO migrate RunsCache
//        Iterator<User> it = UserManager.getUserList(myAccount, from, until).iterator();
//        RunList rl = new RunList();
//        while (it.hasNext()) {
//            User user = (User) it.next();
//            Run r = getRun(user.getRunId());
//            if (r != null) {
//                if (user.getDeleted() != null && user.getDeleted()) r.setDeleted(user.getDeleted());
//                rl.addRun(r);
//            } else {
//                logger.severe("following run does not exist" + user.getRunId());
//
//            }
//        }
//        rl.setServerTime(System.currentTimeMillis());
//        return rl;
//    }

    public Run createRun(EnhancedUser us, Run run) {
        if (run.getRunId() != null) RunsCache.getInstance().removeRun(run.getRunId());
        if (run.getStartTime() == null) {
            run.setStartTime(System.currentTimeMillis());
            run.setServerCreationTime(run.getStartTime());
        }
        String myAccount = "";
        if (us != null) {
            UsersDelegator qu = new UsersDelegator();
            myAccount = us.createFullId();

            if (myAccount == null) {
                run.setError("login to create a game");
                return run;
            }
        }
        GameDelegator cg = new GameDelegator();
        Game game = cg.getGame(run.getGameId());
        if (game == null) {
            run.setError("Game with id '" + run.getGameId() + "' does not exist");
            return run;
        }

        return createRunWithAccount(us, run);
//		} else {
//			run.setRunId(RunManager.addRun(run.getTitle(), myAccount, game.getGameId(), run.getRunId(), run.getStartTime(), run.getServerCreationTime(), run));
//			return run;
//		}
    }

    private Run createRunWithAccount(EnhancedUser us, Run run) {
        run.setRunId(RunManager.addRun(run));

        RunAccessDelegator rd = new RunAccessDelegator();
        rd.provideAccess(run.getRunId(), run.getGameId(), us, RunAccessEntity.OWNER);

        return run;
    }


    public Run deleteRun(Long runId, EnhancedUser us) {
        UsersDelegator qu = new UsersDelegator();
//        String myAccount = qu.getCurrentUserAccount();
        return deleteRun(getRun(runId), us.createFullId());
    }

    private Run deleteRun(Run r, String myAccount) {
        RunAccessDelegator gad = null;
        if (myAccount != null) {
            gad = new RunAccessDelegator();
            if (!gad.isOwner(r.getRunId(), myAccount)) {
                Run run = new Run();
                run.setError("You are not the owner of this run");
                return run;
            }
        } else if (!r.getOwner().equals(myAccount)) {
            Run run = new Run();
            run.setError("You are not the owner of this run");
            return run;
        }
//		RunManager.deleteRun(r.getRunId());
        RunManager.setStatusDeleted(r.getRunId());
        RunAccessManager.resetGameAccessLastModificationDate(r.getRunId());
        RunsCache.getInstance().removeRun(r.getRunId());
        (new UpdateGeneralItemsVisibility( r.getRunId(), null, 2)).scheduleTask();



        (new DeleteActions(r.getRunId())).scheduleTask();
        (new DeleteTeams( r.getRunId(), null)).scheduleTask();

        (new DeleteUserAfterDeleteRun(r.getRunId())).scheduleTask();

        (new DeleteResponses( r.getRunId())).scheduleTask();
        return r;
    }

    public void deleteRuns(long gameId, String email) {
        List<Run> runList = RunManager.getRunsWithGameId(gameId);
        for (Run r : runList) {
            deleteRun(r, email);
        }
    }

    public Config getConfig(Long runId) {
        Run r = getRun(runId);
        GameDelegator gd = new GameDelegator();
        return gd.getGame(r.getGameId(), false).getConfig();
    }

    public List<Run> getRunsForGame(long gameId) {
        return RunManager.getRunsWithGameId( gameId);

    }


    public RunList getTaggedRuns(String tagId) {
        RunList rl = new RunList();
        rl.setRuns(RunManager.getRunsWithTagId(tagId));
        return rl;
    }


//    private Run selfRegister(Run run) { //, String myAccount
//        TeamsDelegator td = new TeamsDelegator();
//        TeamList tl = td.getTeams(run.getRunId());
//        for (Team team : tl.getTeams()) {
//            if ("default".equals(team.getName())) {
//                return selfRegister(run, team); //, myAccount
//            }
//        }
//        if (!tl.getTeams().isEmpty()) {
//            return selfRegister(run, tl.getTeams().get(0)); //, myAccount
//        }
//        Team team = td.createTeam(run.getRunId(), null, "default");
//        return selfRegister(run,  team); //myAccount,
//    }

    private Run selfRegister(Run run, Team team, EnhancedUser myAccount) { //, String myAccount
        UsersDelegator ud = new UsersDelegator();

        User u = new User();
        u.setRunId(run.getRunId());
        u.setEmail(myAccount.createFullId());
        u.setTeamId(team.getTeamId());
        u.setFullIdentifier(myAccount.createFullId());
        u.setGameId(run.getGameId());
        ud.selfRegister(u, run);

        return run;
    }



//    public Run selfRegister(Long runId) {
//        UsersDelegator qu = new UsersDelegator();
//        String myAccount = qu.getCurrentUserAccount();
//
//
//        Run r = RunManager.getRun(runId);
//        if (r != null) { //&& runList.get(0).getTagId() != null
//            return selfRegister(r);
//        } else {
//            Run run = new Run();
//            run.setError("No run with runId " + runId + " exists");
//            return run;
//        }
//    }

    public Run selfRegister(Long runId, EnhancedUser enhancedUser) throws ForbiddenException {
        Run r = RunManager.getRun(runId);
        if (r != null) {
            if (r.getRunConfig()== null || !r.getRunConfig().getSelfRegistration()) {
                throw new ForbiddenException("self registration is not possible");
            }
            return selfRegister(r, enhancedUser);
        } else {
            System.out.println("No run with runId " + runId + " exists");
            Run run = new Run();
            run.setError("No run with runId " + runId + " exists");
            return run;
        }
    }


    private Run selfRegister(Run run, EnhancedUser myAccount) { //, String myAccount
        TeamsDelegator td = new TeamsDelegator();
        TeamList tl = td.getTeams(run.getRunId());
        for (Team team : tl.getTeams()) {
            if ("default".equals(team.getName())) {
                return selfRegister(run, team, myAccount); //, myAccount
            }
        }
        if (!tl.getTeams().isEmpty()) {
            return selfRegister(run, tl.getTeams().get(0), myAccount); //, myAccount
        }
        Team team = td.createTeam(run.getRunId(), null, "default");
        return selfRegister(run,  team,myAccount); //myAccount,
    }


    public RunList getRuns(String resumptionToken, long gameId, int provider, String localId) {
        RunList runList = new RunList();
        RunAccessList runAccessList = RunAccessManager.getRunList(provider, localId, resumptionToken, gameId);
        runList.setServerTime(runAccessList.getServerTime());
        runList.setResumptionToken(runAccessList.getResumptionToken());
        for (RunAccess runAccess: runAccessList.getRunAccess()) {
            Run run = getRun(runAccess.getRunId());
            if (run != null) {
                runList.addRun(run);
            }
        }
        return runList;
    }

}
