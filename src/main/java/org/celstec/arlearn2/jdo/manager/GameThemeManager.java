package org.celstec.arlearn2.jdo.manager;

import com.google.appengine.api.datastore.*;
import org.celstec.arlearn2.beans.game.*;
import org.celstec.arlearn2.jdo.classes.GameAccessEntity;
import org.celstec.arlearn2.jdo.classes.GameEntity;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class GameThemeManager {
    private static final int THEMES_IN_LIST = 10;
    public static String KIND = "GameThemeJDO";
    public static String COL_LASTMODIFICATIONDATE = "lastModificationDateGame";

    private static DatastoreService datastore;

    static {
        datastore = DatastoreServiceFactory.getDatastoreService();
    }

    public static GameThemesList listGlobalWithCursor(String cursorString, Long from) {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(THEMES_IN_LIST);
        if (cursorString != null) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(cursorString));
        }
        GameThemesList returnList = new GameThemesList();
        returnList.setFrom(from);
        Query q = new Query(KIND)
                .setFilter(Query.CompositeFilterOperator.and(
                        new Query.FilterPredicate("global", Query.FilterOperator.EQUAL, true),
                        new Query.FilterPredicate(COL_LASTMODIFICATIONDATE, Query.FilterOperator.GREATER_THAN_OR_EQUAL, from)
                ))
                .addSort(COL_LASTMODIFICATIONDATE, Query.SortDirection.DESCENDING);

        PreparedQuery pq = datastore.prepare(q);
        QueryResultList<Entity> results = pq.asQueryResultList(fetchOptions);

        for (Entity result : results) {

            returnList.addGameTheme(GameTheme.from(result));
        }
        if (results.size() == THEMES_IN_LIST) {
            returnList.setResumptionToken(results.getCursor().toWebSafeString());
        }
        returnList.setServerTime(System.currentTimeMillis());
        return returnList;
    }

    public static void updateOnce() {
        Query q = new Query(KIND);

        PreparedQuery pq = datastore.prepare(q);

        for (Entity result : pq.asIterable()) {
            if (result.getProperty(COL_LASTMODIFICATIONDATE) ==  null) {
                result.setIndexedProperty(COL_LASTMODIFICATIONDATE, System.currentTimeMillis());
                datastore.put(result);
            }
        }
    }

    public static GameTheme getGameTheme(Long themeId) {
        Key key = KeyFactory.createKey(KIND, themeId);
        Entity result = null;
        try {
            result = datastore.get(key);
        } catch (EntityNotFoundException e) {
            System.out.println("error ");
            return null;
        }
        return GameTheme.from(result);
    }

    public static void deleteGameTheme(Long themeId) {
        Key key = KeyFactory.createKey(KIND, themeId);
        datastore.delete(key);

    }

    public static GameTheme create(GameTheme newTheme) {
        Entity result = null;
        if (newTheme.getThemeId() == null) {
            result = new Entity(KIND);
        } else {
            result = new Entity(KIND, newTheme.getThemeId());
        }

        result.setProperty("primaryColor", newTheme.getPrimaryColor());
        result.setProperty("secondaryColor", newTheme.getSecondaryColor());
        result.setIndexedProperty(COL_LASTMODIFICATIONDATE, System.currentTimeMillis());


        result.setProperty("global", newTheme.isGlobal());
        result.setProperty("fullAccount", newTheme.getFullAccount());
        result.setProperty("category", newTheme.getCategory());
        result.setProperty("name", newTheme.getName());

        result.setProperty("iconPath", newTheme.getIconPath());
        result.setProperty("backgroundPath", newTheme.getBackgroundPath());
        result.setProperty("correctPath", newTheme.getCorrectPath());
        result.setProperty("wrongPath", newTheme.getWrongPath());


        datastore.put(result);
        return GameTheme.from(result);

    }

    public static List<GameTheme> listGlobal() {
        ArrayList<GameTheme> globalThemeList = new ArrayList<GameTheme>();
        Query.FilterPredicate featuredFilter = new Query.FilterPredicate("global", Query.FilterOperator.EQUAL, true);

        Query q = new Query(KIND).setFilter(featuredFilter);
        PreparedQuery pq = datastore.prepare(q);
        List<Entity> results = pq.asList(FetchOptions.Builder.withLimit(150));
        Iterator<Entity> it = results.iterator();
        while (it.hasNext()) {
            globalThemeList.add(GameTheme.from(it.next()));
        }
        return globalThemeList;
    }

    public static List<GameTheme> myThemes(String account) {
        ArrayList<GameTheme> globalThemeList = new ArrayList<GameTheme>();
        Query.FilterPredicate featuredFilter = new Query.FilterPredicate("fullAccount", Query.FilterOperator.EQUAL, account);

        Query q = new Query(KIND).setFilter(featuredFilter);
        PreparedQuery pq = datastore.prepare(q);
        List<Entity> results = pq.asList(FetchOptions.Builder.withLimit(25));
        Iterator<Entity> it = results.iterator();
        while (it.hasNext()) {
            globalThemeList.add(GameTheme.from(it.next()));
        }
        return globalThemeList;
    }


    public static GameThemesList listMineWithCursor(String account, String cursorString, long from) {
        FetchOptions fetchOptions = FetchOptions.Builder.withLimit(THEMES_IN_LIST);
        if (cursorString != null) {
            fetchOptions.startCursor(Cursor.fromWebSafeString(cursorString));
        }
        GameThemesList returnList = new GameThemesList();
        returnList.setFrom(from);
        Query q = new Query(KIND)
                .setFilter(Query.CompositeFilterOperator.and(
                        new Query.FilterPredicate("fullAccount", Query.FilterOperator.EQUAL, account),
                        new Query.FilterPredicate(COL_LASTMODIFICATIONDATE, Query.FilterOperator.GREATER_THAN_OR_EQUAL, from)
                ))
                .addSort(COL_LASTMODIFICATIONDATE, Query.SortDirection.DESCENDING);

        PreparedQuery pq = datastore.prepare(q);
        QueryResultList<Entity> results = pq.asQueryResultList(fetchOptions);

        for (Entity result : results) {

            returnList.addGameTheme(GameTheme.from(result));
        }
        if (results.size() == THEMES_IN_LIST) {
            returnList.setResumptionToken(results.getCursor().toWebSafeString());
        }
        returnList.setServerTime(System.currentTimeMillis());
        return returnList;
    }
}
