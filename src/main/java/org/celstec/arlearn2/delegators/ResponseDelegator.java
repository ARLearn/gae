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
package org.celstec.arlearn2.delegators;

import com.google.api.server.spi.response.NotFoundException;
import org.celstec.arlearn2.beans.run.Response;
import org.celstec.arlearn2.beans.run.ResponseList;
import org.celstec.arlearn2.beans.run.Run;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.ResponseManager;


public class ResponseDelegator  {

    public ResponseDelegator(){
    }

//    public ResponseDelegator(EnhancedUser user) {
//        super(user);
//    }

    public Response createResponse(Long runIdentifier, Response r) throws NotFoundException {
        RunDelegator rd = new RunDelegator();
        Run run = rd.getRun(runIdentifier);
        if (run == null) {
            r.setError("invalid run identifier");
            return r;
        }
        if (r.getTimestamp() == null) {
            r.setTimestamp(System.currentTimeMillis());
        }
//        long id = ResponseManager.addResponse(r.getGeneralItemId(), r.getResponseValue(), run.getRunId(), r.getUserId(), r.getTimestamp(), r.getLat(), r.getLng());
        long id = ResponseManager.addResponse(r);
        r.setResponseId(id);
        //r.setResponseValue(ResponseEntity.normalizeValue(r.getResponseValue()));
        r.setLastModificationDate(System.currentTimeMillis());
//        RunAccessDelegator rad = new RunAccessDelegator(this);
//        NotificationDelegator nd = new NotificationDelegator(this);
//        for (RunAccess ra : rad.getRunAccess(r.getRunId()).getRunAccess()) {
//            nd.broadcast(r, ra.getAccount());
//        }
        return r;
    }

//    public ResponseList getResponses(Long runId, Long itemId, String account) {
//        ResponseList rl = new ResponseList();
//        rl.setResponses(ResponseManager.getResponse(runId, itemId, account, null, null));
//        return rl;
//    }

    //    public ResponseList getResponse(Long responseId, String account) {
//        ResponseList rl = new ResponseList();
//        rl.setResponses(ResponseManager.getResponse(runId, itemId, account, null, null));
//        return rl;
//    }
    public ResponseList getResponses(Long runId, Long itemId, String account) {
        ResponseList rl = new ResponseList();
        rl.setResponses(ResponseManager.getResponse(runId, itemId, account, null, null));
        return rl;
    }

    public ResponseList getResponsesCursor(Long runId, Long itemId, String cursor) {
        return ResponseManager.getResponse(runId, itemId, cursor);
    }

    public ResponseList getResponsesFromUntil(Long runId, Long itemId, String fullId, Long from, Long until, String cursor) {
        return ResponseManager.getResponse(runId, itemId, fullId, from, until, cursor);
    }

    public ResponseList getResponsesFromUntil(Long runId, Long itemId, Long from, Long until, String cursor) {
        return ResponseManager.getResponse(runId, itemId, from, until, cursor);
    }

    public ResponseList getResponsesFromUntil(Long runId, Long from, Long until, String cursor) {
        return ResponseManager.getResponse(runId, from, until, cursor);
    }

    public ResponseList getResponsesFromUntil(Long runId, Long from, Long until, String cursor, String userId) {
        return ResponseManager.getResponse(runId, from, until, cursor, userId);
    }

    public Response revokeResponse(Long responseId, String userId) {
        return ResponseManager.revokeResponse(responseId, userId);
    }

    public Response revokeResponse(Response r) {
        return ResponseManager.revokeResponse(r.getRunId(), r.getGeneralItemId(), r.getUserId(), r.getTimestamp());
    }

    public void deleteResponses(Long runId) {
        ResponseManager.deleteResponses(runId, null);
    }

    public void deleteResponses(Long runId, String email) {
        ResponseManager.deleteResponses(runId, email);

    }

}
