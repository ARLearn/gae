package org.celstec.arlearn2.beans.store;

import org.celstec.arlearn2.beans.Bean;
import org.celstec.arlearn2.beans.deserializer.json.BeanDeserializer;
import org.celstec.arlearn2.beans.deserializer.json.ListDeserializer;
import org.celstec.arlearn2.beans.serializer.json.BeanSerializer;
import org.celstec.arlearn2.beans.serializer.json.ListSerializer;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class GameOrganisationList extends Bean {

    public static String gameOrganisationType = "org.celstec.arlearn2.beans.store.GameOrganisation";

    private List<GameOrganisation> gameOrganisationList = new ArrayList<GameOrganisation>();

    public List<GameOrganisation> getGameOrganisationList() {
        return gameOrganisationList;
    }

    public void setGameOrganisationList(List<GameOrganisation> gameOrganisationList) {
        this.gameOrganisationList = gameOrganisationList;
    }

    public void addGameOrganisation(GameOrganisation gameOrganisation) {
        this.gameOrganisationList.add(gameOrganisation);
    }

    public static BeanSerializer serializer = new BeanSerializer() {

        @Override
        public JSONObject toJSON(Object bean) {
            GameOrganisationList organisationList = (GameOrganisationList) bean;
            JSONObject returnObject = super.toJSON(bean);
            try {
                if (organisationList.getGameOrganisationList() != null)
                    returnObject.put("gameOrganisationList", ListSerializer.toJSON(organisationList.getGameOrganisationList()));
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return returnObject;
        }
    };

    public static BeanDeserializer deserializer = new BeanDeserializer() {

        @Override
        public GameOrganisationList toBean(JSONObject object) {
            GameOrganisationList al = new GameOrganisationList();
            try {
                initBean(object, al);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return al;
        }

        public void initBean(JSONObject object, Bean genericBean) throws JSONException {
            super.initBean(object, genericBean);
            GameOrganisationList organisationList = (GameOrganisationList) genericBean;
            if (object.has("gameOrganisationList"))
                organisationList.setGameOrganisationList(ListDeserializer.toBean(object.getJSONArray("gameOrganisationList"), GameOrganisation.class));
        }
    };
}