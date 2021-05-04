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

import org.celstec.arlearn2.beans.generalItem.GeneralItemSerializer;
import org.celstec.arlearn2.beans.generalItem.NarratorItem;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;


public class NarratorItemSerializer extends GeneralItemSerializer {

	@Override
	public JSONObject toJSON(Object bean) {
		NarratorItem gi = (NarratorItem) bean;
		JSONObject returnObject = super.toJSON(bean);
		try {
			if (gi.getVideoUrl() != null) returnObject.put("videoUrl", gi.getVideoUrl());
			if (gi.getAudioUrl() != null) returnObject.put("audioUrl", gi.getAudioUrl());
			if (gi.getImageUrl() != null) returnObject.put("imageUrl", gi.getImageUrl());
			if (gi.getText() != null) returnObject.put("text", gi.getText());
			if (gi.getHeading() != null) returnObject.put("heading", gi.getHeading());
			if (gi.getRichText() != null) returnObject.put("richText", gi.getRichText());
			if (gi.getOpenQuestion() != null) returnObject.put("openQuestion", JsonBeanSerialiser.serialiseToJson(gi.getOpenQuestion()));			
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return returnObject;
	}
}
