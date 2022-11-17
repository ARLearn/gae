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

import com.google.api.server.spi.response.NotFoundException;
import com.google.appengine.api.search.Index;
import com.google.appengine.api.search.IndexSpec;
import com.google.appengine.api.search.SearchServiceFactory;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.game.GameAccess;
import org.celstec.arlearn2.beans.game.GameAccessList;
import org.celstec.arlearn2.beans.game.GamesList;
import org.celstec.arlearn2.beans.run.User;
import org.celstec.arlearn2.beans.run.UserList;
import org.celstec.arlearn2.cache.MyGamesCache;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.classes.GameAccessEntity;
import org.celstec.arlearn2.jdo.manager.GameAccessManager;
import org.celstec.arlearn2.jdo.manager.GameManager;
import org.celstec.arlearn2.jdo.manager.UserManager;
import org.celstec.arlearn2.tasks.beans.DeleteGeneralItems;
import org.celstec.arlearn2.tasks.beans.DeleteRuns;
import org.celstec.arlearn2.tasks.beans.GameSearchIndex;
import org.celstec.arlearn2.tasks.game.DeleteGameCloudStorage;

import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

public class GameDelegator {

    public GameDelegator() {
        super();
    }

    public GamesList getGames(String resumptionToken, Long from, int provider, String localId) {
        GamesList gl = new GamesList();
        GameAccessList gameAccessList = GameAccessManager.getGameList(provider, localId, resumptionToken, from);
        gl.setServerTime(gameAccessList.getServerTime());
        gl.setFrom(from);
        gl.setResumptionToken(gameAccessList.getResumptionToken());
        for (GameAccess ga : gameAccessList.getGameAccess()) {
            Game g = null;
            try {
                g = getGame(ga.getGameId());
                gl.addGame(g);
            } catch (NotFoundException e) {
                e.printStackTrace();
            }

        }
        return gl;
    }

    public GamesList getGamesParticipate(String cursor, Long from, String fullId) {
        GamesList gl = new GamesList();
        UserList usersList = UserManager.getUserList(fullId, from, cursor);
        gl.setServerTime(System.currentTimeMillis());
        gl.setFrom(from);
        gl.setResumptionToken(usersList.getResumptionToken());
        for (User ga : usersList.getUsers()) {
            Game g = null;
            try {
                g = getGame(ga.getGameId());
                gl.addGame(g);
            } catch (NotFoundException e) {
                System.out.println("Game id " + ga.getGameId() + " not found");
            }
        }
        return gl;
    }

    public GamesList getParticipateGames(String fullId) {
        GamesList gl = new GamesList();
        Iterator<User> it = UserManager.getUserList(fullId).iterator();
        HashSet<Long> addGames = new HashSet<Long>();
        while (it.hasNext()) {
            User user = it.next();

            if (!addGames.contains(user.getGameId())) {
                Game g = new Game();
                g.setGameId(user.getGameId());
                g.setConfig(null);
                gl.addGame(g);
                addGames.add(user.getGameId());
            }
        }
        gl.setServerTime(System.currentTimeMillis());
        return gl;
    }

    public Game getGame(Long gameId) throws NotFoundException {
        return getGame(gameId, false);
    }

    public Game getGame(Long gameId, boolean nullIfGameDoesNotExist) throws NotFoundException {
        Game game = MyGamesCache.getInstance().getGame(gameId);
        if (game == null) {
            game = GameManager.getGame(gameId);
            if (game == null) {
                if (nullIfGameDoesNotExist) return null;
                throw new NotFoundException(gameId + " not found");
//                GameAccessManager.deleteGame(gameId);
//                game = new Game();
//                game.setGameId(gameId);
//                game.setError("game does not exist");
//                return game;
            }
            MyGamesCache.getInstance().putGame(game, gameId);
        }
        return game;
    }


    public Game updateGame(EnhancedUser u, Long gameId, Game updateGame) {
        Long lastModificationDate = System.currentTimeMillis();
        Game oldGame = GameManager.getGame(gameId);
        oldGame.setIconAbbreviation(updateGame.getIconAbbreviation());
        oldGame.setDescription(updateGame.getDescription());
        oldGame.setStartButton(updateGame.getStartButton());
        oldGame.setGameOverHeading(updateGame.getGameOverHeading());
        oldGame.setGameOverButton(updateGame.getGameOverButton());
        oldGame.setGameOverDescription(updateGame.getGameOverDescription());
        oldGame.setGameOverHeading(updateGame.getGameOverHeading());

        oldGame.setSplashScreen(updateGame.getSplashScreen());
        oldGame.setLat(updateGame.getLat());
        oldGame.setLng(updateGame.getLng());
        oldGame.setPrivateMode(updateGame.getPrivateMode());
        oldGame.setLicenseCode(updateGame.getLicenseCode());
        oldGame.setSharing(updateGame.getSharing());
        oldGame.setLastModificationDate(lastModificationDate);
        oldGame.setMessageListScreen(updateGame.getMessageListScreen());
        oldGame.setBoardHeight(updateGame.getBoardHeight());
        oldGame.setBoardWidth(updateGame.getBoardWidth());
        oldGame.setMessageListTypes(updateGame.getMessageListTypes());
        oldGame.setConfig(updateGame.getConfig());
        oldGame.setTheme(updateGame.getTheme());
        oldGame.setTitle(updateGame.getTitle());
        oldGame.setWebEnabled(updateGame.getWebEnabled());
        oldGame.setShowGrid(updateGame.getShowGrid());
        oldGame.setGridSize(updateGame.getGridSize());

        GameManager.addGame(oldGame);
        resetCache(gameId, u);

        GameAccessManager.updateLastModificationDateGameAcessEntries(gameId, lastModificationDate);
        checkSharing(oldGame, updateGame);
        return oldGame;
    }


