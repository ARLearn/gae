package org.celstec.arlearn2.endpoints;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.config.Nullable;
import com.google.api.server.spi.response.UnauthorizedException;
import org.celstec.arlearn2.beans.game.GamesList;
import org.celstec.arlearn2.beans.run.UserList;
import org.celstec.arlearn2.delegators.GameDelegator;
import org.celstec.arlearn2.delegators.UsersDelegator;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;


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
@Api(name = "runUser")
public class RunUser extends GenericApi{

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "runUsers",
            path = "/run/users"
    )
    public UserList getUserEmail(EnhancedUser user) {
        return new UsersDelegator().getUsers(user.createFullId());
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "usersForRunId",
            path = "/run/{runId}/users"
    )
    public UserList userForRunId(EnhancedUser user, @Named("runId") Long runId) {
        return new UsersDelegator().getUsers(runId);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "runUsersSince",
            path = "/run/user/list/{since}"
    )
    public UserList getRunUsersSince(
            final EnhancedUser user,
            @Named("since") long from,
            @Nullable @Named("resumptionToken") String cursorString) {
        return (new UsersDelegator()).getRunUsersSince(cursorString, from, user.createFullId());
    }


    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "gameUsersSince",
            path = "/run/game/{gameId}/users/{since}"
    )
    public UserList getRunGameUsersSince(
            final EnhancedUser user,
            @Named("gameId") Long gameId,
            @Named("since") long from,
            @Nullable @Named("resumptionToken") String cursorString) {
        return (new UsersDelegator()).getGameUsersSince(cursorString, gameId, from);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "deleteUserForRunId",
            path = "/run/{runId}/user/{fullId}"
    )
    public void deleteUser(EnhancedUser user,
                            @Named("runId") Long runId,
                            @Named("fullId") String fullId) {
        new UsersDelegator().deleteUser(runId, fullId);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "deleteMeFromRunRunId",
            path = "/runs/player/me/{runId}"
    )
    public void deleteMe(EnhancedUser user,
                           @Named("runId") Long runId) {
        new UsersDelegator().deleteUser(runId, user.createFullId());
    }
}
