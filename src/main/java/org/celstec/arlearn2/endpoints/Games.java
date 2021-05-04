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

import com.google.api.server.spi.auth.EnhancedEspAuthenticator;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.config.Nullable;
import com.google.api.server.spi.response.CollectionResponse;
import com.google.api.server.spi.response.ForbiddenException;
import com.google.api.server.spi.response.UnauthorizedException;
import com.google.api.server.spi.auth.common.User;

import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import org.celstec.arlearn2.beans.DependencyWrapper;
import org.celstec.arlearn2.beans.GameIdentifierList;
import org.celstec.arlearn2.beans.dependencies.Dependency;
import org.celstec.arlearn2.beans.deserializer.json.JsonBeanDeserializer;
import org.celstec.arlearn2.beans.game.*;
import org.celstec.arlearn2.beans.generalItem.GeneralItem;
import org.celstec.arlearn2.beans.notification.GameModification;
import org.celstec.arlearn2.delegators.GameAccessDelegator;
import org.celstec.arlearn2.delegators.GameDelegator;
import org.celstec.arlearn2.delegators.GeneralItemDelegator;
import org.celstec.arlearn2.delegators.UsersDelegator;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.endpoints.util.LocalhostAuthenticator;
import org.celstec.arlearn2.jdo.manager.UserManager;
import org.celstec.arlearn2.tasks.clone.CloneMediaLibrary;
import org.celstec.arlearn2.tasks.clone.InitiateClone;
import org.codehaus.jettison.json.JSONException;

import java.util.ArrayList;


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
            name = "gamesInWichIParticipate",
            path = "/games/participateWithCursor/{cursor}"
    )
    public GameIdentifierList getGamesParticipate(EnhancedUser user, @Named("cursor") String cursorString) {
        return UserManager.getUserList(user.createFullId(), cursorString.equals("-") ? null : cursorString);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "accountDetailsParticipate",
            path = "/games/participateIds"
    )
    public CollectionResponse<Long> participateIds(EnhancedUser user) {
        return CollectionResponse.<Long>builder().setItems(UserManager.getGameIdList(user.createFullId())).build();
    }

