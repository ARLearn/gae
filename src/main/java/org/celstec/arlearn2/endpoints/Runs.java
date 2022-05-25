package org.celstec.arlearn2.endpoints;

import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.config.Nullable;
import com.google.api.server.spi.response.CollectionResponse;
import com.google.api.server.spi.response.ForbiddenException;
import com.google.api.server.spi.response.UnauthorizedException;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.game.GameAccess;
import org.celstec.arlearn2.beans.game.GameAccessList;
import org.celstec.arlearn2.beans.run.Run;
import org.celstec.arlearn2.beans.run.RunAccess;
import org.celstec.arlearn2.beans.run.RunAccessList;
import org.celstec.arlearn2.beans.run.RunList;
import org.celstec.arlearn2.delegators.*;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.AccountManager;

import java.util.List;

/**
 * ****************************************************************************
 * Copyright (C) 2019 Open Universiteit Nederland
 * <p/>
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * <p/>
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * <p/>
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library.  If not, see <http://www.gnu.org/licenses/>.
 * <p/>
 * Contributors: Stefaan Ternier
 * ****************************************************************************
 */
@Api(name = "runs")
public class Runs extends GenericApi {

    //checked methods

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "createRun",
            path = "/run/create"
    )
    public Run createRun(final User user, Run run){
        EnhancedUser us = (EnhancedUser) user;
        return new RunDelegator().createRun(us, run);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "addUserToRun",
            path = "/run/{runId}/addUser/{fullId}"
    )
    public org.celstec.arlearn2.beans.run.User addUserToRun(EnhancedUser user,
                                                            @Named("runId") Long runId,
                                                            @Named("fullId") String fullId) {
        org.celstec.arlearn2.beans.run.User userbean = new org.celstec.arlearn2.beans.run.User();
        userbean.setFullIdentifier(fullId);
        userbean.setRunId(runId);
        return new UsersDelegator().createUser(userbean);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "createRunWithSelf",
            path = "/run/create/withSelf"
    )
    public Run createRunWithSelf(final User user, Run run){
        EnhancedUser us = (EnhancedUser) user;
        if (AccountManager.getAccount(us.createFullId()) == null) {
            AccountManager.overwriteAccount(us.getId(), us.getLocalId(), us.getProvider(), us.getEmail(), user.getEmail(), null, false, 0l, "onlineplay");
        };
        run.setLastModificationDate(System.currentTimeMillis());
        run.setServerCreationTime(run.getLastModificationDate());
        run = new RunDelegator().createRun(us, run);
        org.celstec.arlearn2.beans.run.User userbean = new org.celstec.arlearn2.beans.run.User();
        userbean.setFullIdentifier(((EnhancedUser) user).createFullId());
        userbean.setRunId(run.getRunId());
        new UsersDelegator().createUser(userbean);
        return run;
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "addMe",
            path = "/run/{runId}/addMe"
    )
    public Run addMe(EnhancedUser user, @Named("runId") Long runId) throws ForbiddenException {
        return new RunDelegator().selfRegister(runId, user);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "accountDetails",
            path = "/runs/participate/{gameId}"
    )
    public RunList getUserEmail(EnhancedUser user, @Named("gameId") Long gameId) {
        return new RunDelegator().getParticipateRuns(gameId, user.createFullId());
    }


    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "participateRunsIgnoreDelted",
            path = "/runs/participate/ignoreDeleted/{gameId}"
    )
    public RunList getUserEmailIgnoreDeleted(EnhancedUser user, @Named("gameId") Long gameId) {
        return new RunDelegator().getParticipateRunsIgnoreDeleted(gameId, user.createFullId());
    }

    //unchecked

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "gameForRun",
            path = "/run/game/{gameId}"
    )
    public Game getGame(EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
        if (new RunDelegator().hasParticipateRuns(gameId, user.createFullId())) {
            GameDelegator qg = new GameDelegator();
            return qg.getGame(gameId);
        }
        throw new UnauthorizedException("You are not registered as a player of this game");

    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "getRun",
            path = "/run/{runId}"
    )
    public Run getRun(EnhancedUser user, @Named("runId") Long runId) {

        return new RunDelegator().getRun(runId, true);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "getRunUnAuth",
            path = "/run/{runId}/unauth"
    )
    public Run getRunUnAuth(@Named("runId") Long runId) throws UnauthorizedException {//Game newGame
        Run r = new RunDelegator().getRun(runId, true);
        if (r.getRunConfig() != null && r.getRunConfig().getSelfRegistration()) {
            return r;
        }
        throw new UnauthorizedException("You are not authorized to view this run");
    }


    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "getListOfRunContributors",
            path = "/run/access/{runId}/list"
    )
    public RunAccessList getRunAccessList(EnhancedUser user, @Named("runId") Long runId) {
        RunAccessDelegator rad = new RunAccessDelegator();

        return rad.getRunAccess(runId);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "getListOfRunContributorsGame",
            path = "/run/access/game/{gameId}/list"
    )
    public RunAccessList getRunAccessListGame(EnhancedUser user, @Named("gameId") Long gameId) {
        RunAccessDelegator rad = new RunAccessDelegator();

        return rad.getRunsAccess(gameId, user.getProvider(), user.getLocalId());
    }


    @ApiMethod(
            name = "giveRunAccess",
            path = "/run/access/{runId}/{fullId}/{rights}",
            httpMethod = ApiMethod.HttpMethod.POST
    )
    public RunAccess giveRunAccess(final EnhancedUser user,
                                    @Named("runId") Long runId,
                                    @Named("fullId") String fullId,
                                    @Named("rights") int rights
    ) throws ForbiddenException {
        RunAccessDelegator rad = new RunAccessDelegator();
        Run run = getRun(user, runId);
        if (run != null) {
            return rad.provideAccessWithCheck(runId, run.getGameId(), fullId, rights);
        }
        return null;
    }

    @ApiMethod(
            name = "revokeRunAccess",
            path = "/run/access/revoke/{runId}/{fullId}",
            httpMethod = ApiMethod.HttpMethod.DELETE
    )
    public void revokeRunAccess(final EnhancedUser user,
                                 @Named("runId") Long runId,
                                 @Named("fullId") String fullId
    ) {
        RunAccessDelegator gad = new RunAccessDelegator();
        gad.removeAccessWithCheck(runId, fullId);
    }



    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "getRuns",
            path = "/runs/{gameId}/list"
    )
    public CollectionResponse<Run> getRuns(EnhancedUser user, @Named("gameId") Long gameId) {
        List<Run> runs = new RunDelegator().getRunsForGame(gameId);
        return  CollectionResponse.<Run>builder().setItems(runs).build();
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "getMyRuns",
            path = "/runs/{gameId}/myList"
    )
    public RunList getMyRuns(final EnhancedUser user,
                                             @Named("gameId") Long gameId, @Nullable @Named("resumptionToken") String cursor
    ) {
        return new RunDelegator().getRuns(cursor, gameId, user.getProvider(), user.getLocalId());
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "deleteRun",
            path = "/run/delete/{runId}"
    )
    public Run deleteRun(final User user, @Named("runId") Long runId) {
        EnhancedUser us = (EnhancedUser) user;
        return new RunDelegator().deleteRun(runId, us);
    }

    @ApiMethod(
            name = "getRunAccessForUser",
            path = "/run/access/user/{since}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public RunAccessList getRunAccessUser(final EnhancedUser user,
                                            @Named("since") long from,
                                            @Nullable @Named("resumptionToken") String cursor
    ) throws UnauthorizedException {//Game newGame
        return new RunAccessDelegator().getRunAccess(user.createFullId(), cursor, from);
    }
}
