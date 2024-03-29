package org.celstec.arlearn2.jdo.classes;

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.google.appengine.api.datastore.Text;
import org.celstec.arlearn2.beans.dependencies.Dependency;
import org.celstec.arlearn2.beans.deserializer.json.JsonBeanDeserializer;
import org.celstec.arlearn2.beans.game.Config;
import org.celstec.arlearn2.beans.game.Game;

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
public class GameEntity {


    public static String KIND = "GameJDO";

    public static String COL_DELETED = "deleted";
    public static String COL_LASTMODIFICATIONDATE = "lastModificationDate";

//    public static String COL_APPSTOREURL = "appStoreUrl";
    public static String COL_CONFIG = "config";
    public static String COL_CREATOREMAIL = "creatorEmail";
    public static String COL_DESCRIPTION = "description";
    public static String COL_STARTBUTTON = "startButton";
    public static String COL_GAME_OVER_HEADING = "gameOverHeading";
    public static String COL_GAME_OVER_BUTTON = "gameOverButton";
    public static String COL_GAME_OVER_DESC_BUTTON = "gameOverDescription";
    public static String COL_FEATURED = "featured";
    public static String COL_FEEDURL = "feedUrl";

//    public static String COL_GOOGLEPLAYURL = "googlePlayUrl";
    public static String COL_MESSAGELISTSCREEN = "messageListScreen";
    public static String COL_MESSAGELISTTYPES = "messageListTypes";
    public static String COL_BOARDWIDTH = "boardWidth";
    public static String COL_BOARDHEIGHT = "boardHeight";
    public static String COL_LANGUAGE = "language";

    public static String COL_LAT = "lat";
    public static String COL_LNG = "lng";
    public static String COL_LICENSECODE = "licenseCode";
    public static String COL_OWNER = "owner";
    public static String COL_SHARING = "sharing";
    public static String COL_THEME = "theme";
    public static String COL_ORGANISATIONID = "organisationId";
    public static String COL_TITLE = "title";
    public static String COL_SPLASHSCREEN = "splashScreen";
    public static String COL_PRIVATE_MODE = "privateMode";
    public static String COL_WEB_ENABLED = "webEnabled";
    public static String COL_ICON_ABBREV = "iconAbbreviation";
    public static String COL_ENDS_ON = "endsOn";
    public static String COL_AMOUNT_OF_PLAYS = "amountOfPlays";

    public static String COL_SHOW_GRID = "showGrid";
    public static String COL_GRID_SIZE = "gridSize";

    public static String COL_PLAY_DURATION = "playDuration";
    public static String COL_AGE_SPAN = "ageSpan";
    public static String COL_DEV_TEAM = "devTeam";

    //from GameClass
    private Key gameId;
    protected Boolean deleted;
    private Long lastModificationDate;

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }

    public Long getLastModificationDate() {
        return lastModificationDate;
    }

    public void setLastModificationDate(Long lastModificationDate) {
        this.lastModificationDate = lastModificationDate;
    }

    //from Game
    private String title;
    private String splashScreen;
    private String owner;
    private String creatorEmail;
    private String feedUrl;
    private Text config;
    private Text description;
    private Text startButton;
    private Text gameOverHeading;
    private Text gameOverButton;
    private Text gameOverDescription;
    private Text endsOn;
    private Integer sharing;
    private String licenseCode;
    private Double lat;
    private Double lng;
    private Boolean featured;
    private String language;
    private Long theme;
    private Long organisationId;
