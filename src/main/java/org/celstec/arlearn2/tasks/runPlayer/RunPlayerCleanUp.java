package org.celstec.arlearn2.tasks.runPlayer;

import com.google.appengine.api.datastore.*;
import com.google.appengine.api.taskqueue.DeferredTask;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.run.Run;
import org.celstec.arlearn2.jdo.classes.UserEntity;
import org.celstec.arlearn2.jdo.manager.GameManager;
import org.celstec.arlearn2.jdo.manager.RunManager;

public class RunPlayerCleanUp implements DeferredTask {

    private static DatastoreService datastore;
    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    private String cursor;
    private Long gameId;

    public RunPlayerCleanUp(String cursor) {
        this.cursor = cursor;
    }

    public RunPlayerCleanUp(String cursor, Long gameId) {
        this.cursor = cursor;
        this.gameId = gameId;
    }

    @Override
    public void run() {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(20);
        if (cursor != null) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(cursor));
        }

        Query q = new Query(UserEntity.KIND);
        if (gameId != null) {
            q.setFilter(new Query.FilterPredicate(UserEntity.COL_GAMEID, Query.FilterOperator.EQUAL, gameId));
        }
        PreparedQuery pq = datastore.prepare(q);

        QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);


        boolean hasResult = false;

        for (Entity result : results) {
            Long gameId = (Long) result.getProperty(UserEntity.COL_GAMEID);
            System.out.println("gameId is "+gameId);
            Game game = GameManager.getGame(gameId);
            if (game == null || game.getDeleted()) {
                result.setProperty(UserEntity.COL_LASTMODIFICATIONDATE, System.currentTimeMillis());
                result.setProperty(UserEntity.COL_DELETED, true);
                datastore.put(result);
                System.out.println("gameid "+gameId + " was missing ");
            }
            Long runId = (Long) result.getProperty(UserEntity.COL_RUNID);
            Run run = RunManager.getRun(runId);
            if (run == null || run.getDeleted()) {
                result.setProperty(UserEntity.COL_LASTMODIFICATIONDATE, System.currentTimeMillis());
                result.setProperty(UserEntity.COL_DELETED, true);
                datastore.put(result);
                System.out.println("runId "+runId + " was missing ");
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
                                new RunPlayerCleanUp(cursor)
                        )
        );
    }

    public static void setupGameId(String cursor, Long gameId) {
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(
                                new RunPlayerCleanUp(cursor, gameId)
                        )
        );
    }

}
