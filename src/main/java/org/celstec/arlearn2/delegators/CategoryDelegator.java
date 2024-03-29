package org.celstec.arlearn2.delegators;

import org.celstec.arlearn2.beans.store.Category;
import org.celstec.arlearn2.beans.store.CategoryList;
import org.celstec.arlearn2.beans.store.GameCategory;
import org.celstec.arlearn2.beans.store.GameCategoryList;
import org.celstec.arlearn2.cache.CategoryCache;
import org.celstec.arlearn2.jdo.manager.CategoryManager;
import org.celstec.arlearn2.jdo.manager.GameCategoryManager;

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
public class CategoryDelegator  {

    public CategoryDelegator() {
    }

    public Category getCategory(long id) {
        Category cat = CategoryCache.getInstance().getCategory(id);
        if (cat == null) {
            cat = CategoryManager.getCategory(id);
            CategoryCache.getInstance().storeCategory(cat);
        }
        return cat;
    }

    public CategoryList getCategoryByCategoryId(Long id) {
        CategoryList cats = CategoryCache.getInstance().getCategories(id);
        if (cats == null) {
            cats = CategoryManager.getCategories(id);
            CategoryCache.getInstance().storeCategoriesByCatId(cats);
        }
        return cats;
    }

    public CategoryList getCategories(String lang) {
        CategoryList cats = CategoryCache.getInstance().getCategories(lang);
        if (cats == null) {
            cats = CategoryManager.getCategories(lang);
            CategoryCache.getInstance().storeCategories(cats);
        }
        return cats;
    }

    public CategoryList getCategories(String lang, Long gameId) {
        CategoryList cats = CategoryCache.getInstance().getCategoriesLangGame(lang, gameId);
        if (cats == null) {
            for(GameCategory gameCategory: GameCategoryManager.getCategories(gameId).getGameCategoryList()) {
                CategoryList catList = CategoryManager.getCategories(lang, gameCategory.getCategoryId());
                if (cats == null){
                    cats = catList;
                } else {
                    cats.getCategoryList().addAll(catList.getCategoryList());
                }
            }
            CategoryCache.getInstance().storeCategoriesLangGame(cats, lang, gameId);
        }
        return cats;
    }

    public Category createCategory(Category inCategory) {
        return CategoryManager.addCategory(inCategory.getCategoryId(), inCategory.getTitle(), inCategory.getLang());
    }

    public GameCategory linkGameToCategory(Long gameId, Long categoryId) {
        return GameCategoryManager.linkGameCategory(gameId, categoryId);

    }


    public GameCategoryList getGames(Long categoryId) {
        return GameCategoryManager.getGames(categoryId);
    }


}
