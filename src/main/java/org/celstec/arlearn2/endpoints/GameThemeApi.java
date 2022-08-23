package org.celstec.arlearn2.endpoints;

import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.config.Nullable;
import com.google.api.server.spi.response.CollectionResponse;
import com.google.api.server.spi.response.ForbiddenException;
import org.celstec.arlearn2.beans.game.GameTheme;
import org.celstec.arlearn2.beans.game.GameThemesList;
import org.celstec.arlearn2.endpoints.impl.storage.DeleteStorage;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.GameThemeManager;

@Api(name = "gameThemes")
public class GameThemeApi extends GenericApi {

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "retrieveGameTheme",
            path = "/game/theme/{identifier}"
    )
    public GameTheme getGameTheme(@Named("identifier") Long identifier) {
        return GameThemeManager.getGameTheme(identifier);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "deleteGameTheme",
            path = "/game/theme/{identifier}"
    )
    public GameTheme deleteGameTheme(final User u, @Named("identifier") Long identifier) throws ForbiddenException {
        GameTheme gameTheme = GameThemeManager.getGameTheme(identifier);
        if (gameTheme.getFullAccount().equals(((EnhancedUser) u).createFullId())) {
            GameThemeManager.deleteGameTheme(identifier);
            DeleteStorage.getInstance().deleteFolder("customthemes/"+u.getId()+"/"+gameTheme.getThemeId());
            return gameTheme;
        }
        throw new ForbiddenException("You are not the owner of this theme.");
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "allGameThemesSince",
            path = "/game/theme/list/{since}"
    )
    public GameThemesList getGameThemesSince(
            @Named("since") long from,
            @Nullable @Named("resumptionToken") String cursor
    ) {
        return GameThemeManager.listGlobalWithCursor(cursor, from);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "allGameThemesUpdateOnce",
            path = "/game/theme/updateOnce"
    )
    public void updateOnce() {
        GameThemeManager.updateOnce();
    }


    //todo check if still used in app
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "allGameThemes",
            path = "/game/theme/list/global"
    )
    public CollectionResponse<GameTheme> getGameThemes() {
        return CollectionResponse.<GameTheme>builder().setItems(GameThemeManager.listGlobal()).build();
    }

    //todo check if still used in app
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "myGameThemes",
            path = "/game/theme/list/custom"
    )
    public CollectionResponse<GameTheme> getMyGameThemes(final User u) {
        return CollectionResponse.<GameTheme>builder().setItems(GameThemeManager.myThemes(((EnhancedUser) u).createFullId())).build();
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "allMyGameThemesSince",
            path = "/game/theme/listMy/{since}"
    )
    public GameThemesList getMyGameThemesSince(
            final User u,
            @Named("since") long from,
            @Nullable @Named("resumptionToken") String cursor
    ) {
        return GameThemeManager.listMineWithCursor(((EnhancedUser) u).createFullId(), cursor, from);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            name = "create_theme",
            path = "/game/theme/create"
    )
    public GameTheme createTheme(final User u, GameTheme newTheme) {//Game newGame
        EnhancedUser user = (EnhancedUser) u;
        if (!user.isAdmin()) {
            newTheme.setGlobal(false);
        }
        if (!newTheme.isGlobal()) {
            newTheme.setFullAccount(((EnhancedUser) u).createFullId());
            newTheme.setFirebaseAccount(u.getId());
        }
        return GameThemeManager.create(newTheme);
    }

}
