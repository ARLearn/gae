package org.celstec.arlearn2.jdo.manager;

import com.google.api.server.spi.response.CollectionResponse;
import com.google.appengine.api.datastore.*;
import org.celstec.arlearn2.beans.medialibrary.MediaLibraryFile;
import org.celstec.arlearn2.jdo.classes.ActionEntity;
import org.celstec.arlearn2.jdo.classes.GameEntity;

import java.util.ArrayList;
import java.util.List;

public class MediaLibraryManager {
    public static String KIND = "MediaLibraryJDO";
    public static String COL_NAME = "name";
    public static String COL_TAGS = "tags";
    public static String COL_PATH = "path";
    public static String COL_LASTMODIFICATIONDATE = "lastModificationDate";

    private static final int FILES_IN_LIST = 20;

    private static DatastoreService datastore;
    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    public static void delete(Long assetId) {
        Key key = KeyFactory.createKey(KIND, assetId);
        datastore.delete(key);
    }

    public static MediaLibraryFile addMediaLibraryFile(MediaLibraryFile file) {
        Entity entity = new Entity(KIND);
        entity.setProperty(COL_NAME, file.getName());
        entity.setProperty(COL_TAGS, file.getTags());
        entity.setProperty(COL_PATH, file.getPath());
        entity.setProperty(COL_LASTMODIFICATIONDATE, file.getLastModificationDate());
        Long identifier = datastore.put(entity).getId();
        System.out.println("identifier is "+identifier);
        file.setAssetId(identifier);
        return file;
    }


    public static CollectionResponse<MediaLibraryFile> getFilesByPath(String path, String cursorString) {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(FILES_IN_LIST);
        if (cursorString != null) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(cursorString));
        }

        Query q = new Query(KIND)
                .setFilter(new Query.FilterPredicate(COL_PATH, Query.FilterOperator.EQUAL, path));
        PreparedQuery pq = datastore.prepare(q);
        List<MediaLibraryFile> mediaFiles = new ArrayList<MediaLibraryFile>(50);
        QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);
        for (Entity result : results) {
            MediaLibraryFile object = new MediaLibraryFile();
            object.setName((String) result.getProperty(COL_NAME));
            object.setPath((String)result.getProperty(COL_PATH));
            object.setTags((String)result.getProperty(COL_TAGS));
            object.setLastModificationDate((Long)result.getProperty(COL_LASTMODIFICATIONDATE));

            mediaFiles.add(object);
        }
        if (results.size() == FILES_IN_LIST) {
            return CollectionResponse.<MediaLibraryFile>builder().setItems(mediaFiles).setNextPageToken(results.getCursor().toWebSafeString()).build();
        }
        return CollectionResponse.<MediaLibraryFile>builder().setItems(mediaFiles).build();


    }

}
