package org.celstec.arlearn2.beans.store;

import org.celstec.arlearn2.beans.Bean;
import org.celstec.arlearn2.beans.deserializer.json.BeanDeserializer;
import org.celstec.arlearn2.beans.serializer.json.BeanSerializer;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class GameOrganisation extends Bean {

    private String id;
    private Long gameId;
    private Long organisationId;
    private Boolean deleted;

    public static BeanDeserializer deserializer = new BeanDeserializer(){

        @Override
        public GameOrganisation toBean(JSONObject object) {
            GameOrganisation bean = new GameOrganisation();
            try {
                initBean(object, bean);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return bean;
        }

        public void initBean(JSONObject object, Bean genericBean) throws JSONException {
            super.initBean(object, genericBean);
            GameOrganisation bean = (GameOrganisation) genericBean;
            if (object.has("id")) bean.setId(object.getString("id"));
            if (object.has("gameId")) bean.setGameId(object.getLong("gameId"));
            if (object.has("organisationId")) bean.setOrganisationId(object.getLong("organisationId"));
            if (object.has("deleted")) bean.setDeleted(object.getBoolean("deleted"));
        }
    };

    public static BeanSerializer serializer = new BeanSerializer () {

        @Override
        public JSONObject toJSON(Object bean) {
            GameOrganisation gameCategoryBean = (GameOrganisation) bean;
            JSONObject returnObject = super.toJSON(bean);
            try {
                if (gameCategoryBean.getId() != null) returnObject.put("id", gameCategoryBean.getId());
                if (gameCategoryBean.getGameId() != null) returnObject.put("gameId", gameCategoryBean.getGameId());
                if (gameCategoryBean.getOrganisationId() != null) returnObject.put("organisationId", gameCategoryBean.getOrganisationId());
                if (gameCategoryBean.getDeleted() != null) returnObject.put("deleted", gameCategoryBean.getDeleted());
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return returnObject;
        }
    };

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
    }

    public Long getOrganisationId() {
        return organisationId;
    }

    public void setOrganisationId(Long organisationId) {
        this.organisationId = organisationId;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }
}
