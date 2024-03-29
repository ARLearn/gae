package org.celstec.arlearn2.delegators;

import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.game.GamesList;
import org.celstec.arlearn2.jdo.manager.FeaturedGameManager;

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
public class FeaturedGameDelegator  {

    public FeaturedGameDelegator() {
    }

    public GamesList getFeaturedGames(String lang) {
        return FeaturedGameManager.getFeaturedGames(lang);
    }

    public GamesList getFeaturedGame(Long gameId) {
        return FeaturedGameManager.getFeaturedGame(gameId);
    }

    public Game createFeaturedGame(String lang, Long gameId, Integer rank) {
        return FeaturedGameManager.createFeaturedGame(gameId, rank, lang);
    }

    public void deleteFeaturedGame(String lang, Long gameId) {
        FeaturedGameManager.deleteFeaturedGame(gameId, lang);
    }

}
