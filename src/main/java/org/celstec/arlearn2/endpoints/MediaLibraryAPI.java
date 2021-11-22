package org.celstec.arlearn2.endpoints;

import com.google.api.server.spi.auth.common.User;
import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.config.Nullable;
import com.google.api.server.spi.response.CollectionResponse;
import com.google.appengine.api.search.Results;
import com.google.appengine.api.search.ScoredDocument;
import org.celstec.arlearn2.beans.account.Account;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.beans.game.GamesList;
import org.celstec.arlearn2.beans.medialibrary.MediaLibraryFile;
import org.celstec.arlearn2.endpoints.impl.account.CreateAccount;
import org.celstec.arlearn2.endpoints.impl.portaluser.FirebaseAuthPersistence;
import org.celstec.arlearn2.endpoints.impl.storage.DeleteStorage;
import org.celstec.arlearn2.endpoints.util.EnhancedUser;
import org.celstec.arlearn2.jdo.manager.MediaLibraryManager;
import org.celstec.arlearn2.tasks.beans.GameSearchIndex;

import java.util.ArrayList;
import java.util.List;

@Api(name = "games")
public class MediaLibraryAPI extends GenericApi {

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "delete_featuredgame_library_file",
            path = "/deleteImage/featuredGames/backgrounds/{gameId}"
    )
    public void deleteFeaturedGameFile(final User user, @Named("gameId") String gameId) throws Exception{
        adminCheck(user);
        DeleteStorage.getInstance().deleteFilePath("featuredGames/backgrounds/"+gameId);
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "delete_featuredgame_screenshot",
            path = "/deleteImage/featuredGames/screenshots/{gameId}/{shot}"
    )
    public void deleteFeaturedGameScreenshot(final User user,
                                             @Named("gameId") String gameId,
                                             @Named("shot") String shot) throws Exception{
        adminCheck(user);
        DeleteStorage.getInstance().deleteFilePath("featuredGames/screenshots/"+gameId+"/"+shot);
    }




    //todo check if media library is still used

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.POST,
            name = "create_media_library_file",
            path = "/media"
    )
    public MediaLibraryFile createMediaLibraryFile(final User user, MediaLibraryFile mediaLibraryFile) throws Exception{
        adminCheck(user);
        mediaLibraryFile.setLastModificationDate(System.currentTimeMillis());
        mediaLibraryFile = MediaLibraryManager.addMediaLibraryFile(mediaLibraryFile);
        new MediaSearchIndexAdd(mediaLibraryFile).scheduleTask();
        return mediaLibraryFile;
    }

    @SuppressWarnings("ResourceParameter")
    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.DELETE,
            name = "delete_media_library_file",
            path = "/media/{assetId}"
    )
    public void deleteMediaLibraryFile(final User user, @Named("assetId") Long assetId) throws Exception{
        adminCheck(user);

        MediaLibraryManager.delete(assetId);
        ArrayList<String> docIds = new ArrayList<String>();
        docIds.add(MediaSearchIndexAdd.ID_PREFIX+assetId);
        MediaSearchIndexAdd.getIndex().delete(docIds);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "listFiles",
            path = "/media/list"
    )
    public CollectionResponse<MediaLibraryFile> ListFiles(EnhancedUser user,
                                                          @Named("path") String path,
                                                          @Named("cursor") @Nullable  String cursor) {
        return MediaLibraryManager.getFilesByPath(path, cursor);
    }

    @ApiMethod(
            httpMethod = ApiMethod.HttpMethod.GET,
            name = "search_media",
            path = "/media/search/{query}"
    )
    public CollectionResponse<MediaLibraryFile> searchMedia(@Named("query") String query) {
        List<MediaLibraryFile> mediaFiles = new ArrayList<MediaLibraryFile>(50);
        Results<ScoredDocument> results = MediaSearchIndexAdd.getIndex().search(query);
        for (ScoredDocument document : results) {
            MediaLibraryFile mediaLibraryFile = new MediaLibraryFile();
            mediaLibraryFile.setPath("/abc/def");
            mediaLibraryFile.setAssetId(Long.parseLong(document.getId().substring(9)));
            mediaLibraryFile.setName(document.getFields("name").iterator().next().getText());
            mediaLibraryFile.setPath(document.getFields("path").iterator().next().getText());
            mediaLibraryFile.setLastModificationDate(document.getFields("lastModificationDate").iterator().next().getDate().getTime());
            mediaLibraryFile.setTags(document.getFields("tags").iterator().next().getText());
            mediaFiles.add(mediaLibraryFile);
        }
        return CollectionResponse.<MediaLibraryFile>builder().setItems(mediaFiles).build();
    }
}
