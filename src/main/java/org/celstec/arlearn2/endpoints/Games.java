package org.celstec.arlearn2.endpoints;

/**
 * ****************************************************************************
 * Copyright (C) 2013 Open Universiteit Nederland
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

import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.config.Nullable;
import com.google.api.server.spi.response.CollectionResponse;
import com.google.api.server.spi.response.ForbiddenException;
import com.google.api.server.spi.response.UnauthorizedException;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.celstec.arlearn2.beans.DependencyWrapper;
import org.celstec.arlearn2.beans.GameIdentifierList;
import org.celstec.arlearn2.beans.dependencies.Dependency;
import org.celstec.arlearn2.beans.deserializer.json.JsonBeanDeserializer;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.game.GameAccess;
import org.celstec.arlearn2.beans.game.GameAccessList;
import org.celstec.arlearn2.beans.game.GamesList;
import org.celstec.arlearn2.delegators.GameAccessDelegator;
import org.celstec.arlearn2.delegators.GameDelegator;
import org.celstec.arlearn2.delegators.UsersDelegator;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.UserManager;
import org.celstec.arlearn2.tasks.clone.InitiateClone;
import org.codehaus.jettison.json.JSONException;


@Api(name = "games")
public class Games extends GenericApi {

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "accountDetails",
            path = "/games/participate"
    )
    public GamesList getUserEmail(EnhancedUser user) {
        return new GameDelegator().getParticipateGames(user.createFullId());
    }




    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "accountDetailsParticipate",
            path = "/games/participateIds"
    )
    public CollectionResponse<Long> participateIds(EnhancedUser user) {
        return CollectionResponse.<Long>builder().setItems(UserManager.getGameIdList(user.createFullId())).build();
    }

    @ApiMethod(
            name = "getGame",
            path = "/game/{gameId}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public Game getGame(final EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
        GameDelegator qg = new GameDelegator();
        Game g = qg.getGame(gameId);
        if (g.getError() != null) {
            return g;
        }

        if (g.getSharing() == null || g.getSharing() == Game.PRIVATE) {

            GameAccessDelegator gad = new GameAccessDelegator();
            if (!gad.canView(gameId, user.createFullId())) {
                UsersDelegator ud = new UsersDelegator();
                if (!ud.userExists(gameId, user.createFullId())) {
//                    throw new UnauthorizedException("Not authorized to view this game");

                    g = new Game();
                    g.setGameId(gameId);
                    g.setDeleted(true);
                    return g;
                }
            }
        }
        return g;
    }

    @ApiMethod(
            name = "cloneGame",
            path = "/game/clone/{gameId}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public Game cloneGame(final EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
        System.out.println("user is " + user);
        GameDelegator qg = new GameDelegator();
        Game g = qg.getGame(gameId);
        if (g.getError() != null) {
            return g;
        }
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(new InitiateClone(g.getGameId(), user)
                        ));
        return g;
    }

    @ApiMethod(
            name = "getGameAccess",
            path = "/game/access/{gameId}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public GameAccessList getGameAccess(final EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
        GameAccessDelegator gad = new GameAccessDelegator();
        return gad.getAccessList(gameId, user.createFullId());
    }

    @ApiMethod(
            name = "getGameAccessForUser",
            path = "/game/access/user/{since}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public GameAccessList getGameAccessUser(final EnhancedUser user,
                                            @Named("since") long from,
                                            @Nullable @Named("resumptionToken") String cursor
    ) throws UnauthorizedException {//Game newGame
        GameAccessDelegator gad = new GameAccessDelegator();
        return gad.getGamesAccess(user.createFullId(), cursor, from);
    }


    @ApiMethod(
            name = "giveGameAccess",
            path = "/game/access/{gameId}/{fullId}/{rights}",
            httpMethod = ApiMethod.HttpMethod.POST
    )
    public GameAccess giveGameAccess(final EnhancedUser user,
                                     @Named("gameId") Long gameId,
                                     @Named("fullId") String fullId,
                                     @Named("rights") int rights
    ) throws ForbiddenException {
        GameAccessDelegator gad = new GameAccessDelegator();
        return gad.provideAccessWithCheck(gameId, fullId, rights, user.createFullId()); //
    }




    @ApiMethod(
            name = "revokeGameAccess",
            path = "/game/access/revoke/{gameId}/{fullId}",
            httpMethod = ApiMethod.HttpMethod.DELETE
    )
    public GameAccess revokeGameAccess(final EnhancedUser user,
                                 @Named("gameId") Long gameId,
                                 @Named("fullId") String fullId
    ) {
        GameAccessDelegator gad = new GameAccessDelegator();
        return gad.removeAccessWithCheck(gameId, fullId);
    }


    @ApiMethod(
            name = "deleteGame",
            path = "/game/{gameId}",
            httpMethod = ApiMethod.HttpMethod.DELETE
    )
    public Game deleteGame(final EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
        GameDelegator qg = new GameDelegator();
        Game g = qg.getGame(gameId);
        if (g.getError() != null) {
            return g;
        }
        GameAccessDelegator gad = new GameAccessDelegator();
        if (!gad.isOwner(user.createFullId(), gameId)) {
            g = new Game();
            g.setGameId(gameId);
            g.setDeleted(true);
            return g;
//            throw new UnauthorizedException("Not authorized to delete this game");

        }
        qg.deleteGame(gameId, user);
        g.setDeleted(true);
        return g;
    }

//    @ApiMethod(
//            name = "getGameContent",
//            path = "/game/{gameId}/content",
//            httpMethod = ApiMethod.HttpMethod.GET
//    )
//    public GameFileList getGameContent(final EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
//        return new GameDelegator().getGameContentDescription(gameId);
//    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "create_game",
            path = "/game/create"
    )
    public Game createGame(final User u, Game newGame) {//Game newGame
        EnhancedUser user = (EnhancedUser) u;
        GameDelegator cg = new GameDelegator();
        return cg.createGame(newGame, user.createFullId());
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "update_game",
            path = "/game/{gameId}/update"
    )
    public Game updateGame(final User u, @Named("gameId") Long gameId, Game updateGame) {
        return (new GameDelegator()).updateGame((EnhancedUser) u, gameId, updateGame);
    }


    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "create_game_wrapper",
            path = "/game/create_wrapper"
    )
    public Game createGameWrapper(final User user, DependencyWrapper newGame) {//Game newGame
        JsonBeanDeserializer jbd;
        try {
            jbd = new JsonBeanDeserializer(newGame.getDependencyAsString());
            Game game = (Game) jbd.deserialize(Game.class);

            return createGame(user, game);
        } catch (JSONException e) {
            System.out.println("json exception" + e);
            System.out.println(e);
            e.printStackTrace();

            System.out.println(e.getLocalizedMessage());
        } catch (Exception e) {
            System.out.println(" exception" + e);
            System.out.println(e);
            e.printStackTrace();

            System.out.println(e.getLocalizedMessage());
        }

        return null;
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "update_end_state",
            path = "/game/endstate/{gameId}",
            httpMethod = ApiMethod.HttpMethod.POST
    )
    public Game updateEndState(final User user,
                               DependencyWrapper dependency,
                               @Named("gameId") Long gameId

    ) {
        JsonBeanDeserializer jbd;
        try {
            jbd = new JsonBeanDeserializer(dependency.getDependencyAsString());
            Dependency dep = (Dependency) jbd.deserialize(Dependency.class);

            Game g = getGame((EnhancedUser) user, gameId);
            g.setEndsOn(dep);
            return createGame(user, g);
        } catch (JSONException e) {
            System.out.println("json exception" + e);
            System.out.println(e);
            e.printStackTrace();

            System.out.println(e.getLocalizedMessage());
        } catch (Exception e) {
            System.out.println(" exception" + e);
            System.out.println(e);
            e.printStackTrace();

            System.out.println(e.getLocalizedMessage());
        }
        return null;
    }


    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "update_show_grid",
            path = "/game/{gameId}/grid/show/{show}",
            httpMethod = ApiMethod.HttpMethod.POST
    )
    public Game updateShowGrid(final User user,
                               DependencyWrapper dependency,
                               @Named("gameId") Long gameId,
                               @Named("show") Boolean show
                               ) {
        EnhancedUser enhancedUser = (EnhancedUser) user;
        GameDelegator gd = new GameDelegator();
        return  gd.updateShowGrid(enhancedUser, gameId, show);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "update_grid_size",
            path = "/game/{gameId}/grid/size/{size}",
            httpMethod = ApiMethod.HttpMethod.POST
    )
    public Game updateGridSize(final User user,
                               DependencyWrapper dependency,
                               @Named("gameId") Long gameId,
                               @Named("size") Integer size
    ) {
        EnhancedUser enhancedUser = (EnhancedUser) user;
        GameDelegator gd = new GameDelegator();
        return  gd.updateGridSize(enhancedUser, gameId, size);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "create_game_demo",
            path = "/game/create/demo"
    )
    public Game createGameDemo(Game newGame) {//Game newGame
        System.out.println("in create demo " + newGame);
        return newGame;
    }

//    {
//        "error": {
//        "errors": [
//        {
//            "domain": "global",
//                "reason": "badRequest",
//                "message": "com.fasterxml.jackson.databind.exc.InvalidDefinitionException: Cannot construct instance of `org.celstec.arlearn2.beans.dependencies.Dependency` (no Creators, like default construct, exist): abstract types either need to be mapped to concrete types, have custom deserializer, or contain additional type information\n at [Source: UNKNOWN; line: -1, column: -1] (through reference chain: org.celstec.arlearn2.beans.game.Game[\"endsOn\"])"
//        }
//    ],
//        "code": 400,
//                "message": "com.fasterxml.jackson.databind.exc.InvalidDefinitionException: Cannot construct instance of `org.celstec.arlearn2.beans.dependencies.Dependency` (no Creators, like default construct, exist): abstract types either need to be mapped to concrete types, have custom deserializer, or contain additional type information\n at [Source: UNKNOWN; line: -1, column: -1] (through reference chain: org.celstec.arlearn2.beans.game.Game[\"endsOn\"])"
//    }
//    }

//    {
//        "type": "org.celstec.arlearn2.beans.game.Game",
//            "gameId": "5634472569470976",
//            "deleted": false,
//            "lastModificationDate": "1607516337677",
//            "title": "Demo game with responses",
//            "splashScreen": "/game/5634472569470976/background3.jpg",
//            "description": "De woorden van het Lorem ipsum vinden hun oorsprong in De finibus bonorum et malorum (Over de grenzen van goed en kwaad) van Marcus Tullius Cicero uit 45 voor Christus. In alinea 1.10.32[1] van dit boek staat de volgende zinsnede:\n\n[32] ..., neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem.",
//            "config": {
//        "type": "org.celstec.arlearn2.beans.game.Config",
//                "mapAvailable": true,
//                "enableMyLocation": false,
//                "enableExchangeResponses": true,
//                "minZoomLevel": 1,
//                "maxZoomLevel": 20,
//                "primaryColor": "#0000ff",
//                "secondaryColor": "#fa1a00"
//    },
//        "endsOn": {
//        "type": "org.celstec.arlearn2.beans.dependencies.ActionDependency",
//                "action": "answer_WugpH",
//                "generalItemId": "5196933010292736"
//    },
//        "sharing": 3,
//            "licenseCode": "cc-by-sa",
//            "language": "en",
//            "lng": 5.724120892578197,
//            "lat": 51.025448962714314,
//            "theme": "5730634941071360",
//            "privateMode": true,
//            "iconAbbreviation": "DR"
//    }


    @ApiMethod(
            name = "myGames",
            path = "/game/list",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public GamesList myGames(final EnhancedUser user, @Nullable @Named("resumptionToken") String cursor) {//Game newGame
        GameDelegator gameDelegator = new GameDelegator();
        return gameDelegator.getGames(cursor, 1l, user.getProvider(), user.getLocalId());
    }

    @ApiMethod(
            name = "myGamesSince",
            path = "/game/list/{since}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public GamesList myGamesSince(final EnhancedUser user,
                                  @Named("since") long from,
                                  @Nullable @Named("resumptionToken") String cursor) {//Game newGame
        GameDelegator gameDelegator = new GameDelegator();
        return gameDelegator.getGames(cursor, from, user.getProvider(), user.getLocalId());
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "gamesInWichIParticipate",
            path = "/games/participateWithCursor/{cursor}"
    )
    public GameIdentifierList getGamesParticipate(EnhancedUser user, @Named("cursor") String cursorString) {
        return UserManager.getUserList(user.createFullId(), cursorString.equals("-") ? null : cursorString);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "participateGamesSince",
            path = "/game/participate/list/{since}"
    )
    public GamesList getGamesParticipateSince(
            final EnhancedUser user,
            @Named("since") long from,
            @Nullable @Named("resumptionToken") String cursorString) {
        return (new GameDelegator()).getGamesParticipate(cursorString, from, user.createFullId());
    }


}
