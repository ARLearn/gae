package org.celstec.arlearn2.endpoints;


import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.CollectionResponse;

import com.google.api.server.spi.response.ForbiddenException;
import org.celstec.arlearn2.beans.account.Organization;

import org.celstec.arlearn2.endpoints.impl.account.CreateOrganization;
import org.celstec.arlearn2.endpoints.impl.account.GetOrganization;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;


@Api(name = "organization")
public class OrganisationAPI extends GenericApi {

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "listOrganisations",
            path = "/organization/list"
    )
    public CollectionResponse<Organization> getUserEmail(EnhancedUser user) throws ForbiddenException {
        adminCheck(user);
        return GetOrganization.getInstance().listOrganizations(null);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "create_organisation",
            path = "/organization/create"
    )
    public Organization createOrganisation(final User user, Organization organization) throws Exception{
        adminCheck(user);
        return CreateOrganization.getInstance().createOrganization(organization);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "get_organisation",
            path = "/organization/{id}"
    )
    public Organization getOrganisation(final User user, @Named("id") Long id) throws Exception{
        adminCheck(user);
        return GetOrganization.getInstance().getOrganisation(id);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "delete_organisation",
            path = "/organization/{id}"
    )
    public Organization deleteOrganisation(final User user, @Named("id") Long id) throws Exception{
        adminCheck(user);
        Organization organization = GetOrganization.getInstance().getOrganisation(id);
        CreateOrganization.getInstance().deleteOrganization(id);
        return organization;
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "update_organisation_expiration",
            path = "/organization/{organisationId}/exp/{expirationDate}"
    )
    public Organization updateOrganisationExpiration(final User user,
                                           @Named("organisationId") Long organisationId,
                                           @Named("expirationDate") Long expirationDate) throws Exception{
        adminCheck(user);
        return CreateOrganization.getInstance().updateOrganizationExpiration(organisationId, expirationDate);
    }
}
