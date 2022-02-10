/******************************************************************************
 Copyright (C) 2013 Open Universiteit Nederland

 This library is free software: you can redistribute it and/or modify
 it under the terms of the GNU Lesser General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This library is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Lesser General Public License for more details.

 You should have received a copy of the GNU Lesser General Public License
 along with this library.  If not, see <http://www.gnu.org/licenses/>.

 Contributors: Stefaan Ternier
 */
package org.celstec.arlearn2.beans.account;


import java.util.Map;
import java.util.StringTokenizer;

import org.celstec.arlearn2.beans.Bean;
import org.celstec.arlearn2.beans.deserializer.json.BeanDeserializer;
import org.celstec.arlearn2.beans.serializer.json.BeanSerializer;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

public class Account extends Bean {

    public final static int ADMINISTRATOR = 1;
    public final static int USER = 2;

    public final static int FACEBOOK = 1;
    public final static int GOOGLE = 2;
    public final static int LINKEDIN = 3;
    public final static int TWITTER = 4;
    public final static int WESPOT = 5;
    public final static int ECO = 6;

    private String firebaseId;
    private String localId;
    private Integer accountType;
    private String email;
    private String password;
    private String name;
    private String givenName;
    private String familyName;
    private String label;
    private String claims;
    private String picture;
    private Integer accountLevel;
    private Long expirationDate;
    private Long organisationId;
    private Boolean canPublishGames;
    private Boolean canAddUsersToOrganisation;
    private Boolean advanced;
    private Boolean admin;
    private Boolean suspended = false;

    private Boolean allowTrackLocation;
    private Long lastModificationDate;
    private Long lastLoginDate;

    public String getFirebaseId() {
        return firebaseId;
    }

    public void setFirebaseId(String firebaseId) {
        this.firebaseId = firebaseId;
    }

    public String getFullId() {
        return accountType + ":" + localId;
    }

