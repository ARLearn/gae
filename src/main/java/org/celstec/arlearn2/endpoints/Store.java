package org.celstec.arlearn2.endpoints;

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


import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;

import com.google.api.server.spi.response.ForbiddenException;
import com.google.api.server.spi.response.UnauthorizedException;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.search.Results;
import com.google.appengine.api.search.ScoredDocument;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.account.AccountList;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.game.GamesList;
import org.celstec.arlearn2.beans.notification.GameModification;
import org.celstec.arlearn2.beans.store.Category;
import org.celstec.arlearn2.beans.store.CategoryList;
import org.celstec.arlearn2.beans.store.GameCategory;
import org.celstec.arlearn2.beans.store.GameCategoryList;
import org.celstec.arlearn2.delegators.CategoryDelegator;
import org.celstec.arlearn2.delegators.FeaturedGameDelegator;
import org.celstec.arlearn2.delegators.GameDelegator;
import org.celstec.arlearn2.endpoints.impl.account.AccountSearchIndex;
import org.celstec.arlearn2.endpoints.impl.storage.DeleteStorage;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.classes.GameCategoryEntity;
import org.celstec.arlearn2.jdo.manager.GameCategoryManager;
import org.celstec.arlearn2.tasks.beans.GameSearchIndex;

@Api(name = "store")
public class Store extends GenericApi {


    @ApiMethod(
            name = "featured_games",
            path = "games/featured/lang/{lang}",
            httpMethod = ApiMethod.HttpMethod.GET)
    public GamesList featured_games(@Named("lang") String lang) {
        return new FeaturedGameDelegator().getFeaturedGames(lang);
    }

    @ApiMethod(
            name = "featured_game_delete_image",
            path = "/games/featured/image/gameId/{gameId}",
            httpMethod = ApiMethod.HttpMethod.DELETE)
    public void deleteFeaturedGameImage(EnhancedUser user,  @Named("gameId") Long gameId) throws ForbiddenException {
        adminCheck(user);
        DeleteStorage.getInstance().deleteFilePath("featuredGames/backgrounds/"+gameId+".png");
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "searchAllUsers",
            path = "/games/library/search/{query}"
    )
    public GamesList searchUsers(@Named("query") String query) {
        GamesList returnList = new GamesList();
        Results<ScoredDocument> results = new GameSearchIndex().getIndex().search(query);
        for (ScoredDocument document : results) {
            Game game = new Game();
            game.setGameId(Long.parseLong(document.getId().substring(5)));
            game.setTitle(document.getFields("title").iterator().next().getText());
            returnList.addGame(game);
        }
        return returnList;
    }


    @ApiMethod(

            name = "create_featured",
            path = "/games/featured/create/{lang}/{gameId}/{rank}"
    )
    public Game createFeatured(final User user,
                               @Named("lang") String lang,
                               @Named("gameId") Long gameId,
                               @Named("rank") int rank
    ) throws Exception {
        adminCheck(user);
        return new FeaturedGameDelegator().createFeaturedGame(lang, gameId, rank);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "delete_featured",
            path = "/games/featured/delete/{lang}/{gameId}"
    )
    public void deleteFeatured(final User user,
                               @Named("lang") String lang,
                               @Named("gameId") Long gameId
    ) throws Exception {
        adminCheck(user);
        new FeaturedGameDelegator().deleteFeaturedGame(lang, gameId);
    }

    @ApiMethod(
            name = "getLibraryGame",
            path = "/games/library/game/{gameId}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public Game getLibraryGame( @Named("gameId") Long gameId) throws ForbiddenException {//Game newGame
        GameDelegator qg = new GameDelegator();
        Game g = qg.getGame(gameId);
        if (g.getError() != null ||g.getSharing() != null || g.getSharing() == Game.PUBLIC) {
            return g;
        }
        throw new ForbiddenException("no accesss");

    }

    @ApiMethod(
            name = "getLibraryCategories",
            path = "/games/library/category/{lang}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public CategoryList getLibraryCategories(@Named("lang") String lang)  {//Game newGame
        CategoryDelegator qg = new CategoryDelegator();
        return qg.getCategories(lang);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "create_category",
            path = "/games/library/category"
    )
    public Category createCategory(final User u, Category category) throws ForbiddenException {//Game newGame
        adminCheck(u);
        EnhancedUser user = (EnhancedUser) u;
        CategoryDelegator qg = new CategoryDelegator();
        return qg.createCategory(category);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "link_game_to_category",
            path = "/games/library/category/{gameId}/{categoryId}"
    )
    public GameCategory linkGame(final User u,
                             @Named("gameId") Long gameId,
                             @Named("categoryId") Long categoryId) throws ForbiddenException {//Game newGame
        adminCheck(u);
        EnhancedUser user = (EnhancedUser) u;
        CategoryDelegator qg = new CategoryDelegator();
        return qg.linkGameToCategory(gameId, categoryId);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "get_games_for_category",
            path = "/games/library/category/games/{categoryId}"
    )
    public GameCategoryList getGamesForCategory(
                                     @Named("categoryId") Long categoryId)  {//Game newGame
        return new CategoryDelegator().getGames(categoryId);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "get_categories_for_game",
            path = "/games/library/categories/game/{gameId}/{lang}"
    )
    public CategoryList getCategoriesForGame(
            @Named("lang") String lang,
            @Named("gameId") Long gameId)  {//Game newGame
        return new CategoryDelegator().getCategories(lang, gameId);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "get_category_mappings_for_game",
            path = "/games/library/categoriesMappings/game/{gameId}"
    )
    public GameCategoryList getCategoriesMappingsForGame(
            @Named("gameId") Long gameId)  {//Game newGame
        GameCategoryList resultList = new GameCategoryList();

        for (GameCategory result : GameCategoryManager.getCategories(gameId).getGameCategoryList()) {
            resultList.addGameCategory(result);
        }
        return resultList;
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "delete_category_mappings_for_game",
            path = "/games/library/categoriesMappings/game/{id}",
            httpMethod = ApiMethod.HttpMethod.DELETE
    )
    public GameCategory deleteCategoriesMappingsForGame(
            final User u,
            @Named("id") String id) throws ForbiddenException {//Game
        adminCheck(u);// newGame
        GameCategoryManager.deleteGameCategory(id);
        GameCategory gameCategory = new GameCategory();
        gameCategory.setId(id);
        return gameCategory;
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "get_recent_games",
            path = "/games/library/recent",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public GamesList recent(
            )  {//Game newGame
        return new GameDelegator().getRecentGames();
    }
}
