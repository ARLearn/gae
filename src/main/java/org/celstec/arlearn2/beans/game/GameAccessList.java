package org.celstec.arlearn2.beans.game;

import java.util.ArrayList;
import java.util.List;

import org.celstec.arlearn2.beans.Bean;
import org.celstec.arlearn2.beans.deserializer.json.BeanDeserializer;
import org.celstec.arlearn2.beans.deserializer.json.ListDeserializer;
import org.celstec.arlearn2.beans.serializer.json.BeanSerializer;
import org.celstec.arlearn2.beans.serializer.json.ListSerializer;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class GameAccessList extends Bean{

	public static String GameAccessType = "org.celstec.arlearn2.beans.game.GameAccess";

	private List<GameAccess> gamesAccess = new ArrayList<GameAccess>();

	public String myFullId;
	public GameAccessList() {

	}

	private Long serverTime;
	private Long from;
	private String resumptionToken;

	public String getMyFullId() {
		return myFullId;
	}

	public void setMyFullId(String myFullId) {
		this.myFullId = myFullId;
	}

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

	public List<GameAccess> getGameAccess() {
		return gamesAccess;
	}

	public void setGameAccess(List<GameAccess> gamesAccess) {
		this.gamesAccess = gamesAccess;
	}

	public void addGameAccess(GameAccess ga) {
		gamesAccess.add(ga);
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
			GameAccessList gal = (GameAccessList) bean;
			JSONObject returnObject = super.toJSON(bean);
			try {
				if (gal.getServerTime() != null)
					returnObject.put("serverTime", gal.getServerTime());
				if (gal.getFrom() != null)
					returnObject.put("from", gal.getFrom());
				if (gal.getResumptionToken() != null)
					returnObject.put("resumptionToken", gal.getResumptionToken());
				if (gal.getGameAccess() != null)
					returnObject.put("gamesAccess", ListSerializer.toJSON(gal.getGameAccess()));
			} catch (JSONException e) {
				e.printStackTrace();
			}
			return returnObject;
		}
	};

	public static BeanDeserializer deserializer = new BeanDeserializer() {

		@Override
		public GameAccessList toBean(JSONObject object) {
			GameAccessList tl = new GameAccessList();
			try {
				initBean(object, tl);
			} catch (JSONException e) {
				e.printStackTrace();
			}
			return tl;
		}

		public void initBean(JSONObject object, Bean genericBean) throws JSONException {
			super.initBean(object, genericBean);
			GameAccessList giList = (GameAccessList) genericBean;
			if (object.has("serverTime"))
				giList.setServerTime(object.getLong("serverTime"));
			if (object.has("from"))
				giList.setFrom(object.getLong("from"));
			if (object.has("resumptionToken"))
				giList.setResumptionToken(object.getString("resumptionToken"));
			if (object.has("gamesAccess"))
				giList.setGameAccess(ListDeserializer.toBean(object.getJSONArray("gamesAccess"), GameAccess.class));
		}
	};
}
