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
package org.celstec.arlearn2.jdo.manager;

import com.google.appengine.api.datastore.*;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.serializer.json.JsonBeanSerialiser;
import org.celstec.arlearn2.jdo.classes.GameEntity;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import static org.celstec.arlearn2.jdo.classes.GameEntity.COL_AMOUNT_OF_PLAYS;

public class GameManager {

    private static DatastoreService datastore;

    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    public static Long addGame(Game game, String myAccount) {
//		PersistenceManager pm = PMF.get().getPersistenceManager();
        GameEntity gameJdo = new GameEntity();
        gameJdo.setGameId(game.getGameId());
        gameJdo.setCreatorEmail(game.getCreator());
//        gameJdo.setOwner(myAccount);
        gameJdo.setFeedUrl(game.getFeedUrl());
        gameJdo.setTitle(game.getTitle());
        gameJdo.setSplashScreen(game.getSplashScreen());
        gameJdo.setSharing(game.getSharing());
        gameJdo.setDescription(game.getDescription());
        gameJdo.setLat(game.getLat());
        gameJdo.setLng(game.getLng());
        gameJdo.setLanguage(game.getLanguage());
        gameJdo.setTheme(game.getTheme());
        if (game.getLicenseCode() != null) gameJdo.setLicenseCode(game.getLicenseCode());
        gameJdo.setLastModificationDate(System.currentTimeMillis());
        if (game.getEndsOn() != null) {
            JsonBeanSerialiser jbs = new JsonBeanSerialiser(game.getEndsOn());
            gameJdo.setEndsOn(jbs.serialiseToJson().toString());
        }
        if (game.getConfig() != null) {
            gameJdo.setConfig(game.getConfig().toString());
        }
//        return datastore.put(gameJdo.toEntity()).getId();
        return addGameEntity(gameJdo.toEntity());
    }

    public static Long addGameEntity(Entity entity) {
        return datastore.put(entity).getId();
    }

    public static void incrementPlayCount(Long gameId) {
        Transaction txn = datastore.beginTransaction();
        try {
            Entity gameAsEntity = getGameAsEntity(gameId);
            Object plays = gameAsEntity.getProperty(COL_AMOUNT_OF_PLAYS);
            Long playsAsLong = 1L;
            if (plays != null) {
                playsAsLong = (Long) plays + 1;
            }
            gameAsEntity.setProperty(COL_AMOUNT_OF_PLAYS, playsAsLong);
            datastore.put(txn, gameAsEntity);
            txn.commit();
        } finally {
            if (txn.isActive()) {
                txn.rollback();
            }
        }
    }

    public static Long addGame(Game game) {
        GameEntity gameJdo = new GameEntity();
        gameJdo.setGameId(game.getGameId());
        gameJdo.setTitle(game.getTitle());
        gameJdo.setSplashScreen(game.getSplashScreen());
        gameJdo.setSharing(game.getSharing());
        gameJdo.setDescription(game.getDescription());
        gameJdo.setLat(game.getLat());
        gameJdo.setLng(game.getLng());
        gameJdo.setLanguage(game.getLanguage());
        gameJdo.setTheme(game.getTheme());
        gameJdo.setMessageListScreen(game.getMessageListScreen());
        gameJdo.setMessageListTypes(game.getMessageListTypes());
        gameJdo.setBoardHeight(game.getBoardHeight());
        gameJdo.setBoardWidth(game.getBoardWidth());
        gameJdo.setIconAbbreviation(game.getIconAbbreviation());
        if (game.getDeleted() != null) gameJdo.setDeleted(game.getDeleted());
        if (game.getLicenseCode() != null) gameJdo.setLicenseCode(game.getLicenseCode());

        gameJdo.setLastModificationDate(System.currentTimeMillis());
        if (game.getConfig() != null) {
            gameJdo.setConfig(game.getConfig().toString());
        }
        if (game.getEndsOn() != null) {
            System.out.println("endson not null");
            JsonBeanSerialiser jbs = new JsonBeanSerialiser(game.getEndsOn());
            gameJdo.setEndsOn(jbs.serialiseToJson().toString());
        }
        gameJdo.setPrivateMode(game.getPrivateMode());
        gameJdo.setWebEnabled(game.getWebEnabled());
        gameJdo.setShowGrid(game.getShowGrid());
        gameJdo.setGridSize(game.getGridSize());
        gameJdo.setAmountOfPlays(game.getAmountOfPlays());
        return datastore.put(gameJdo.toEntity()).getId();

    }


