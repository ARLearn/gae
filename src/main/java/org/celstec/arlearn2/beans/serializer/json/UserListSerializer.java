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

import org.celstec.arlearn2.beans.run.UserList;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class UserListSerializer extends RunBeanSerialiser{

	@Override
	public JSONObject toJSON(Object bean) {
		UserList ul = (UserList) bean;
		JSONObject returnObject = super.toJSON(bean);
		try {
			if (ul.getServerTime() != null) returnObject.put("serverTime", ul.getServerTime());
			if (ul.getFrom() != null)
				returnObject.put("from", ul.getFrom());
			if (ul.getResumptionToken() != null)
				returnObject.put("resumptionToken", ul.getResumptionToken());
			if (ul.getUsers() != null) returnObject.put("users", ListSerializer.toJSON(ul.getUsers()));
		} catch (JSONException e) {
			e.printStackTrace();
		}
		return returnObject;
	}

}
