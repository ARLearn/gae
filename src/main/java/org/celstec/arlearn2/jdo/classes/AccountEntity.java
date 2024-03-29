package org.celstec.arlearn2.jdo.classes;

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import org.celstec.arlearn2.beans.account.Account;

/**
 * ****************************************************************************
 * Copyright (C) 2013 Open Universiteit Nederland
 * <p/>
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * <p/>
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * <p/>
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library.  If not, see <http://www.gnu.org/licenses/>.
 * <p/>
 * Contributors: Stefaan Ternier
 * ****************************************************************************
 */
public class AccountEntity {
    public static String KIND = "AccountJDO";

    public static String COL_ACCOUNTLEVEL = "accountLevel";
    public static String COL_FB_ID = "firebaseId";
    public static String COL_ACCOUNTTYPE = "accountType";
    public static String COL_ALLOWTRACKLOCATION = "allowTrackLocation";
    public static String COL_EMAIL = "email";
    public static String COL_FAMILYNAME = "family_name";
    public static String COL_GIVENNAME = "given_name";
    public static String COL_LABEL = "labels";
    public static String COL_LASTMODIFICATIONDATE = "lastModificationDate";
    public static String COL_LASTLOGINDATE = "lastLoginDate";
    public static String COL_EXPIRATIONDATE = "expirationDate";
    public static String COL_ORGANISATIONID = "organisationId";
    public static String COL_ADMIN = "admin";
    public static String COL_ADVANCED = "advanced";
    public static String COL_SUSPENDED = "suspended";
    public static String COL_CAN_PUBLISH = "canPublishGames";
    public static String COL_CAN_ADD_USERS_TO_ORG = "canAddUsersToOrganisation";
    public static String COL_LOCALID = "localId";
    public static String COL_NAME = "name";
    public static String COL_PICTURE = "picture";
    public static String COL_INIT_PW_TOKEN = "initPwToken";
    public static String COL_TOKEN_EXP_DATE = "tokenExpDate";

    public final static int FBCLIENT = 1;
    public final static int GOOGLECLIENT = 2;
    public final static int LINKEDINCLIENT = 3;
    public final static int TWITTERCLIENT = 4;
    public final static int WESPOTCLIENT = 5;
    public final static int ECOCLIENT = 6;
    public final static int FIREBASE_PW = 7;

    public final static int ADMINISTRATOR = 1;
    public final static int USER = 2;

    private Key uniqueId;
    private String firebaseId;
    private String localId;
    private Integer accountType;
    private String email;
    private String name;
//    private String given_name;
//    private String family_name;
    private String picture;
    private String labels;
    private Long lastModificationDate;
    private Long lastLoginDate;
    private Long expirationDate;
    private Long organisationId;
    private Boolean canPublishGames;
    private Boolean canAddUsersToOrganisation;
    private Boolean admin;
    private Boolean advanced;
    private Boolean suspended;
//    private Integer accountLevel;
    private Boolean allowTrackLocation;
    public String initPasswordToken;
    private Long tokenExpirationDate;

    public String getUniqueId() {
        return uniqueId.getName();
    }

    public void setUniqueId() {
        this.uniqueId = KeyFactory.createKey(KIND, getAccountType()+":"+getLocalId());
    }

    public String getLocalId() {
        return localId;
    }

    public void setLocalId(String localId) {
        this.localId = localId;
    }

    public Integer getAccountType() {
        return accountType;
    }

    public void setAccountType(Integer accountType) {
        this.accountType = accountType;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

//    public String getGiven_name() {
//        return given_name;
//    }

//    public void setGiven_name(String given_name) {
//        this.given_name = given_name;
//    }
//
//    public String getFamily_name() {
//        return family_name;
//    }
//
//    public void setFamily_name(String family_name) {
//        this.family_name = family_name;
//    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Long getLastModificationDate() {
        return lastModificationDate;
    }

    public void setLastModificationDate(Long lastModificationDate) {
        this.lastModificationDate = lastModificationDate;
    }

    public Long getLastLoginDate() {
        return lastLoginDate;
    }

    public void setLastLoginDate(Long lastLoginDate) {
        this.lastLoginDate = lastLoginDate;
    }

