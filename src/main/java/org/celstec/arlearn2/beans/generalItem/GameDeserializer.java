/*******************************************************************************
 * Copyright (C) 2013 Open Universiteit Nederland
 * 
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * 
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library.  If not, see <http://www.gnu.org/licenses/>.
 * 
 * Contributors: Stefaan Ternier
 ******************************************************************************/
package org.celstec.arlearn2.beans.generalItem;

import org.celstec.arlearn2.beans.Bean;
import org.celstec.arlearn2.beans.dependencies.Dependency;
import org.celstec.arlearn2.beans.deserializer.json.GameBeanDeserializer;
import org.celstec.arlearn2.beans.deserializer.json.JsonBeanDeserializer;
import org.celstec.arlearn2.beans.game.Config;
import org.celstec.arlearn2.beans.game.Game;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class GameDeserializer extends GameBeanDeserializer {

	@Override
	public Game toBean(JSONObject object) {
		Game returnObject = new Game();
		try {
			initBean(object, returnObject);
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return returnObject;
	}
	
	public void initBean(JSONObject object, Bean genericBean) throws JSONException {
		super.initBean(object, genericBean);
		Game g = (Game) genericBean;
		if (object.has("title")) g.setTitle(object.getString("title"));
		if (object.has("splashScreen")) g.setSplashScreen(object.getString("splashScreen"));
		if (object.has("creator")) g.setCreator(object.getString("creator"));
		if (object.has("description")) g.setDescription(object.getString("description"));
		if (object.has("startButton")) g.setStartButton(object.getString("startButton"));

		if (object.has("gameOverHeading")) g.setGameOverHeading(object.getString("gameOverHeading"));
		if (object.has("gameOverButton")) g.setGameOverButton(object.getString("gameOverButton"));
		if (object.has("gameOverDescription")) g.setGameOverDescription(object.getString("gameOverDescription"));
		if (object.has("owner")) g.setOwner(object.getString("owner"));
		if (object.has("feedUrl")) g.setFeedUrl(object.getString("feedUrl"));
		if (object.has("messageListTypes")) g.setMessageListTypes(object.getString("messageListTypes"));
		if (object.has("sharing")) g.setSharing(object.getInt("sharing"));
		if (object.has("licenseCode")) g.setLicenseCode(object.getString("licenseCode"));
		if (object.has("config")) g.setConfig((Config) JsonBeanDeserializer.deserialize(Config.class, object.getJSONObject("config")));
        if (object.has("lng")) g.setLng(object.getDouble("lng"));
        if (object.has("lat")) g.setLat(object.getDouble("lat"));
        if (object.has("language")) g.setLanguage(object.getString("language"));
        if (object.has("rank")) g.setRank(object.getInt("rank"));
        if (object.has("theme")) g.setTheme(object.getLong("theme"));
//		if (object.has("googlePlayUrl")) g.setGooglePlayUrl(object.getString("googlePlayUrl"));
//		if (object.has("appStoreUrl")) g.setAppStoreUrl(object.getString("appStoreUrl"));
		if (object.has("messageListScreen")) g.setMessageListScreen(object.getString("messageListScreen"));
		if (object.has("messageListTypes")) g.setMessageListTypes(object.getString("messageListTypes"));
		if (object.has("privateMode")) g.setPrivateMode(object.getBoolean("privateMode"));
		if (object.has("webEnabled")) g.setWebEnabled(object.getBoolean("webEnabled"));

		if (object.has("iconAbbreviation")) g.setIconAbbreviation(object.getString("iconAbbreviation"));
		if (object.has("endsOn")) g.setEndsOn((Dependency) JsonBeanDeserializer.deserialize(Dependency.class, object.getJSONObject("endsOn")));
		if (object.has("boardHeight")) g.setBoardHeight(object.getInt("boardHeight"));
		if (object.has("boardWidth")) g.setBoardWidth(object.getInt("boardWidth"));
		if (object.has("amountOfPlays")) g.setAmountOfPlays(object.getLong("amountOfPlays"));

		if (object.has("showGrid")) g.setShowGrid(object.getBoolean("showGrid"));
		if (object.has("gridSize")) g.setGridSize(object.getInt("gridSize"));
    }
}
