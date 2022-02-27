package org.celstec.arlearn2.tasks.game;

import com.google.appengine.api.taskqueue.DeferredTask;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import org.celstec.arlearn2.jdo.manager.GameManager;

public class IncrementPlayCount implements DeferredTask {
    private Long gameId;

    public IncrementPlayCount(Long gameId) {
        this.gameId = gameId;
    }

    @Override
    public void run() {
        GameManager.incrementPlayCount(gameId);
    }


    public static void setup(Long gameId) {
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(
                                new IncrementPlayCount(gameId)
                        )
        );
    }
}
