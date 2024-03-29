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
package org.celstec.arlearn2.beans.game;

import com.google.api.server.spi.config.ApiTransformer;
import org.celstec.arlearn2.beans.dependencies.Dependency;
import org.celstec.arlearn2.beans.transformers.game.GameTransformer;

import java.io.Serializable;

//@ApiTransformer(GameTransformer.class)
public class Game extends GameBean implements Serializable, Comparable<Game>{

    public static final int PRIVATE = 1;
    public static final int WITH_LINK = 2;
    public static final int PUBLIC = 3;

    private String title;
    private String messageListScreen;
    private String messageListTypes;
    private Integer boardWidth;
    private Integer boardHeight;

    private String splashScreen;
    private String creator;
    private String description;
    private String owner;
    private String feedUrl;
    private String startButton;
    private String gameOverHeading;
    private String gameOverButton;
    private String gameOverDescription;

    private Config config;
    private Integer sharing;
    private String licenseCode;
    private String language;
    private Double lng;
    private Double lat;
    private Integer rank;
    private Long theme;
    private Long organisationId;



    private Boolean privateMode;
    private Boolean webEnabled;
    private String iconAbbreviation;

    private Dependency endsOn;

    private Long amountOfPlays;
    private String playDuration;
    private String ageSpan;
    private String devTeam;

    private Boolean showGrid;
    private Integer gridSize;

    public Game() {

    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSplashScreen() {
        return splashScreen;
    }

    public void setSplashScreen(String splashScreen) {
        this.splashScreen = splashScreen;
    }

    public String getCreator() {
        return creator;
    }
    public void setCreator(String creator) {
        this.creator = creator;
    }


    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFeedUrl() {
        return feedUrl;
    }

    public void setFeedUrl(String feedUrl) {
        this.feedUrl = feedUrl;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }


    public Config getConfig() {
        if (config == null) return new Config();
        return config;
    }


    public void setConfig(Config config) {
        this.config = config;
    }


    public Integer getSharing() {
        return sharing;
    }

    public void setSharing(Integer sharing) {
        this.sharing = sharing;
    }

    public String getLicenseCode() {
        return licenseCode;
    }

    public void setLicenseCode(String licenseCode) {
        this.licenseCode = licenseCode;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

//    public String getGooglePlayUrl() {
//        return googlePlayUrl;
//    }
//
//    public void setGooglePlayUrl(String googlePlayUrl) {
//        this.googlePlayUrl = googlePlayUrl;
//    }
//
//    public String getAppStoreUrl() {
//        return appStoreUrl;
//    }
//
//    public void setAppStoreUrl(String appStoreUrl) {
//        this.appStoreUrl = appStoreUrl;
//    }

    public String getMessageListScreen() {
        return messageListScreen;
    }

    public void setMessageListScreen(String messageListScreen) {
        this.messageListScreen = messageListScreen;
    }

    public String getMessageListTypes() {
        return messageListTypes;
    }

    public void setMessageListTypes(String messageListTypes) {
        this.messageListTypes = messageListTypes;
    }

    public Boolean getPrivateMode() {
        return privateMode;
    }

    public void setPrivateMode(Boolean privateMode) {
        this.privateMode = privateMode;
    }

    public Boolean getWebEnabled() {
        return webEnabled;
    }

    public void setWebEnabled(Boolean webEnabled) {
        this.webEnabled = webEnabled;
    }

    public String getIconAbbreviation() {
        return iconAbbreviation;
    }

    public void setIconAbbreviation(String iconAbbreviation) {
        this.iconAbbreviation = iconAbbreviation;
    }

    @Override
    public boolean equals(Object obj) {
        Game other = (Game ) obj;
        return super.equals(obj) &&
                nullSafeEquals(getTitle(), other.getTitle()) &&
                nullSafeEquals(getCreator(), other.getCreator()) &&
                nullSafeEquals(getOwner(), other.getOwner()) &&
                nullSafeEquals(getFeedUrl(), other.getFeedUrl()) &&
                nullSafeEquals(getConfig(), other.getConfig()) &&
                nullSafeEquals(getDescription(), other.getDescription()) &&
                nullSafeEquals(getLicenseCode(), other.getLicenseCode()) &&
                nullSafeEquals(getSharing(), other.getSharing());

    }

    public String getLanguage() {
        if (language == null) return "en";
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public int compareTo(Game o) {
        int result = getTitle().compareToIgnoreCase(o.getTitle());
        if (result != 0) return result;
        return getGameId().compareTo(o.getGameId());
    }

    public Integer getRank() {
        return rank;
    }

    public void setRank(Integer rank) {
        this.rank = rank;
    }

    public Long getTheme() {
        if (theme == null) return 1l;
        return theme;
    }

    public void setTheme(Long theme) {
        this.theme = theme;
    }

    public Long getOrganisationId() {
        return organisationId;
    }

    public void setOrganisationId(Long organisationId) {
        this.organisationId = organisationId;
    }

    public Dependency getEndsOn() {
        return endsOn;
    }

    public void setEndsOn(Dependency endsOn) {
        this.endsOn = endsOn;
    }

    public Integer getBoardWidth() {
        return boardWidth;
    }

    public void setBoardWidth(Integer boardWidth) {
        this.boardWidth = boardWidth;
    }

    public Integer getBoardHeight() {
        return boardHeight;
    }

    public void setBoardHeight(Integer boardHeight) {
        this.boardHeight = boardHeight;
    }

    public Long getAmountOfPlays() {
        return amountOfPlays;
    }

    public void setAmountOfPlays(Long amountOfPlays) {
        this.amountOfPlays = amountOfPlays;
    }

    public Boolean getShowGrid() {
        return showGrid;
    }

    public void setShowGrid(Boolean showGrid) {
        this.showGrid = showGrid;
    }

    public Integer getGridSize() {
        return gridSize;
    }

    public void setGridSize(Integer gridSize) {
        this.gridSize = gridSize;
    }

    public String getStartButton() {
        return startButton;
    }

    public void setStartButton(String startButton) {
        this.startButton = startButton;
    }

    public String getGameOverHeading() {
        return gameOverHeading;
    }

    public void setGameOverHeading(String gameOverHeading) {
        this.gameOverHeading = gameOverHeading;
    }

    public String getGameOverButton() {
        return gameOverButton;
    }

    public void setGameOverButton(String gameOverButtonString) {
        this.gameOverButton = gameOverButtonString;
    }

    public String getGameOverDescription() {
        return gameOverDescription;
    }

    public void setGameOverDescription(String gameOverDescriptionString) {
        this.gameOverDescription = gameOverDescriptionString;
    }

    public String getPlayDuration() {
        return playDuration;
    }

    public void setPlayDuration(String playDuration) {
        this.playDuration = playDuration;
    }

    public String getAgeSpan() {
        return ageSpan;
    }

    public void setAgeSpan(String ageSpan) {
        this.ageSpan = ageSpan;
    }

    public String getDevTeam() {
        return devTeam;
    }

    public void setDevTeam(String devTeam) {
        this.devTeam = devTeam;
    }
}



