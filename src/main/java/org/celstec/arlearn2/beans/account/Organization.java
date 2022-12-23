package org.celstec.arlearn2.beans.account;

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.KeyFactory;
import org.mockito.internal.matchers.Or;

public class Organization {
    public static String COL_NAME = "name";
    public static String TABLE_NAME = "Organization";
    public static String COL_EXPIRATION_DATE = "expirationDate";
    private Long id;
    private String name;
    private Long expirationDate;

    public static Organization fromEntity(Entity entity) {
        Organization organization = new Organization();
        organization.setId(entity.getKey().getId());
        organization.name = (String) entity.getProperty(COL_NAME);
        organization.expirationDate = (Long) entity.getProperty(COL_EXPIRATION_DATE);
        return organization;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Long expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Entity toEntity() {
        Entity result = new Entity(TABLE_NAME);
        if (getId()!=null) {
            result = new Entity(TABLE_NAME, getId());
        }
        result.setProperty(COL_NAME, this.name);
        result.setProperty(COL_EXPIRATION_DATE, this.expirationDate);
        return result;
    }

    public Organization withoutExpiration() {
        expirationDate = null;
        return this;
    }
}