//curl -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImY1YzlhZWJlMjM0ZGE2MDE2YmQ3Yjk0OTE2OGI4Y2Q1YjRlYzllZWIiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU3RlZmFhbiBUZXJuaWVyIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21BZWY4Y2tsYTRvaWRnVkVzdFpSTkpPWUhqblFRN3ZLbk9RX2pKZUdrMCIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9zZXJpb3VzLWdhbWluZy1wbGF0Zm9ybSIsImF1ZCI6InNlcmlvdXMtZ2FtaW5nLXBsYXRmb3JtIiwiYXV0aF90aW1lIjoxNTg5ODk1MDA2LCJ1c2VyX2lkIjoiVUh2N3pCWmxESlFFQldsbXFTZ1ZoTzUwVzVEMiIsInN1YiI6IlVIdjd6QlpsREpRRUJXbG1xU2dWaE81MFc1RDIiLCJpYXQiOjE1ODk5MDAwOTMsImV4cCI6MTU4OTkwMzY5MywiZW1haWwiOiJzdGVmYWFuLnRlcm5pZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTY3NDM0NDkzNDk5MjA4NTAxNTAiXSwiZW1haWwiOlsic3RlZmFhbi50ZXJuaWVyQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.UsPbAipi74rgUN6TgCcNfWhuK1ONQroSPvjaiOeUffWXTzMxVwS_CMpHhvBc-yvdGA4QI-ldn6SXExDMC6MYNxzlmhAHTsROyY9nEEqlccgR9ogj9a90vhjtU78C8ZmSTnHERAbEKkmPGYpv61jExRzAziYac_GKxoE99RXI9vZ5N3d0o77bCBWB6JnvVbBaVMFwgz1vW_S_JWqHV5N37O3Plb8cXjPvf0lI0W4j__2Mt6fFzs1XhKBd4l8SlN6Xz_Wuler-y18nIoge13Uf9UhSZthvqjUFS2kZXruhpON5ItmJYt9-DzSnnBcQLEwSrzm0outOEWU5xF5smeAPrA"   http://localhost:8080/api/game/clone/5629499534

    @ApiMethod(
            name = "getGame",
            path = "/game/{gameId}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public Game getGame(final EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
//        GameDelegator qg = new GameDelegator();
//        Game g = qg.getGame(gameId);
//        if (g.getError() != null) {
//            return g;
//        }

        GameDelegator qg = new GameDelegator();
        Game g = qg.getGame(gameId);
        if (g.getError() != null) {
            return g;
        }
//        Queue queue = QueueFactory.getDefaultQueue();
//        queue.add(
//                TaskOptions.Builder
//                        .withPayload(new InitiateClone(g.getGameId(), user)
////                        ));

        if (g.getSharing() == null || g.getSharing() == Game.PRIVATE) {

            GameAccessDelegator gad = new GameAccessDelegator();
            if (!gad.canView(gameId, user.createFullId())) {
                UsersDelegator ud = new UsersDelegator();
                if (!ud.userExists(gameId, user.createFullId())) {
                    throw new UnauthorizedException("Not authorized to view this game");
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

//        queue.add(
//                TaskOptions.Builder
//                        .withPayload(new CloneMediaLibrary()
//                        ));


//        if (g.getSharing() == null || g.getSharing() == Game.PRIVATE) {
//
//            GameAccessDelegator gad = new GameAccessDelegator();
//            if (!gad.canView(gameId, user.createFullId())) {
//                UsersDelegator ud = new UsersDelegator();
//                if (!ud.userExists(gameId, user.createFullId())) {
//                    throw new UnauthorizedException("Not authorized to view this game");
//                }
//            }
//        }
        return g;
    }
//    @ApiMethod(
//            name = "getListOfContributors",
//            path = "/game/{gameId}/accesslist",
//            httpMethod = ApiMethod.HttpMethod.GET
//    )
//    public GameAccessList accessList(final EnhancedUser user, @Named("gameId") Long gameId) {//Game newGame
//        GameAccessDelegator gad = new GameAccessDelegator(user);
//        return gad.getAccessList(gameId);
//    }

    @ApiMethod(
            name = "getGameAccess",
            path = "/game/access/{gameId}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public GameAccessList getGameAccess(final EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
        GameAccessDelegator gad = new GameAccessDelegator(user);
        return gad.getAccessList(gameId);
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
    ) {
        GameAccessDelegator gad = new GameAccessDelegator(user);
        return gad.provideAccessWithCheck(gameId, fullId, rights);
    }




    @ApiMethod(
            name = "revokeGameAccess",
            path = "/game/access/revoke/{gameId}/{fullId}",
            httpMethod = ApiMethod.HttpMethod.DELETE
    )
    public void revokeGameAccess(final EnhancedUser user,
                                 @Named("gameId") Long gameId,
                                 @Named("fullId") String fullId
    ) {
        GameAccessDelegator gad = new GameAccessDelegator(user);
        gad.removeAccessWithCheck(gameId, fullId);
    }


    @ApiMethod(
            name = "deleteGame",
            path = "/game/{gameId}",
            httpMethod = ApiMethod.HttpMethod.DELETE
    )
    public Game deleteGame(final EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
        GameDelegator qg = new GameDelegator(user);
        Game g = qg.getGame(gameId);
        if (g.getError() != null) {
            return g;
        }
        GameAccessDelegator gad = new GameAccessDelegator();
        if (!gad.isOwner(user.createFullId(), gameId)) {
            throw new UnauthorizedException("Not authorized to delete this game");

        }
        qg.deleteGame(gameId);
        g.setDeleted(true);
        return g;
    }

    @ApiMethod(
            name = "getGameContent",
            path = "/game/{gameId}/content",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public GameFileList getGameContent(final EnhancedUser user, @Named("gameId") Long gameId) throws UnauthorizedException {//Game newGame
        return new GameDelegator().getGameContentDescription(gameId);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "create_game",
            path = "/game/create"
    )
    public Game createGame(final User u, Game newGame) {//Game newGame
        EnhancedUser user = (EnhancedUser) u;
        GameDelegator cg = new GameDelegator(user);
        return cg.createGame(newGame, GameModification.CREATED);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "update_game",
            path = "/game/{gameId}/update"
    )
    public Game updateGame(final User u, @Named("gameId") Long gameId, Game updateGame) {//Game newGame
        EnhancedUser user = (EnhancedUser) u;
        return (new GameDelegator(user)).updateGame(user, gameId, updateGame, GameModification.CREATED);
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


//    @SuppressWarnings("ResourceParameter")
//    @ApiMethod(
//            httpMethod = ApiMethod.HttpMethod.POST,
//            name = "endstate_update",
//            path = "/game/endstate/{gameId}"
//    )
//    public DependencyWrapper wrapperPost(final User user, DependencyWrapper dependency,  @Named("gameId") Long gameId){
//        return dependency;
//    }
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
        GameDelegator gameDelegator = new GameDelegator(user);
        return gameDelegator.getGames(cursor, 0, user.getProvider(), user.getLocalId());
    }

}
