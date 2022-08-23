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
package org.celstec.arlearn2.beans.serializer.json;

import org.celstec.arlearn2.beans.game.Game;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class GameSerializer extends GameBeanSerializer{

	@Override
	public JSONObject toJSON(Object bean) {
		Game game = (Game) bean;
		JSONObject returnObject = super.toJSON(bean);
		try {
			if (game.getTitle() != null) returnObject.put("title", game.getTitle());
			if (game.getSplashScreen() != null) returnObject.put("splashScreen", game.getSplashScreen());
			if (game.getCreator() != null) returnObject.put("creator", game.getCreator());
			if (game.getDescription() != null) returnObject.put("description", game.getDescription());
			if (game.getStartButton() != null) returnObject.put("startButton", game.getStartButton());
			if (game.getOwner() != null) returnObject.put("owner", game.getOwner());
			if (game.getFeedUrl() != null) returnObject.put("feedUrl", game.getFeedUrl());
			if (game.getSharing() != null) returnObject.put("sharing", game.getSharing());
			if (game.getLicenseCode() != null) returnObject.put("licenseCode", game.getLicenseCode());
			if (game.getConfig() != null) returnObject.put("config", JsonBeanSerialiser.serialiseToJson(game.getConfig()));
            if (game.getLng() != null) returnObject.put("lng", game.getLng());
            if (game.getLat() != null) returnObject.put("lat", game.getLat());
            if (game.getLanguage() != null) returnObject.put("language", game.getLanguage());
            if (game.getRank() != null) returnObject.put("rank", game.getRank());
            if (game.getTheme() != null) returnObject.put("theme", game.getTheme());
			if (game.getMessageListScreen() != null) returnObject.put("messageListScreen", game.getMessageListScreen());
			if (game.getMessageListTypes() != null) returnObject.put("messageListTypes", game.getMessageListTypes());
			if (game.getBoardHeight() != null) returnObject.put("boardHeight", game.getBoardHeight());
			if (game.getBoardWidth() != null) returnObject.put("boardWidth", game.getBoardWidth());

			if (game.getPrivateMode() != null) {
				returnObject.put("privateMode", game.getPrivateMode());
			} else {
				returnObject.put("privateMode", false);
			}
			if (game.getWebEnabled() != null) {
				returnObject.put("webEnabled", game.getWebEnabled());
			} else {
				returnObject.put("webEnabled", false);
			}

			if (game.getEndsOn() != null) returnObject.put("endsOn", JsonBeanSerialiser.serialiseToJson(game.getEndsOn()));

			if (game.getIconAbbreviation() != null) returnObject.put("iconAbbreviation", game.getIconAbbreviation());
			if (game.getAmountOfPlays() != null) returnObject.put("amountOfPlays", game.getAmountOfPlays());
			if (game.getGridSize() != null) returnObject.put("gridSize", game.getGridSize());
			if (game.getShowGrid() != null) returnObject.put("showGrid", game.getShowGrid());
        } catch (JSONException e) {
			e.printStackTrace();
		}
		return returnObject;
	}

}
