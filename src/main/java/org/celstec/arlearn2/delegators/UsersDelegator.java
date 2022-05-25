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

import com.google.appengine.api.taskqueue.DeferredTask;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.run.*;
import org.celstec.arlearn2.cache.UsersCache;
import org.celstec.arlearn2.jdo.manager.UserManager;
import org.celstec.arlearn2.tasks.beans.DeleteActions;
import org.celstec.arlearn2.tasks.beans.DeleteResponses;
import org.celstec.arlearn2.tasks.beans.DeleteRunCloudStorage;
import org.celstec.arlearn2.tasks.beans.UpdateGeneralItemsVisibility;
import org.celstec.arlearn2.tasks.game.IncrementPlayCount;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

public class UsersDelegator {

    public UsersDelegator() {

    }

//    public UsersDelegator(EnhancedUser user) {
//        super(user);
//    }
//
//    public UsersDelegator(Account account, String token) {
//        super(account, token);
//    }

    public User createUser(User u) {
        User check = checkUser(u);
        if (check != null)
            return check;
        Run run = (new RunDelegator()).getRun(u.getRunId());

        u.setEmail(u.getAccountType() + ":" + u.getLocalId());
        u.setGameId(run.getGameId());
        UserManager.addUser(u);
        UsersCache.getInstance().removeUser(u.getRunId()); // removing because

        (new UpdateGeneralItemsVisibility(u.getRunId(), u.getEmail(), 1)).scheduleTask();

        IncrementPlayCount.setup(run.getGameId());

        AccountDelegator ad = new AccountDelegator();
        Account ac = ad.getContactDetails(u.getFullId());

        if (ac != null && ac.getError() == null) {
            u.setAccountData(ac);
        }

        return u;
    }

    private User checkUser(User u) {
        if (u.getRunId() == null) {
            u.setError("No run identifier specified");
            return u;
        }
        if (u.getTeamId() != null) {
            TeamList tl = (new TeamsDelegator()).getTeams(u.getRunId());
            if (!tl.getTeams().isEmpty()) {
                Team dbTeam = null;
                for (Team t : tl.getTeams()) {
                    if (t.getTeamId().equals(u.getTeamId()))
                        dbTeam = t;
                }
                if (dbTeam == null) {
                    u.setError("teamId does not exist in db");
                    return u;
                }
            }
        }
        return null;
    }

    public User selfRegister(User u) {
        User check = checkUser(u);
        if (check != null)
            return check;

        UsersCache.getInstance().removeUser(u.getRunId()); // removing because
        UserManager.hardDeleteUser(u.getRunId(), u.getEmail());
        UserManager.addUser(u);
        IncrementPlayCount.setup(u.getGameId());

        return u;
    }

    private void enrichListWithAccountInfo(List<User> users) {
        AccountDelegator ad = new AccountDelegator();
        Iterator<User> it = users.iterator();
        while (it.hasNext()) {
            User u = it.next();
            Account ac = ad.getContactDetails(u.getFullId());
            if (ac == null || ac.getError() != null) it.remove();
            if (ac != null) u.setAccountData(ac);
        }
    }

    public List<User> getUserList(Long runId) {
        System.out.println("users for run " + runId);
        List<User> users = UsersCache.getInstance().getUserList(runId);
        if (users == null) {
            users = UserManager.getUserList(runId);
            enrichListWithAccountInfo(users);
            UsersCache.getInstance().putUserList(users, runId);
        }
        return users;
    }

    public List<User> getUserListByTeamId(Long runId, String teamId) {
        List<User> users = UsersCache.getInstance().getUserList(runId, teamId);
        if (users == null) {
            users = UserManager.getUserListByTeamId(runId, teamId);
            enrichListWithAccountInfo(users);
            UsersCache.getInstance().putUserList(users, runId, teamId);
        }
        return users;
    }

    public boolean userExists(Long gameId, String email) {
        return UserManager.userExists(gameId, email);
    }

    public List<User> getUserList(Long runId, String fullId) {
        List<User> users = UsersCache.getInstance().getUserList(runId, fullId);
        if (users == null) {
            users = UserManager.getUserList(runId, fullId);
            enrichListWithAccountInfo(users);
            UsersCache.getInstance().putUserList(users, runId, fullId);
        }
        return users;
    }

    public UserList getUsers(String myAccount) {
        UserList returnList = new UserList();
        returnList.setUsers(UserManager.getUserList(myAccount));
        return returnList;
    }

    public UserList getUsers(Long runId) {
        List<User> users = getUserList(runId);
        UserList returnList = new UserList();
        returnList.setRunId(runId);
        returnList.setUsers(users);
        return returnList;
    }

    public UserList getUsers(Long runId, String teamId) {
        List<User> users = getUserListByTeamId(runId, teamId);
        UserList returnList = new UserList();
        returnList.setRunId(runId);
        returnList.setUsers(users);
        return returnList;
    }

    public User getUserByEmail(Long runId, String fullId) {
        List<User> users = getUserList(runId, fullId);
        if (users.isEmpty())
            return null;
        return users.get(0);
    }

    public HashMap<String, User> getUserMap(Long runId) {
        HashMap<String, User> map = new HashMap<String, User>();
        for (User u : getUserList(runId)) {
            map.put(u.getFullId(), u);
        }
        return map;
    }

    public User deleteUser(Long runId, String fullId) {
        User user = getUserByEmail(runId, fullId);

        UserManager.setStatusDeleted(runId, fullId);
        UsersCache.getInstance().removeUser(runId); // removing because user


        (new DeleteActions(  runId, fullId)).scheduleTask();
        (new DeleteResponses(runId, fullId)).scheduleTask();
        (new UpdateGeneralItemsVisibility( runId, fullId, 2)).scheduleTask();
        DeleteRunCloudStorage.setup(runId, fullId);

        return user;
    }

    public void deleteUser(long runId) {
        List<User> userList = getUserList(runId);
        for (User u : userList) {
            deleteUser(runId, u.getEmail());
        }
    }

    public void deleteUserByTeamId(Long runId, String teamId) {
        List<User> userList = getUserListByTeamId(runId, teamId);
        for (User u : userList) {
            UserManager.setStatusDeleted(runId, u.getEmail());
        }
        if (runId != null)
            UsersCache.getInstance().removeUser(runId);
    }

    public UserList getRunUsersSince(String cursor, long from, String fullId) {
        UserList usersList = UserManager.getUserList(fullId, from, cursor);
        usersList.setServerTime(System.currentTimeMillis());
        usersList.setFrom(from);
        return usersList;
    }
}
