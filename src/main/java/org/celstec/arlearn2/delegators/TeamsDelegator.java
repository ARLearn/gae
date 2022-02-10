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

import org.celstec.arlearn2.beans.run.Team;
import org.celstec.arlearn2.beans.run.TeamList;
import org.celstec.arlearn2.cache.TeamsCache;
import org.celstec.arlearn2.cache.UsersCache;
import org.celstec.arlearn2.jdo.manager.TeamManager;
import org.celstec.arlearn2.tasks.beans.DeleteUsers;

import java.util.UUID;

public class TeamsDelegator  {

//    private static final Logger logger = Logger.getLogger(TeamsDelegator.class.getName());

    public TeamsDelegator(){
    }



    public Team createTeam(Team team) {
        RunDelegator rd = new RunDelegator();
        if (team.getRunId() == null) {
            team.setError("No run identifier specified");
            return team;
        }
        if (rd.getRun(team.getRunId(), false) == null) {
            team.setError("No run with given id exists");
            return team;
        }
        return createTeam(team.getRunId(), team.getTeamId(), team.getName());
    }

    public Team createTeam(long runId, String teamId, String name) {
        if (teamId == null) teamId = UUID.randomUUID().toString();
        TeamsCache.getInstance().removeTeams(runId);
        return TeamManager.addTeam(runId, teamId, name);
    }


    public TeamList getTeams(Long runId) {
        TeamList tl = TeamsCache.getInstance().getTeamList(runId);
        if (tl != null)
            return tl;
        tl = TeamManager.getTeams(runId);
        TeamsCache.getInstance().putTeamList(runId, tl);
        return tl;
    }


    public void deleteTeam(Long runId) {
        TeamList tl = getTeams(runId);
        for (Team t : tl.getTeams()) {
            deleteTeam(t.getTeamId());
        }
    }

    public Team deleteTeam(String teamId) {
        TeamsCache.getInstance().removeTeam(teamId);
        Team t = TeamManager.getTeam(teamId);
        TeamManager.deleteTeam(teamId);
        TeamsCache.getInstance().removeTeams(t.getRunId());
        UsersCache.getInstance().removeUser(t.getRunId());
        (new DeleteUsers(t.getRunId(), null, teamId)).scheduleTask();

        return t;
    }
}
