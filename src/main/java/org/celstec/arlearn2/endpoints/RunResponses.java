package org.celstec.arlearn2.endpoints;

import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.ForbiddenException;
import org.celstec.arlearn2.beans.run.Response;

import org.celstec.arlearn2.beans.run.ResponseList;
import org.celstec.arlearn2.delegators.ResponseDelegator;
import org.celstec.arlearn2.delegators.RunDelegator;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;

@Api(name = "runResponses")
public class RunResponses extends GenericApi {

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "createRunResponse",
            path = "/run/response"
    )
    public Response createRunResponse(final User user, Response response) {
        EnhancedUser us = (EnhancedUser) user;
        response.setUserId(us.createFullId());
        return new ResponseDelegator().createResponse(response.getRunId(), response);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "deleteRunResponse",
            path = "/run/response/{reponseId}"
    )
    public Response deleteRunResponse(
            final User user, @Named("reponseId") Long responseId
    ) {
        EnhancedUser us = (EnhancedUser) user;
        Response response = new ResponseDelegator().revokeResponse(responseId, us.createFullId());

        if (response.getRevoked()) {
            //todo delete response from datastore
            System.out.println("todo delete response from datastore");
            System.out.println(response.getResponseValue());
        }
        return response;
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "runAllResponses",
            path = "/run/response/runId/{runId}/from/{from}/until/{until}/cursor/{cursor}"
    )
    public ResponseList getAllResponses(
            final User user,
            @Named("runId") Long runId,
            @Named("from") Long from,
            @Named("until") Long until,
            @Named("cursor") String cursor
    ) {
        EnhancedUser us = (EnhancedUser) user;
        if (cursor == null || cursor.length() < 3) {
            cursor = null;
        }
        return new ResponseDelegator().getResponsesFromUntil(runId, from, until, cursor);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "runAllResponsesForItem",
            path = "/run/response/runId/{runId}/item/{itemId}/from/{from}/until/{until}/cursor/{cursor}"
    )
    public ResponseList getAllResponsesForItem(
            final User user,
            @Named("runId") Long runId,
            @Named("itemId") Long itemId,
            @Named("from") Long from,
            @Named("until") Long until,
            @Named("cursor") String cursor
    ) throws ForbiddenException {
        EnhancedUser us = (EnhancedUser) user;
        if (us == null) {
            throw new ForbiddenException("login to access the results");
        }
        if (cursor == null || cursor.length() < 3) {
            cursor = null;
        }
        return new ResponseDelegator().getResponsesFromUntil(runId,itemId, from, until, cursor);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "runAllResponsesMe",
            path = "/run/response/runId/{runId}/from/{from}/until/{until}/cursor/{cursor}/me"
    )
    public ResponseList getAllResponsesMe(
            final User user,
            @Named("runId") Long runId,
            @Named("from") Long from,
            @Named("until") Long until,
            @Named("cursor") String cursor
    ) {
        EnhancedUser us = (EnhancedUser) user;
        if (cursor == null || cursor.length() < 3) {
            cursor = null;
        }
        return new ResponseDelegator().getResponsesFromUntil(runId, from, until, cursor, us.createFullId());
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "runMyResponses",
            path = "/run/response/runId/{runId}/item/{itemId}/me"
    )
    public ResponseList getMyResponsesForRun(
            final User user,
            @Named("runId") Long runId,
            @Named("itemId") Long itemId
    ) {
        EnhancedUser us = (EnhancedUser) user;
        return new ResponseDelegator().getResponses(runId, itemId, us.createFullId());
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "runAllResponse",
            path = "/run/response/runId/{runId}/item/{itemId}/{cursor}/all"
    )
    public ResponseList getResponsesForRun(
            final User user,
            @Named("runId") Long runId,
            @Named("itemId") Long itemId,
            @Named("cursor") String cursor
    ) {
        EnhancedUser us = (EnhancedUser) user;
        if (cursor == null || cursor.length() < 3) {
            cursor = null;
        }
        return new ResponseDelegator().getResponsesCursor(runId, itemId, cursor);
    }

}
