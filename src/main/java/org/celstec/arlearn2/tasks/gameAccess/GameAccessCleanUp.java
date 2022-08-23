package org.celstec.arlearn2.tasks.gameAccess;

import com.google.appengine.api.datastore.*;
import com.google.appengine.api.taskqueue.DeferredTask;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.jdo.classes.GameAccessEntity;
import org.celstec.arlearn2.jdo.manager.GameManager;


public class GameAccessCleanUp implements DeferredTask {
    private static DatastoreService datastore;
    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    private String cursor;
    private Long gameId;

    public GameAccessCleanUp(String cursor) {
        this.cursor = cursor;
    }

    public GameAccessCleanUp(String cursor, Long gameId) {
        this.cursor = cursor;
        this.gameId = gameId;
    }

    @Override
    public void run() {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(20);
        if (cursor != null) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(cursor));
        }

        Query q = new Query(GameAccessEntity.KIND);
        if (gameId != null) {
            q.setFilter(new Query.FilterPredicate(GameAccessEntity.COL_GAMEID, Query.FilterOperator.EQUAL, gameId));
        }
        PreparedQuery pq = datastore.prepare(q);
        QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);


        boolean hasResult = false;
        for (Entity result : results) {
            Long gameId = (Long) result.getProperty(GameAccessEntity.COL_GAMEID);
            System.out.println("gameId is "+gameId);
            Game game = GameManager.getGame(gameId);
            if (game == null || game.getDeleted()) {
                result.setProperty(GameAccessEntity.COL_LASTMODIFICATIONDATEGAME, System.currentTimeMillis());
                result.setProperty(GameAccessEntity.COL_ACCESSRIGHTS, GameAccessEntity.GAME_DELETED);
                datastore.put(result);
                System.out.println("gameid "+gameId + " was missing: game access statement was updated ");
            }
            hasResult = true;
        }
        if (hasResult) {
            setupGameId(results.getCursor().toWebSafeString(), gameId);
        }
    }

    public static void setup(String cursor) {
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(
                                new GameAccessCleanUp(cursor)
                        )
        );
    }

    public static void setupGameId(String cursor, Long gameId) {
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(
                                new GameAccessCleanUp(cursor, gameId)
                        )
        );
    }
}