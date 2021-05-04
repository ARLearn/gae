package org.celstec.arlearn2.endpoints;

import com.google.appengine.api.search.*;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.medialibrary.MediaLibraryFile;
import org.celstec.arlearn2.tasks.beans.GenericBean;

import java.util.Date;
import java.util.logging.Level;

public class MediaSearchIndexAdd extends GenericBean {

    public static String MEDIA_SEARCH_INDEX = "media_search_index";
    public static String ID_PREFIX = "medialib:";

    String name;
    String path;
    String tags;
    Long lastModificationDate;
    Long assetId;

    public MediaSearchIndexAdd() {
        super();
    }

    public MediaSearchIndexAdd(MediaLibraryFile mediaLibraryFile) {
        this.assetId = mediaLibraryFile.getAssetId();
        this.tags = mediaLibraryFile.getTags();
        this.path = mediaLibraryFile.getPath();
        this.name = mediaLibraryFile.getName();
        this.lastModificationDate = mediaLibraryFile.getLastModificationDate();
    }

    public Long getAssetId() {
        return assetId;
    }

    public void setAssetId(Long assetId) {
        this.assetId = assetId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
    }

    public Long getLastModificationDate() {
        return lastModificationDate;
    }

    public void setLastModificationDate(Long lastModificationDate) {
        this.lastModificationDate = lastModificationDate;
    }

    @Override
    public void run() {
        try {

            Document.Builder builder = Document.newBuilder()
                    .setId(ID_PREFIX + getAssetId())
                    .addField(Field.newBuilder().setName("name").setText(""+getName()))
                    .addField(Field.newBuilder().setName("path").setText(""+getPath()))
                    .addField(Field.newBuilder().setName("tags").setText(""+getTags()))
                    .addField(Field.newBuilder().setName("lastModificationDate").setDate(new Date(getLastModificationDate())));
            Document doc = builder.build();
            getIndex().put(doc);
        } catch (PutException e) {
            if (StatusCode.TRANSIENT_ERROR.equals(e.getOperationResult().getCode())) {
                e.printStackTrace();
                throw e;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static Index getIndex() {
        IndexSpec indexSpec = IndexSpec.newBuilder().setName(MEDIA_SEARCH_INDEX).build();
        return SearchServiceFactory.getSearchService().getIndex(indexSpec);
    }
}