    public void setFullid(String accountName) {
        StringTokenizer st = new StringTokenizer(accountName, ":");
        if (st.hasMoreTokens()) {
            setAccountType(Integer.parseInt(st.nextToken()));
        }
        if (st.hasMoreTokens()) {
            setLocalId(st.nextToken());
        }
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

    public String getGivenName() {
        return givenName;
    }

    public void setGivenName(String givenName) {
        this.givenName = givenName;
    }

    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Integer getAccountLevel() {
        return accountLevel;
    }

//    public boolean isAdministrator() {
//        return getAccountLevel() == ADMINISTRATOR;
//    }

    public void setAccountLevel(Integer accountLevel) {
        this.accountLevel = accountLevel;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getClaims() {
        return claims;
    }

    public void setClaims(String claims) {
        this.claims = claims;
    }

    public void setClaimsFromMap(Map<String, Object> claimsMap) {
        this.claims = "";
        if (claimsMap == null) {
            return;
        }
        claimsMap.forEach((key, value) -> this.claims += key + ",");
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getAllowTrackLocation() {
        if (allowTrackLocation == null) return false;
        return allowTrackLocation;
    }

    public void setAllowTrackLocation(Boolean allowTrackLocation) {
        this.allowTrackLocation = allowTrackLocation;
    }

    public Boolean getAdvanced() {
        return advanced;
    }

    public void setAdvanced(Boolean advanced) {
        this.advanced = advanced;
    }

    public Boolean getAdmin() {
        return admin;
    }

    public void setAdmin(Boolean admin) {
        this.admin = admin;
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

    public Boolean getSuspended() {
        return suspended;
    }

    public void setSuspended(Boolean suspended) {
        this.suspended = suspended;
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

    @Override
    public boolean equals(Object obj) {
        Account other = (Account) obj;
        return super.equals(obj) &&
                nullSafeEquals(getLocalId(), other.getLocalId()) &&
                nullSafeEquals(getAccountType(), other.getAccountType()) &&
                nullSafeEquals(getName(), other.getName()) &&
                nullSafeEquals(getGivenName(), other.getGivenName()) &&
                nullSafeEquals(getFamilyName(), other.getFamilyName()) &&
                nullSafeEquals(getPicture(), other.getPicture());
    }

    public static BeanDeserializer deserializer = new AccountDeserializer();

    public void enrichWithOrganisation(Organization organisation) {
        setExpirationDate(organisation.getExpirationDate());
    }

    public static class AccountDeserializer extends BeanDeserializer {

        @Override
        public Account toBean(JSONObject object) {
            Account bean = new Account();
            try {
                initBean(object, bean);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return bean;
        }

        public void initBean(JSONObject object, Bean genericBean) throws JSONException {
            super.initBean(object, genericBean);
            Account bean = (Account) genericBean;
            if (object.has("firebaseId")) bean.setFirebaseId(object.getString("firebaseId"));
            if (object.has("localId")) bean.setLocalId(object.getString("localId"));
            if (object.has("accountType")) bean.setAccountType(object.getInt("accountType"));
            if (object.has("email")) bean.setEmail(object.getString("email"));
            if (object.has("name")) bean.setName(object.getString("name"));
            if (object.has("givenName")) bean.setGivenName(object.getString("givenName"));
            if (object.has("familyName")) bean.setFamilyName(object.getString("familyName"));
            if (object.has("label")) bean.setLabel(object.getString("label"));
            if (object.has("claims")) bean.setClaims(object.getString("claims"));
            if (object.has("picture")) bean.setPicture(object.getString("picture"));
            if (object.has("accountLevel")) bean.setAccountLevel(object.getInt("accountLevel"));
            if (object.has("allowTrackLocation")) bean.setAllowTrackLocation(object.getBoolean("allowTrackLocation"));
            if (object.has("expirationDate")) bean.setExpirationDate(object.getLong("expirationDate"));
            if (object.has("lastModificationDate")) bean.setLastModificationDate(object.getLong("lastModificationDate"));
            if (object.has("lastLoginDate")) bean.setLastLoginDate(object.getLong("lastLoginDate"));
            if (object.has("organisationId")) bean.setOrganisationId(object.getLong("organisationId"));
            if (object.has("advanced")) bean.setAdvanced(object.getBoolean("advanced"));
            if (object.has("admin")) bean.setAdmin(object.getBoolean("admin"));
            if (object.has("suspended")) bean.setSuspended(object.getBoolean("suspended"));
            if (object.has("canAddUsersToOrganisation")) bean.setCanAddUsersToOrganisation(object.getBoolean("canAddUsersToOrganisation"));
            if (object.has("canPublishGames")) bean.setCanPublishGames(object.getBoolean("canPublishGames"));
        }
    }

    ;


    public static BeanSerializer serializer = new AccountSerializer();

    public static class AccountSerializer extends BeanSerializer {

        @Override
        public JSONObject toJSON(Object bean) {
            Account accountBean = (Account) bean;
            JSONObject returnObject = super.toJSON(bean);
            try {
                if (accountBean.getFirebaseId() != null) returnObject.put("firebaseId", accountBean.getFirebaseId());
                if (accountBean.getLocalId() != null) returnObject.put("localId", accountBean.getLocalId());
                if (accountBean.getAccountType() != null) returnObject.put("accountType", accountBean.getAccountType());
                if (accountBean.getEmail() != null) returnObject.put("email", accountBean.getEmail());
                if (accountBean.getName() != null) returnObject.put("name", accountBean.getName());
                if (accountBean.getGivenName() != null) returnObject.put("givenName", accountBean.getGivenName());
                if (accountBean.getFamilyName() != null) returnObject.put("familyName", accountBean.getFamilyName());
                if (accountBean.getLabel() != null) returnObject.put("label", accountBean.getLabel());
                if (accountBean.getClaims() != null) returnObject.put("claims", accountBean.getClaims());
                if (accountBean.getPicture() != null) returnObject.put("picture", accountBean.getPicture());
                if (accountBean.getAccountLevel() != null)
                    returnObject.put("accountLevel", accountBean.getAccountLevel());
                if (accountBean.getAllowTrackLocation() != null)
                    returnObject.put("allowTrackLocation", accountBean.getAllowTrackLocation());
                if (accountBean.getExpirationDate() != null)
                    returnObject.put("expirationDate", accountBean.getExpirationDate());
                if (accountBean.getLastModificationDate() != null)
                    returnObject.put("lastModificationDate", accountBean.getLastModificationDate());
                if (accountBean.getLastLoginDate() != null)
                    returnObject.put("lastLoginDate", accountBean.getLastLoginDate());
                if (accountBean.getOrganisationId() != null)
                    returnObject.put("organisationId", accountBean.getOrganisationId());
                if (accountBean.getAdvanced() != null)
                    returnObject.put("advanced", accountBean.getAdvanced());
                if (accountBean.getAdmin() != null)
                    returnObject.put("admin", accountBean.getAdmin());
                if (accountBean.getSuspended() != null)
                    returnObject.put("suspended", accountBean.getSuspended());
                if (accountBean.getCanAddUsersToOrganisation() != null)
                    returnObject.put("canAddUsersToOrganisation", accountBean.getCanAddUsersToOrganisation());
                if (accountBean.getCanPublishGames() != null)
                    returnObject.put("canPublishGames", accountBean.getCanPublishGames());
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return returnObject;
        }
    }

    ;

}
