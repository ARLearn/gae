package org.celstec.arlearn2.endpoints;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import org.celstec.arlearn2.beans.database.FeaturedGameTestJDO;
import org.celstec.arlearn2.beans.game.GamesList;
import org.celstec.arlearn2.delegators.FeaturedGameDelegator;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.FeaturedGameManager;

//import static com.googlecode.objectify.ObjectifyService.ofy;

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
@Api(name = "featuredGames")
public class FeaturedApi {

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "get_featured_games",
            path = "/games/featured/{lang}"
    )
    public GamesList getFeatured(EnhancedUser user, @Named("lang") String lang) {
        return FeaturedGameManager.getFeaturedGames(lang);
    }

    @ApiMethod(
            name = "featured_games_by_gameId",
            path = "/games/featured/gameId/{gameId}",
            httpMethod = ApiMethod.HttpMethod.GET)
    public GamesList getFeaturedGames( @Named("gameId") Long gameId) {
        return new FeaturedGameDelegator().getFeaturedGame(gameId);
    }




}
