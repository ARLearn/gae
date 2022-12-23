package org.celstec.arlearn2.jdo.manager;

import com.google.appengine.api.datastore.*;
import org.celstec.arlearn2.beans.store.GameCategoryList;
import org.celstec.arlearn2.beans.store.GameOrganisation;
import org.celstec.arlearn2.beans.store.GameOrganisationList;
import org.celstec.arlearn2.jdo.classes.GameCategoryEntity;
import org.celstec.arlearn2.jdo.classes.GameOrganisationEntity;

public class GameOrganisationManager {

    private static DatastoreService datastore;
    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }
    public static GameOrganisation linkGameToOrganisation(Long gameId, Long organisationId) {

        GameOrganisationEntity gameOrganisationEntity = new GameOrganisationEntity();
        gameOrganisationEntity.setOrganisationId(organisationId);
        gameOrganisationEntity.setGameId(gameId);
        gameOrganisationEntity.setDeleted(false);
        gameOrganisationEntity.setUniqueId();
        Entity entity = gameOrganisationEntity.toEntity();
        datastore.put(entity);

        return gameOrganisationEntity.toGameOrganisationBean();
    }

    public static GameOrganisationList getGames(Long organisationId) {

        GameOrganisationList resultList = new GameOrganisationList();
        Query q = new Query(GameOrganisationEntity.KIND)
                .setFilter(new Query.FilterPredicate(GameOrganisationEntity.COL_ORGANISATIONID, Query.FilterOperator.EQUAL, organisationId));
        PreparedQuery pq = datastore.prepare(q);
        for (Entity result : pq.asIterable()) {
            resultList.addGameOrganisation(new GameOrganisationEntity(result).toGameOrganisationBean());
        }
        return resultList;
    }

    public static GameOrganisationList getOrganisationsForGame(Long gameId) {
        GameOrganisationList resultList = new GameOrganisationList();
        Query q = new Query(GameOrganisationEntity.KIND)
                .setFilter(new Query.FilterPredicate(GameOrganisationEntity.COL_GAMEID, Query.FilterOperator.EQUAL, gameId));
        PreparedQuery pq = datastore.prepare(q);
        for (Entity result : pq.asIterable()) {
            resultList.addGameOrganisation(new GameOrganisationEntity(result).toGameOrganisationBean());
        }
        return resultList;
    }
//
//public static GameOrganisationList getOrganisationsForOrganisation(Long organisationId) {
//    GameOrganisationList resultList = new GameOrganisationList();
//    Query q = new Query(GameOrganisationEntity.KIND)
//            .setFilter(new Query.FilterPredicate(GameOrganisationEntity.COL_ORGANISATIONID, Query.FilterOperator.EQUAL, organisationId));
//    PreparedQuery pq = datastore.prepare(q);
//    for (Entity result : pq.asIterable()) {
//        resultList.addGameOrganisation(new GameOrganisationEntity(result).toGameOrganisationBean());
//    }
//    return resultList;
//}


    public static void deleteGameOrganisation(String  id) {
        Key key = KeyFactory.createKey(GameOrganisationEntity.KIND, id);
        try {
            Entity result = datastore.get(key);
            result.setProperty(GameOrganisationEntity.COL_DELETED, true);
            datastore.put(result);
        } catch (EntityNotFoundException e) {
            e.printStackTrace();
        }
//        datastore.delete(key);
    }
}
