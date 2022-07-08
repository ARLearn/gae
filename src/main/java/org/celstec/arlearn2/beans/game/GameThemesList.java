package org.celstec.arlearn2.beans.game;

import org.celstec.arlearn2.beans.Bean;
import org.celstec.arlearn2.beans.deserializer.json.BeanDeserializer;
import org.celstec.arlearn2.beans.deserializer.json.ListDeserializer;
import org.celstec.arlearn2.beans.serializer.json.BeanSerializer;
import org.celstec.arlearn2.beans.serializer.json.ListSerializer;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

public class GameThemesList extends Bean {

    public static String GameThemesType = "org.celstec.arlearn2.beans.game.GameTheme";

    private List<GameTheme> themes = new ArrayList<GameTheme>();

    public GameThemesList() {}

    private Long serverTime;
    private Long from;
    private String resumptionToken;

    public String getResumptionToken() {
        return resumptionToken;
    }

    public void setResumptionToken(String resumptionToken) {
        this.resumptionToken = resumptionToken;
    }

    public Long getServerTime() {
        return serverTime;
    }

    public void setServerTime(Long serverTime) {
        this.serverTime = serverTime;
    }

    public List<GameTheme> getThemes() {
        return themes;
    }

    public void setThemes(List<GameTheme> themes) {
        this.themes = themes;
    }

    public void addGameTheme(GameTheme ga) {
        themes.add(ga);
    }

    public Long getFrom() {
        return from;
    }

    public void setFrom(Long from) {
        this.from = from;
    }

    public static BeanSerializer serializer = new BeanSerializer() {

        @Override
        public JSONObject toJSON(Object bean) {
            GameThemesList gal = (GameThemesList) bean;
            JSONObject returnObject = super.toJSON(bean);
            try {
                if (gal.getServerTime() != null)
                    returnObject.put("serverTime", gal.getServerTime());
                if (gal.getFrom() != null)
                    returnObject.put("from", gal.getFrom());
                if (gal.getResumptionToken() != null)
                    returnObject.put("resumptionToken", gal.getResumptionToken());
                if (gal.getThemes() != null)
                    returnObject.put("themes", ListSerializer.toJSON(gal.getThemes()));
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return returnObject;
        }
    };

    public static BeanDeserializer deserializer = new BeanDeserializer() {

        @Override
        public GameThemesList toBean(JSONObject object) {
            GameThemesList tl = new GameThemesList();
            try {
                initBean(object, tl);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return tl;
        }

        public void initBean(JSONObject object, Bean genericBean) throws JSONException {
            super.initBean(object, genericBean);
            GameThemesList giList = (GameThemesList) genericBean;
            if (object.has("serverTime"))
                giList.setServerTime(object.getLong("serverTime"));
            if (object.has("from"))
                giList.setFrom(object.getLong("from"));
            if (object.has("resumptionToken"))
                giList.setResumptionToken(object.getString("resumptionToken"));
            if (object.has("themes"))
                giList.setThemes(ListDeserializer.toBean(object.getJSONArray("themes"), GameTheme.class));
        }
    };

}
