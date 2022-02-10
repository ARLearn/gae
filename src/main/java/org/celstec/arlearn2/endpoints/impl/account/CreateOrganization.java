package org.celstec.arlearn2.endpoints.impl.account;

import com.google.appengine.api.datastore.*;
import endpoints.repackaged.org.jose4j.http.Get;
import org.celstec.arlearn2.beans.account.Organization;
import org.celstec.arlearn2.tasks.account.UpdateAccountExpirationForOrganisation;

public class CreateOrganization {

    private static DatastoreService datastore;

    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    private static CreateOrganization createOrganizationInstance = null;

    private CreateOrganization() {
    }

    public static CreateOrganization getInstance() {
        if (createOrganizationInstance == null)
            createOrganizationInstance = new CreateOrganization();
        return createOrganizationInstance;
    }

    public Organization createOrganization(Organization organization) {
        Key k = datastore.put(organization.toEntity());
        organization.setId(k.getId());
        return organization;
    }

    public void deleteOrganization(Long id) {
        datastore.delete(KeyFactory.createKey(Organization.TABLE_NAME, id));

    }

    public Organization updateOrganizationExpiration(Long organisationId, Long expirationDate) throws EntityNotFoundException {
        Organization org = GetOrganization.getInstance().getOrganisation(organisationId);
        org.setExpirationDate(expirationDate);
        UpdateAccountExpirationForOrganisation.setup(organisationId, expirationDate);
        return createOrganization(org);
    }
}
