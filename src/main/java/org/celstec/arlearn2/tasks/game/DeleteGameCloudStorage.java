package org.celstec.arlearn2.tasks.game;

import com.google.api.gax.paging.Page;
import com.google.appengine.api.taskqueue.DeferredTask;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import com.google.appengine.api.utils.SystemProperty;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.delegators.AccountDelegator;


public class DeleteGameCloudStorage implements DeferredTask {

    private Long gameId;
    public DeleteGameCloudStorage(Long gameId) {
        this.gameId = gameId;

    }


    @Override
    public void run() {
        if (gameId != null && gameId > 1000) {
            deletePath("game/"+gameId);
        }
    }

    public void deletePath(String path) {
        String projectId = System.getProperty(SystemProperty.applicationId.key());
        String bucketName = projectId+".appspot.com";
        Storage storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();
        Bucket bucket = storage.get(bucketName);
        Page<Blob> blobs =
                bucket.list(
                        Storage.BlobListOption.prefix(path));

        for (Blob blob : blobs.iterateAll()) {
            if (!blob.isDirectory()) {
                System.out.println("found blob "+blob.getName());
                blob.delete();
            }

        }
    }

    public static void setup(Long gameId) {
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(
                                new DeleteGameCloudStorage(gameId)
                        )
        );
    }
}