    public Game updateShowGrid(EnhancedUser u, Long gameId, Boolean showGrid) {
        Game oldGame = GameManager.getGame(gameId);

        oldGame.setShowGrid(showGrid);
        if (oldGame.getGridSize() == null) {
            oldGame.setGridSize(20);
        }
        GameManager.addGame(oldGame);
        resetCache(gameId, u);
        return oldGame;
    }

    public Game updateGridSize(EnhancedUser u, Long gameId, Integer size) {
        Game oldGame = GameManager.getGame(gameId);
        oldGame.setGridSize(size);
        GameManager.addGame(oldGame);
        resetCache(gameId, u);
        return oldGame;
    }

    private void resetCache(long gameId, EnhancedUser user) {
        MyGamesCache.getInstance().removeGameList(null, null, user.createFullId(), null, null);
        MyGamesCache.getInstance().removeGameList(gameId, null, user.createFullId(), null, null);
        MyGamesCache.getInstance().removeGameList(gameId, null, null, null, null);
    }


    public Game createGame(Game game, String fullId) {
        if (fullId != null) {
            return createGameWithoutCache(game, fullId);
        }
        game.setGameId(GameManager.addGame(game, null));
        MyGamesCache.getInstance().removeGameList(null, null, fullId, null, null);
        MyGamesCache.getInstance().removeGameList(game.getGameId(), null, fullId, null, null);
        MyGamesCache.getInstance().removeGameList(game.getGameId(), null, null, null, null);

        return game;

    }

    private Game createGameWithoutCache(Game game, String fullId) {

        Game oldGame = null;
        if (game.getGameId() != null) {
            try {
                oldGame = getGame(game.getGameId());
            } catch (NotFoundException e) {
            }
        }
        game.setGameId(GameManager.addGame(game));
        MyGamesCache.getInstance().removeGame(game.getGameId());
        MyGamesCache.getInstance().removeGameList(game.getGameId(), null, null, null, null);

        GameAccessDelegator gad = new GameAccessDelegator();
        gad.provideAccess(game.getGameId(), fullId, GameAccessEntity.OWNER);
        GameAccessManager.resetGameAccessLastModificationDate(game.getGameId());
        if (oldGame != null) {
            checkSharing(oldGame, game);
        }
        return game;
    }

    public Game deleteGame(Game g, EnhancedUser user) {
        String myAccount = user.createFullId();

        Game returnGame = GameManager.deleteGame(g.getGameId());
        GameAccessManager.deleteGame(g.getGameId());

        MyGamesCache.getInstance().removeGameList(null, null, myAccount, null, null);
        MyGamesCache.getInstance().removeGameList(g.getGameId(), null, myAccount, null, null);

        (new DeleteRuns(g.getGameId(), myAccount)).scheduleTask();
        (new DeleteGeneralItems(g.getGameId())).scheduleTask();

        DeleteGameCloudStorage.setup(g.getGameId());

        return returnGame;
    }

//    public GamesList getRecentGames(String resumptionToken) {
//        GamesList resultsList = new GamesList();
////        GameManager.getRecentGames(resumptionToken);
////        resultsList.setResumptionToken(gameAccessList.getResumptionToken());
////        resultsList.setGames();
//        return resultsList;
//
//    }

    public void checkSharing(Game oldGame, Game newGame) {
        Integer newSharingType = newGame.getSharing();
        if (oldGame.getError() != null)
            return;
        if (!oldGame.getSharing().equals(newSharingType)) {
            new GameSearchIndex(newGame.getTitle(), newGame.getCreator(), newSharingType, newGame.getGameId(), newGame.getLat(), newGame.getLng()).scheduleTask();
        }
    }

    public Index getIndex() {
        IndexSpec indexSpec = IndexSpec.newBuilder().setName("game_index").build();
        return SearchServiceFactory.getSearchService().getIndex(indexSpec);
    }


//    public GameFileList getGameContentDescription(Long gameId) {
//        return FilePathManager.getFilePathByGameId(gameId);
//    }


}
