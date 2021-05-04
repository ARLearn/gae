package org.celstec.arlearn2.endpoints.impl.storage;

import com.google.api.gax.paging.Page;
import com.google.appengine.api.utils.SystemProperty;
import com.google.apphosting.api.ApiProxy;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;

public class DeleteStorage {

    private static DeleteStorage deleteStorageInstance = null;
    Storage storage;
    String projectId = "serious-gaming-platform-dev";
    Bucket bucket;
    private DeleteStorage() {
        projectId = System.getProperty(SystemProperty.applicationId.key());
        storage = StorageOptions.newBuilder().setProjectId(projectId).build().getService();
        bucket = storage.get(projectId+".appspot.com");
    }

    public static DeleteStorage getInstance() {
        if (deleteStorageInstance == null)
            deleteStorageInstance = new DeleteStorage();
        return deleteStorageInstance;
    }

    public boolean deleteFilePath(String path) {
        ApiProxy.Environment env = ApiProxy.getCurrentEnvironment();
        return  storage.delete(projectId+".appspot.com", path);
    }

    public void deleteFolder(String path) {
        Page<Blob> blobs =
                bucket.list(
                        Storage.BlobListOption.prefix(path));
        for (Blob blob : blobs.iterateAll()) {
            if (!blob.isDirectory()) {
                blob.delete();
            }
        }

    }
}
