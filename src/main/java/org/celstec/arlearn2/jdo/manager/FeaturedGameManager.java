package org.celstec.arlearn2.jdo.manager;

import com.google.appengine.api.datastore.*;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.game.GamesList;
//import org.celstec.arlearn2.jdo.PMF;
import org.celstec.arlearn2.jdo.classes.FeaturedGameEntity;
import org.celstec.arlearn2.jdo.classes.GameAccessEntity;
import org.celstec.arlearn2.jdo.classes.GameEntity;

import java.util.Iterator;
import java.util.List;

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
public class FeaturedGameManager {

    private static DatastoreService datastore;

    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    public static Game createFeaturedGame(long gameId, int rank, String lang) {
        deleteFeaturedGame(gameId, lang);
        FeaturedGameEntity featuredGameJDO = new FeaturedGameEntity();
        featuredGameJDO.setGameId(gameId);
        featuredGameJDO.setRank(rank);
        featuredGameJDO.setLang(lang);
        featuredGameJDO.setLastModificationDate(System.currentTimeMillis());
        datastore.put(featuredGameJDO.toEntity());
        Game game = new Game();
        game.setGameId(featuredGameJDO.getGameId());
        game.setRank(featuredGameJDO.getRank());
        game.setLanguage(featuredGameJDO.getLang());
        return game;

    }

    public static void deleteFeaturedGame(long gameId, String lang) {
        Query q = new Query(FeaturedGameEntity.KIND).setFilter(new Query.FilterPredicate(FeaturedGameEntity.COL_GAMEID, Query.FilterOperator.EQUAL, gameId));
        PreparedQuery pq = datastore.prepare(q);
        List<Entity> results = pq.asList(FetchOptions.Builder.withLimit(50));
        Iterator<Entity> it = results.iterator();
        while (it.hasNext()) {
            FeaturedGameEntity featuredGameEntity = new FeaturedGameEntity(it.next());
            if (featuredGameEntity.getLang().equals(lang)){
                datastore.delete(featuredGameEntity.getKey());
            }
        }
    }

    public static GamesList getFeaturedGames(String lang) {
        Query q = new Query(FeaturedGameEntity.KIND);
        q.setFilter(new Query.FilterPredicate(FeaturedGameEntity.COL_LANG, Query.FilterOperator.EQUAL, lang));
        PreparedQuery pq = datastore.prepare(q);
        GamesList resultList = new GamesList();
        for (Entity result : pq.asIterable()) {
            resultList.addGame(new FeaturedGameEntity(result).toGame());
        }
        return resultList;
    }

    public static GamesList getOrganisationGames(Long organisationId) {
        Query q = new Query(GameEntity.KIND);
        q.setFilter(new Query.FilterPredicate(GameEntity.COL_ORGANISATIONID, Query.FilterOperator.EQUAL, organisationId));
        PreparedQuery pq = datastore.prepare(q);
        GamesList resultList = new GamesList();
        for (Entity result : pq.asIterable()) {
            resultList.addGame(new GameEntity(result).toGame());
        }
        return resultList;
    }

    public static GamesList getFeaturedGame(Long gameId) {
        Query q = new Query(FeaturedGameEntity.KIND);
        q.setFilter(new Query.FilterPredicate(FeaturedGameEntity.COL_GAMEID, Query.FilterOperator.EQUAL, gameId));
        PreparedQuery pq = datastore.prepare(q);
        GamesList resultList = new GamesList();
        for (Entity result : pq.asIterable()) {
            resultList.addGame(new FeaturedGameEntity(result).toGame());
        }
        return resultList;
    }


}
