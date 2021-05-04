package org.celstec.arlearn2.endpoints.impl.account;

import com.google.api.server.spi.response.CollectionResponse;
import com.google.appengine.api.datastore.*;
import org.celstec.arlearn2.beans.account.Organization;

import java.util.ArrayList;

public class GetOrganization {

    private static final int ORGANIZATIONS_IN_LIST = 20;

    private static DatastoreService datastore;

    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    private static GetOrganization getOrganizationInstance = null;

    private GetOrganization() {
    }

    public static GetOrganization getInstance() {
        if (getOrganizationInstance == null)
            getOrganizationInstance = new GetOrganization();
        return getOrganizationInstance;
    }

    public CollectionResponse<Organization> listOrganizations(String cursorString) {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(ORGANIZATIONS_IN_LIST);
        if (cursorString != null) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(cursorString));
        }

        Query q = new Query(Organization.TABLE_NAME);
        PreparedQuery pq = datastore.prepare(q);
        ArrayList<Organization> organizations = new ArrayList<>();
        QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);
        for (Entity result : results) {

            organizations.add(Organization.fromEntity(result));
        }
        CollectionResponse.Builder builder = CollectionResponse.<Organization>builder().setItems(organizations);
        if (results.size() == ORGANIZATIONS_IN_LIST) {
            builder = builder.setNextPageToken(results.getCursor().toWebSafeString());
        }

        return builder.build();
    }

    public Organization getOrganisation(Long id) throws EntityNotFoundException {
        return Organization.fromEntity(datastore.get(KeyFactory.createKey(Organization.TABLE_NAME, id)));
    }
}