//    private String googlePlayUrl;
//    private String appStoreUrl;
    private String messageListScreen;
    private String messageListTypes;
    private Integer boardWidth;
    private Integer boardHeight;
    private Boolean privateMode;
    private Boolean webEnabled;
    private String iconAbbreviation;
    private Long amountOfPlays;

    private Boolean showGrid;
    private Integer gridSize;

    private String playDuration;
    private String ageSpan;
    private String devTeam;


    public Long getGameId() {
        return gameId.getId();
    }

    public void setGameId(Long gameId) {
        if (gameId != null)
            setGameId(KeyFactory.createKey(KIND, gameId));
    }

    public void setGameId(Key gameId) {
        this.gameId = gameId;
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

    public String getCreatorEmail() {
        return creatorEmail;
    }

    public void setCreatorEmail(String creatorEmail) {
        this.creatorEmail = creatorEmail;
    }

    public String getFeedUrl() {
        return feedUrl;
    }

    public void setFeedUrl(String feedUrl) {
        this.feedUrl = feedUrl;
    }

    public void setDevTeam(String devTeam) {
        this.devTeam = devTeam;
    }

    public void setAgeSpan(String ageSpan) {
        this.ageSpan = ageSpan;
    }

    public void setPlayDuration(String playDuration) {
        this.playDuration = playDuration;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public String getConfig() {
        if (config == null) return null;
        return config.getValue();
    }

    public String getEndsOn() {
        if (endsOn == null) return null;
        return endsOn.getValue();
    }

    public void setEndsOn(String endsOn) {
        System.out.println("ends on is now "+endsOn);
        this.endsOn = new Text(endsOn);
    }

    public void setConfig(String config) {
        this.config = new Text(config);
    }

    public String getDescription() {
        if (description == null) return null;
        return description.getValue();
    }

    public void setDescription(String description) {
        if (description != null) this.description = new Text(description);
    }


    public String getStartButton() {
        if (startButton == null) return null;
        return startButton.getValue();
    }

    public void setStartButton(String startButton) {
        if (startButton != null) this.startButton = new Text(startButton);
    }

    public String getGameOverHeading() {
        if (gameOverHeading == null) return null;
        return gameOverHeading.getValue();
    }

    public void setGameOverHeading(String gameOverHeadingString) {
        if (gameOverHeadingString != null) this.gameOverHeading = new Text(gameOverHeadingString);
    }

    public String getGameOverButton() {
        if (gameOverButton == null) return null;
        return gameOverButton.getValue();
    }

    public void setGameOverButton(String gameOverButtonString) {
        if (gameOverButtonString != null) this.gameOverButton = new Text(gameOverButtonString);
    }

    public String getGameOverDescription() {
        if (gameOverDescription == null) return null;
        return gameOverDescription.getValue();
    }

    public void setGameOverDescription(String gameOverDescString) {
        if (gameOverDescString != null) this.gameOverDescription = new Text(gameOverDescString);
    }

    public Integer getSharing() {
        if (sharing == null) return Game.PRIVATE;
        return sharing;
    }

    public String getDevTeam() {
        return devTeam;
    }

    public String getAgeSpan() {
        return ageSpan;
    }

    public String getPlayDuration() {
        return playDuration;
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

    public Double getLat() {
        return lat;
    }

    public void setLat(Double lat) {
        this.lat = lat;
    }

    public Double getLng() {
        return lng;
    }

    public void setLng(Double lng) {
        this.lng = lng;
    }

    public Boolean getFeatured() {
        return featured;
    }

    public void setFeatured(Boolean featured) {
        this.featured = featured;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Long getTheme() {
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

    public GameEntity() {

    }

    public GameEntity(Entity entity) {
        this.gameId = entity.getKey();
        this.deleted = (Boolean) entity.getProperty(COL_DELETED);
        this.lastModificationDate = (Long) entity.getProperty(COL_LASTMODIFICATIONDATE);
        this.title = (String) entity.getProperty(COL_TITLE);
        this.splashScreen = (String) entity.getProperty(COL_SPLASHSCREEN);
        this.owner = (String) entity.getProperty(COL_OWNER);
        this.creatorEmail = (String) entity.getProperty(COL_CREATOREMAIL);
        this.feedUrl = (String) entity.getProperty(COL_FEEDURL);
        this.config = (Text) entity.getProperty(COL_CONFIG);
        this.endsOn= (Text) entity.getProperty(COL_ENDS_ON);
        this.description = (Text) entity.getProperty(COL_DESCRIPTION);
        this.startButton = (Text) entity.getProperty(COL_STARTBUTTON);
        this.gameOverButton = (Text) entity.getProperty(COL_GAME_OVER_BUTTON);
        this.gameOverHeading =(Text) entity.getProperty(COL_GAME_OVER_HEADING);
        this.gameOverDescription = (Text) entity.getProperty(COL_GAME_OVER_DESC_BUTTON);
        if (entity.getProperty(COL_SHARING) != null) {
            this.sharing = ((Long) entity.getProperty(COL_SHARING)).intValue();
        }

        this.licenseCode = (String) entity.getProperty(COL_LICENSECODE);
        this.lat = (Double) entity.getProperty(COL_LAT);
        this.lng = (Double) entity.getProperty(COL_LNG);
        this.featured = (Boolean) entity.getProperty(COL_FEATURED);
        this.language = (String) entity.getProperty(COL_LANGUAGE);
        if (entity.getProperty(COL_THEME) != null) {
            this.theme = ((Long) entity.getProperty(COL_THEME));
        }
        if (entity.getProperty(COL_ORGANISATIONID) != null) {
            this.organisationId = ((Long) entity.getProperty(COL_ORGANISATIONID));
        }

//        this.googlePlayUrl = (String) entity.getProperty(COL_GOOGLEPLAYURL);
//        this.appStoreUrl = (String) entity.getProperty(COL_APPSTOREURL);
        this.messageListScreen = (String) entity.getProperty(COL_MESSAGELISTSCREEN);
        this.messageListTypes = (String) entity.getProperty(COL_MESSAGELISTTYPES);
        if (entity.getProperty(COL_BOARDHEIGHT) != null) {
            this.boardHeight = ((Long) entity.getProperty(COL_BOARDHEIGHT)).intValue();
        }
        if (entity.getProperty(COL_BOARDWIDTH) != null) {
            this.boardWidth = ((Long) entity.getProperty(COL_BOARDWIDTH)).intValue();
        }
        this.privateMode = (Boolean) entity.getProperty(COL_PRIVATE_MODE);
        this.webEnabled = (Boolean) entity.getProperty(COL_WEB_ENABLED);


        this.iconAbbreviation = (String) entity.getProperty(COL_ICON_ABBREV);
        if (entity.getProperty(COL_AMOUNT_OF_PLAYS) != null) {
            this.amountOfPlays = ((Long) entity.getProperty(COL_AMOUNT_OF_PLAYS)).longValue();
        }
        this.showGrid = (Boolean) entity.getProperty(COL_SHOW_GRID);
        if (entity.getProperty(COL_GRID_SIZE) != null) {
            this.gridSize = ((Long) entity.getProperty(COL_GRID_SIZE)).intValue();
        }
        this.playDuration = (String) entity.getProperty(COL_PLAY_DURATION);
        this.ageSpan = (String) entity.getProperty(COL_AGE_SPAN);
        this.devTeam = (String) entity.getProperty(COL_DEV_TEAM);
    }

    public Entity toEntity() {
        Entity result = null;
        if (this.gameId == null) {
            result = new Entity(KIND);
        } else {
            result = new Entity(KIND, this.gameId.getId());
        }

        result.setProperty(COL_DELETED, this.deleted);
        result.setProperty(COL_LASTMODIFICATIONDATE, this.lastModificationDate);
//        result.setProperty(COL_APPSTOREURL, this.appStoreUrl);
        result.setProperty(COL_CONFIG, this.config);
        result.setProperty(COL_ENDS_ON, this.endsOn);
        result.setProperty(COL_CREATOREMAIL, this.creatorEmail);
        result.setProperty(COL_DESCRIPTION, this.description);
        result.setProperty(COL_STARTBUTTON, this.startButton);

        result.setProperty(COL_GAME_OVER_HEADING, this.gameOverHeading);
        result.setProperty(COL_GAME_OVER_BUTTON, this.gameOverButton);
        result.setProperty(COL_GAME_OVER_DESC_BUTTON, this.gameOverDescription);
        result.setProperty(COL_FEATURED, this.featured);
        result.setProperty(COL_FEEDURL, this.feedUrl);
        result.setProperty(COL_AGE_SPAN, this.ageSpan);
        result.setProperty(COL_PLAY_DURATION, this.playDuration);
        result.setProperty(COL_DEV_TEAM, this.devTeam);
//        result.setProperty(COL_GOOGLEPLAYURL, this.googlePlayUrl);

        result.setProperty(COL_MESSAGELISTSCREEN, this.messageListScreen);
        result.setProperty(COL_MESSAGELISTTYPES, this.messageListTypes);
        result.setProperty(COL_BOARDWIDTH, this.boardWidth);
        result.setProperty(COL_BOARDHEIGHT, this.boardHeight);

        result.setProperty(COL_LANGUAGE, this.language);
        result.setProperty(COL_LAT, this.lat);
        result.setProperty(COL_LNG, this.lng);
        result.setProperty(COL_LICENSECODE, this.licenseCode);
        result.setProperty(COL_OWNER, this.owner);
        result.setProperty(COL_SHARING, this.sharing);
        result.setProperty(COL_THEME, this.theme);
        result.setProperty(COL_ORGANISATIONID, this.organisationId);
        result.setProperty(COL_TITLE, this.title);
        result.setProperty(COL_SPLASHSCREEN, this.splashScreen);
        result.setProperty(COL_PRIVATE_MODE, this.privateMode);
        result.setProperty(COL_WEB_ENABLED, this.webEnabled);
        result.setProperty(COL_ICON_ABBREV, this.iconAbbreviation);
        result.setProperty(COL_AMOUNT_OF_PLAYS, this.amountOfPlays);
        result.setProperty(COL_SHOW_GRID, this.showGrid);
        result.setProperty(COL_GRID_SIZE, this.gridSize);
        return result;

    }

    public Game toGame() {
        Game game = new Game();
        game.setCreator(getCreatorEmail());
        game.setTitle(getTitle());
        game.setSplashScreen(getSplashScreen());
        game.setFeedUrl(getFeedUrl());
        game.setGameId(getGameId());
        game.setOwner(getOwner());
        game.setDescription(getDescription());
        game.setStartButton(getStartButton());
        game.setGameOverHeading(getGameOverHeading());
        game.setGameOverButton(getGameOverButton());
        game.setGameOverDescription(getGameOverDescription());
        game.setSharing(getSharing());
        game.setLng(getLng());
        game.setLat(getLat());
        game.setLanguage(getLanguage());
        game.setMessageListScreen(getMessageListScreen());
        game.setMessageListTypes(getMessageListTypes());
        game.setBoardWidth(getBoardWidth());
        game.setBoardHeight(getBoardHeight());

        game.setPlayDuration(getPlayDuration());
        game.setDevTeam(getDevTeam());
        game.setAgeSpan(getAgeSpan());

        if (getTheme() != null) game.setTheme(getTheme());
        if (getOrganisationId() != null) game.setOrganisationId(getOrganisationId());
        if (getLicenseCode() != null) game.setLicenseCode(getLicenseCode());
        if (getLastModificationDate() != null) {
            game.setLastModificationDate(getLastModificationDate());
        }
        JsonBeanDeserializer jbd;
        if (getConfig() != null && !"".equals(getConfig())) {

            try {
                jbd = new JsonBeanDeserializer(getConfig());
                Config config = (Config) jbd.deserialize(Config.class);
                game.setConfig(config);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        try {

            if (getEndsOn() != null) {
                jbd = new JsonBeanDeserializer(getEndsOn());
                game.setEndsOn((Dependency) jbd.deserialize(Dependency.class));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (getDeleted() == null) {
            game.setDeleted(false);
        } else {
            game.setDeleted(getDeleted());
        }
        if (getPrivateMode() == null) {
            game.setPrivateMode(false);
        } else {
            game.setPrivateMode(getPrivateMode());
        }
        if (getWebEnabled() == null) {
            game.setWebEnabled(false);
        } else {
            game.setWebEnabled(getWebEnabled());
        }
        if (getIconAbbreviation() == null) {
            game.setIconAbbreviation("");
        } else {
            game.setIconAbbreviation(this.iconAbbreviation);
        }
        if (getAmountOfPlays() == null) {
            game.setAmountOfPlays(0L);
        } else {
            game.setAmountOfPlays(getAmountOfPlays());
        }

        game.setShowGrid(showGrid);
        game.setGridSize(gridSize);

        return game;
    }

}
