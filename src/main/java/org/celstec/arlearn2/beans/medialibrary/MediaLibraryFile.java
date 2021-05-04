package org.celstec.arlearn2.beans.medialibrary;

import org.celstec.arlearn2.beans.Bean;
import org.celstec.arlearn2.beans.deserializer.json.BeanDeserializer;
import org.celstec.arlearn2.beans.deserializer.json.GameBeanDeserializer;
import org.celstec.arlearn2.beans.serializer.json.BeanSerializer;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

import java.io.Serializable;

public class MediaLibraryFile extends Bean implements Serializable {

    private Long assetId;
    private Long lastModificationDate;
    private String tags;
    private String name;
    private String path;




    public Long getAssetId() {
        return assetId;
    }

    public void setAssetId(Long assetId) {
        this.assetId = assetId;
    }

    public Long getLastModificationDate() {
        return lastModificationDate;
    }

    public void setLastModificationDate(Long lastModificationDate) {
        this.lastModificationDate = lastModificationDate;
    }

    public String getTags() {
        return tags;
    }

    public void setTags(String tags) {
        this.tags = tags;
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

    public static BeanSerializer serializer = new BeanSerializer() {
        @Override
        public JSONObject toJSON(Object bean) {
            MediaLibraryFile mediaLibraryFile = (MediaLibraryFile) bean;
            JSONObject returnObject = super.toJSON(bean);
            try {
                if (mediaLibraryFile.getAssetId() != null) returnObject.put("assetId", mediaLibraryFile.getAssetId());
                if (mediaLibraryFile.getLastModificationDate() != null) returnObject.put("lastModificationDate", mediaLibraryFile.getLastModificationDate());
                if (mediaLibraryFile.getTags() != null) returnObject.put("tags", mediaLibraryFile.getTags());
                if (mediaLibraryFile.getName() != null) returnObject.put("name", mediaLibraryFile.getName());
                if (mediaLibraryFile.getPath() != null) returnObject.put("path", mediaLibraryFile.getPath());

            } catch (
                    JSONException e) {
                e.printStackTrace();
            }
            return returnObject;
        }
    };

    public static BeanDeserializer deserializer = new BeanDeserializer() {

        @Override
        public MediaLibraryFile toBean(JSONObject object) {
            MediaLibraryFile mediaLibraryFile = new MediaLibraryFile();
            try {
                initBean(object, mediaLibraryFile);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return mediaLibraryFile;
        }

        public void initBean(JSONObject object, Bean genericBean) throws JSONException {
            super.initBean(object, genericBean);
            MediaLibraryFile mediaLibraryFile = (MediaLibraryFile) genericBean;
            if (object.has("assetId")) mediaLibraryFile.setAssetId(object.getLong("assetId"));
            if (object.has("lastModificationDate")) mediaLibraryFile.setLastModificationDate(object.getLong("lastModificationDate"));
            if (object.has("tags")) mediaLibraryFile.setTags(object.getString("tags"));
            if (object.has("name")) mediaLibraryFile.setName(object.getString("name"));
            if (object.has("path")) mediaLibraryFile.setPath(object.getString("path"));
        }
    };
}
