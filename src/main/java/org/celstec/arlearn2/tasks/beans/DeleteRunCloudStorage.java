package org.celstec.arlearn2.tasks.beans;

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


public class DeleteRunCloudStorage implements DeferredTask {

    private Long runId;
    private String fullAccount;

    public DeleteRunCloudStorage(Long runId, String fullAccount) {
        this.runId = runId;
        this.fullAccount = fullAccount;
    }


    @Override
    public void run() {
        if (fullAccount == null) {
            deletePath("run/"+runId);
        } else {
            Account account = (new AccountDelegator()).getContactDetails(fullAccount);
            if (account != null) {
                String firebaseId = account.getFirebaseId() ;
                if (firebaseId != null) {

                    deletePath("run/"+runId+"/"+firebaseId);
                }

            }
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

    public static void setup(Long runId, String fullAccount) {
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(
                                new DeleteRunCloudStorage(runId, fullAccount)
                        )
        );
    }
}
