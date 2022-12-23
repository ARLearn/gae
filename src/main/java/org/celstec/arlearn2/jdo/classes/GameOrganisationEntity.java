package org.celstec.arlearn2.jdo.classes;

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import org.celstec.arlearn2.beans.store.GameOrganisation;

public class GameOrganisationEntity {

    public static String KIND = "GameOrganisationJDO";

    public static String COL_ORGANISATIONID = "organisationId";
    public static String COL_GAMEID= "gameId";
    public static String COL_DELETED = "deleted";

    private Key uniqueId;
    private Long organisationId;
    private Long gameId;
    private Boolean deleted;

    public String getUniqueId() {
        return uniqueId.getName();
    }

    public void setUniqueId() {
        this.uniqueId = KeyFactory.createKey(KIND, getOrganisationId()+":"+getGameId());
    }

    public Long getOrganisationId() {
        return organisationId;
    }

    public void setOrganisationId(Long organisationId) {
        this.organisationId = organisationId;
    }

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public GameOrganisationEntity() {

    }

    public GameOrganisationEntity(Entity entity) {
        this.uniqueId = entity.getKey();
        this.gameId = (Long) entity.getProperty(COL_GAMEID);
        this.organisationId = (Long) entity.getProperty(COL_ORGANISATIONID);
        this.deleted = (Boolean) entity.getProperty(COL_DELETED);

    }

    public Entity toEntity() {
        Entity result = null;
        result = new Entity(KIND, this.uniqueId.getName());
        result.setProperty(COL_GAMEID,this.gameId);
        result.setProperty(COL_ORGANISATIONID,this.organisationId);
        result.setProperty(COL_DELETED,this.deleted);
        return result;
    }

    public GameOrganisation toGameOrganisationBean(){
        GameOrganisation gameCategory = new GameOrganisation();
        gameCategory.setId(uniqueId.getName());
        gameCategory.setOrganisationId(getOrganisationId());
        gameCategory.setGameId(getGameId());
        gameCategory.setDeleted(getDeleted());
        return gameCategory;
    }
}
