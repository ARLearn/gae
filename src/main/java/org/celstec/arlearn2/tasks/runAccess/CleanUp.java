package org.celstec.arlearn2.tasks.runAccess;

import com.google.appengine.api.datastore.*;
import com.google.appengine.api.taskqueue.DeferredTask;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.run.Run;
import org.celstec.arlearn2.jdo.classes.RunAccessEntity;
import org.celstec.arlearn2.jdo.manager.GameManager;
import org.celstec.arlearn2.jdo.manager.RunManager;

public class CleanUp implements DeferredTask {
    private static DatastoreService datastore;
    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    private String cursor;
    public CleanUp(String cursor) {
        this.cursor = cursor;

    }


    @Override
    public void run() {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(20);
        if (cursor != null) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(cursor));
        }

        Query q = new Query(RunAccessEntity.KIND);
        PreparedQuery pq = datastore.prepare(q);
        QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);
        boolean hasResult = false;
        for (Entity result : results) {
            Long gameId = (Long) result.getProperty(RunAccessEntity.COL_GAMEID);
            System.out.println("gameId is "+gameId);
            Game game = GameManager.getGame(gameId);
            if (game == null || game.getDeleted()) {
                result.setProperty(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, System.currentTimeMillis());
                result.setProperty(RunAccessEntity.COL_ACCESSRIGHTS, RunAccessEntity.GAME_DELETED);
                datastore.put(result);
                System.out.println("gameid "+gameId + " was missing ");
            }
            Long runId = (Long) result.getProperty(RunAccessEntity.COL_RUNID);
            Run run = RunManager.getRun(runId);
            if (run == null || run.getDeleted()) {
                result.setProperty(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, System.currentTimeMillis());
                result.setProperty(RunAccessEntity.COL_ACCESSRIGHTS, RunAccessEntity.RUN_DELETED);
                datastore.put(result);
                System.out.println("runId "+runId + " was missing ");
            }
            hasResult = true;
        }
        if (hasResult) {
            setup(results.getCursor().toWebSafeString());
        }

    }


    public static void setup(String cursor) {
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(
                                new CleanUp(cursor)
                        )
        );
    }
}