    public static void deleteGame(Long gameId) {
//        Key key = KeyFactory.createKey(GameEntity.KIND, gameId);
//        datastore.delete(key);
        GameEntity gameJdo = new GameEntity();
        gameJdo.setGameId(gameId);
        gameJdo.setDeleted(true);
        gameJdo.setLastModificationDate(System.currentTimeMillis());
        datastore.put(gameJdo.toEntity());
    }

    public static Game getGame(Long gameId) {
        System.out.println("retreive "+gameId);
        Entity result = getGameAsEntity(gameId);
        if (result == null){
            return null;
        }
        return new GameEntity(result).toGame();
    }

    public static Entity getGameAsEntity(Long gameId) {
        Key key = KeyFactory.createKey(GameEntity.KIND, gameId);
        Entity result = null;
        try {
            result = datastore.get(key);
        } catch (EntityNotFoundException e) {
            System.out.println("error ");
            return null;
        }
        return result;
    }

    public static List<Game> getFeaturedGames() {
        ArrayList<Game> featuredGamesList = new ArrayList<Game>();
        Query.CompositeFilter featuredFilter = Query.CompositeFilterOperator.and(
                new Query.FilterPredicate(GameEntity.COL_FEATURED, Query.FilterOperator.EQUAL, true),
                new Query.FilterPredicate(GameEntity.COL_SHARING, Query.FilterOperator.EQUAL, 3)
        );
        Query q = new Query(GameEntity.KIND).setFilter(featuredFilter);

        PreparedQuery pq = datastore.prepare(q);
        List<Entity> results = pq.asList(FetchOptions.Builder.withLimit(5));
        Iterator<Entity> it = results.iterator();
        while (it.hasNext()) {
            featuredGamesList.add(new GameEntity(it.next()).toGame());
        }
        return featuredGamesList;
    }

    public static List<Game> getRecentGames() {
        ArrayList<Game> featuredGamesList = new ArrayList<Game>();
        Query.FilterPredicate filterPredicate = new Query.FilterPredicate(GameEntity.COL_SHARING, Query.FilterOperator.EQUAL, 3);

        Query q = new Query(GameEntity.KIND).setFilter(filterPredicate).addSort(GameEntity.COL_LASTMODIFICATIONDATE, Query.SortDirection.DESCENDING);

        PreparedQuery pq = datastore.prepare(q);
        List<Entity> results = pq.asList(FetchOptions.Builder.withLimit(10));
        Iterator<Entity> it = results.iterator();
        while (it.hasNext()) {
            featuredGamesList.add(new GameEntity(it.next()).toGame());
        }
        return featuredGamesList;
    }

    public static List<GameEntity> queryAll() {
        System.out.println("in query all");
        ArrayList<GameEntity> allGames = new ArrayList<GameEntity>();
        Query q = new Query(GameEntity.KIND)
                .addSort(GameEntity.COL_LASTMODIFICATIONDATE, Query.SortDirection.ASCENDING);
        PreparedQuery pq = datastore.prepare(q);
        List<Entity> results = pq.asList(FetchOptions.Builder.withLimit(10));
        System.out.println("results "+ results.size());
        Iterator<Entity> it = results.iterator();
        while (it.hasNext()) {
            System.out.println("has next");
            allGames.add(new GameEntity(it.next()));
        }
        return allGames;
    }
}