    //    public Integer getAccountLevel() {
//        return accountLevel;
//    }
//
//    public void setAccountLevel(Integer accountLevel) {
//        this.accountLevel = accountLevel;
//    }

    public Boolean getAllowTrackLocation() {
        return allowTrackLocation;
    }

    public void setAllowTrackLocation(Boolean allowTrackLocation) {
        this.allowTrackLocation = allowTrackLocation;
    }

    public String getLabels() {
        return labels;
    }

    public void setLabels(String labels) {
        this.labels = labels;
    }

    public Long getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Long expirationDate) {
        this.expirationDate = expirationDate;
    }

    public Long getOrganisationId() {
        return organisationId;
    }

    public void setOrganisationId(Long organisationId) {
        this.organisationId = organisationId;
    }

    public String getFirebaseId() {
        return firebaseId;
    }

    public void setFirebaseId(String firebaseId) {
        this.firebaseId = firebaseId;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
    }

    public Boolean getAdvanced() {
        return advanced;
    }

    public void setAdvanced(Boolean advanced) {
        this.advanced = advanced;
    }

    public Boolean getSuspended() {
        return suspended;
    }

    public void setSuspended(Boolean suspended) {
        this.suspended = suspended;
    }

    public Boolean getCanPublishGames() {
        return canPublishGames;
    }

    public void setCanPublishGames(Boolean canPublishGames) {
        this.canPublishGames = canPublishGames;
    }

    public Boolean getCanAddUsersToOrganisation() {
        return canAddUsersToOrganisation;
    }

    public void setCanAddUsersToOrganisation(Boolean canAddUsersToOrganisation) {
        this.canAddUsersToOrganisation = canAddUsersToOrganisation;
    }

    public String getInitPasswordToken() {
        return initPasswordToken;
    }

    public void setInitPasswordToken(String initPasswordToken) {
        this.initPasswordToken = initPasswordToken;
    }

    public Long getTokenExpirationDate() {
        return tokenExpirationDate;
    }

    public void setTokenExpirationDate(Long tokenExpirationDate) {
        this.tokenExpirationDate = tokenExpirationDate;
    }

    public AccountEntity(){

    }


    public AccountEntity(Entity entity){
        this.uniqueId = entity.getKey();
        this.firebaseId = (String) entity.getProperty(COL_FB_ID);
        this.localId = (String) entity.getProperty(COL_LOCALID);
        if ( entity.getProperty(COL_ACCOUNTTYPE) !=null ) {

            this.accountType = ((Long) entity.getProperty(COL_ACCOUNTTYPE)).intValue();
        }
        this.email = (String) entity.getProperty(COL_EMAIL);
        this.name = (String) entity.getProperty(COL_NAME);
//        this.given_name = (String) entity.getProperty(COL_GIVENNAME);
//        this.family_name = (String) entity.getProperty(COL_FAMILYNAME);
        this.labels = (String) entity.getProperty(COL_LABEL);
        this.picture = (String) entity.getProperty(COL_PICTURE);
        this.lastModificationDate = (Long) entity.getProperty(COL_LASTMODIFICATIONDATE);
        this.lastLoginDate = (Long) entity.getProperty(COL_LASTLOGINDATE);
        this.expirationDate = (Long) entity.getProperty(COL_EXPIRATIONDATE);
        this.organisationId = (Long) entity.getProperty(COL_ORGANISATIONID);
        this.advanced = (Boolean) entity.getProperty(COL_ADVANCED) == null ? false : (Boolean) entity.getProperty(COL_ADVANCED);
        this.admin = (Boolean) entity.getProperty(COL_ADMIN) == null ? false : (Boolean) entity.getProperty(COL_ADMIN);
        this.suspended = (Boolean) entity.getProperty(COL_SUSPENDED) == null ? false : (Boolean) entity.getProperty(COL_SUSPENDED);

        this.canPublishGames = (Boolean) entity.getProperty(COL_CAN_PUBLISH) == null ? false : (Boolean) entity.getProperty(COL_CAN_PUBLISH);
        this.canAddUsersToOrganisation = (Boolean) entity.getProperty(COL_CAN_ADD_USERS_TO_ORG) == null ? false : (Boolean) entity.getProperty(COL_CAN_ADD_USERS_TO_ORG);

        //        if ( entity.getProperty(COL_ACCOUNTLEVEL) !=null )this.accountLevel = ((Long) entity.getProperty(COL_ACCOUNTLEVEL)).intValue();
        this.allowTrackLocation = (Boolean) entity.getProperty(COL_ALLOWTRACKLOCATION);
        this.tokenExpirationDate = (Long) entity.getProperty(COL_TOKEN_EXP_DATE);
        this.initPasswordToken = (String) entity.getProperty(COL_INIT_PW_TOKEN);
    }

    public AccountEntity(Account acc){
        setLocalId(acc.getLocalId());
        setAccountType(acc.getAccountType());
        setUniqueId();
        setFirebaseId(acc.getFirebaseId());
        setEmail(acc.getEmail());
        setName(acc.getName());
        setLabels(acc.getLabel());
        setPicture(acc.getPicture());
        setLastModificationDate(System.currentTimeMillis());
        setAllowTrackLocation(false);
        setExpirationDate(acc.getExpirationDate());
        setSuspended(acc.getSuspended());
        setInitPasswordToken(acc.getInitPasswordToken());
        setTokenExpirationDate(acc.getTokenExpirationDate());
    }

    public Entity toEntity() {
        Entity result = new Entity(KIND, this.uniqueId.getName());
        result.setProperty(COL_FB_ID, this.firebaseId);
        result.setProperty(COL_LOCALID, this.localId);
        result.setProperty(COL_ACCOUNTTYPE, this.accountType);
        result.setProperty(COL_EMAIL, this.email);
        result.setProperty(COL_NAME, this.name);
//        result.setProperty(COL_GIVENNAME, this.given_name);
//        result.setProperty(COL_FAMILYNAME, this.family_name);
        result.setProperty(COL_LABEL, this.labels);
        result.setProperty(COL_PICTURE, this.picture);
        result.setProperty(COL_LASTMODIFICATIONDATE, this.lastModificationDate);
        result.setProperty(COL_LASTLOGINDATE, this.lastLoginDate);
//        result.setProperty(COL_ACCOUNTLEVEL, this.accountLevel);
        result.setProperty(COL_ALLOWTRACKLOCATION, this.allowTrackLocation);
        result.setProperty(COL_EXPIRATIONDATE, this.expirationDate);
        result.setProperty(COL_ORGANISATIONID, this.organisationId);
        result.setProperty(COL_ADVANCED, this.advanced);
        result.setProperty(COL_ADMIN, this.admin);
        result.setProperty(COL_SUSPENDED, this.suspended);
        result.setProperty(COL_CAN_PUBLISH, this.canPublishGames);
        result.setProperty(COL_CAN_ADD_USERS_TO_ORG, this.canAddUsersToOrganisation);

        result.setProperty(COL_TOKEN_EXP_DATE, this.tokenExpirationDate);
        result.setProperty(COL_INIT_PW_TOKEN, this.initPasswordToken);
        return result;
    }

    public Account toAccount(){
        Account account = new Account();
        account.setFirebaseId(this.firebaseId);
        account.setLocalId(this.localId);
        account.setAccountType(this.accountType);
        account.setEmail(this.email);
//        account.setGivenName(this.given_name);
//        account.setFamilyName(this.family_name);
        account.setName(this.name);
        account.setPicture(this.picture);
        account.setLabel(this.labels);
//        account.setAccountLevel(this.accountLevel);
        account.setAllowTrackLocation(this.allowTrackLocation);
        account.setExpirationDate(this.expirationDate);
        account.setOrganisationId(this.organisationId);
        account.setAdvanced(this.advanced);
        account.setSuspended(this.suspended);
        account.setAdmin(this.admin);
        account.setLastModificationDate(this.lastModificationDate);
        account.setLastLoginDate(this.lastLoginDate);
        account.setInitPasswordToken(this.initPasswordToken);
        account.setTokenExpirationDate(this.tokenExpirationDate);
        return account;
    }
}
