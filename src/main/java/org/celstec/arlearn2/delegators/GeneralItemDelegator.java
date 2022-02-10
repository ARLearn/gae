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
package org.celstec.arlearn2.delegators;

import com.google.appengine.api.datastore.Key;
import org.celstec.arlearn2.beans.Bean;
import org.celstec.arlearn2.beans.dependencies.Dependency;
import org.celstec.arlearn2.beans.generalItem.GeneralItem;
import org.celstec.arlearn2.beans.generalItem.GeneralItemList;
import org.celstec.arlearn2.beans.run.Action;
import org.celstec.arlearn2.beans.run.ActionList;
import org.celstec.arlearn2.beans.run.Run;
import org.celstec.arlearn2.beans.run.User;
import org.celstec.arlearn2.cache.GeneralitemsCache;
import org.celstec.arlearn2.cache.VisibleGeneralItemsCache;
import org.celstec.arlearn2.jdo.manager.GeneralItemManager;
import org.celstec.arlearn2.jdo.manager.GeneralItemVisibilityManager;
import org.celstec.arlearn2.tasks.beans.GeneralItemSearchIndex;

import java.util.*;

public class GeneralItemDelegator extends DependencyDelegator {

    public GeneralItemDelegator() {
        super();
    }

    public GeneralItem createGeneralItem(GeneralItem gi) {
        GeneralitemsCache.getInstance().removeGeneralItemList(gi.getGameId());
        gi.setDeleted(false);
        Key key = GeneralItemManager.addGeneralItem(gi); //sets bean itemId as a side effect

        GeneralItemSearchIndex.scheduleGiTask(gi);
        if (gi.getDependsOn() != null) {
            GeneralItemVisibilityManager.delete(null, gi.getId(), null, null);
        }
        return GeneralItemManager.getGeneralItem(key);
    }

    public void deleteGeneralItems(long gameId) {
        GeneralItemManager.deleteGeneralItem(gameId);
        GeneralitemsCache.getInstance().removeGeneralItemList(gameId);
    }


    public GeneralItem deleteGeneralItemNew(long gameId, Long itemId, String myAccount) {

        GeneralItem gi = getGeneralItemForGame(gameId, itemId);

        if (myAccount.contains(":")) {
            GameAccessDelegator gad = new GameAccessDelegator();

            if (gi == null) {
                GeneralitemsCache.getInstance().removeGeneralItemList(gameId);
                return null;
            }
            if (gi != null && !gad.canEdit(myAccount, gi.getGameId())) {
                gi = new GeneralItem();
                gi.setError("You are not the owner of this game");
                return gi;
            }
        }
        GeneralItemManager.delete(itemId);
        GeneralitemsCache.getInstance().removeGeneralItemList(gameId);
        gi.setDeleted(true);
        return gi;
    }


    public GeneralItemList getGeneralItems(Long gameId) {
        GeneralItemList gil = GeneralitemsCache.getInstance().getGeneralitems(gameId, null, null);
        if (gil == null) {
            gil = new GeneralItemList();
            gil.setGeneralItems(GeneralItemManager.getGeneralitems(gameId));
            GeneralitemsCache.getInstance().putGeneralItemList(gil, gameId, null, null);
        }
        gil.setServerTime(System.currentTimeMillis());
        return gil;
    }

    public GeneralItemList getGeneralItems(Long gameId, String cursor) {
        return GeneralItemManager.getGeneralitems(gameId, cursor);
    }


    public GeneralItemList getGeneralItems(Long gameId, Long from, Long until) {
        GeneralItemList gil = new GeneralItemList();
        gil.setGeneralItems(GeneralItemManager.getGeneralitemsFromUntil(gameId, from, until));
        gil.setServerTime(System.currentTimeMillis());
        return gil;
    }

    public GeneralItemList getAllGeneralItems(Long runIdentifier) {
        RunDelegator qr = new RunDelegator();
        Run run = qr.getRun(runIdentifier);
        return getGeneralItems(run.getGameId());
    }

    public GeneralItemList getGeneralItemsRun(Long runIdentifier) {
        RunDelegator qr = new RunDelegator();
        Run run = qr.getRun(runIdentifier);
        if (run == null) {
            GeneralItemList il = new GeneralItemList();
            il.setError("run not found");
            il.setErrorCode(Bean.RUNNOTFOUND);
            return il;
        }
        GeneralItemList returnItemList = getGeneralItems(run.getGameId());

        List<GeneralItem> gl = returnItemList.getGeneralItems();
        long runDuration = (qr).getRunDuration(runIdentifier);
        return returnItemList;
    }

    public GeneralItem getGeneralItem(Long generalItemId) {

        return GeneralItemManager.getGeneralItem(generalItemId);
    }

    public GeneralItem getGeneralItemForGame(Long gameId, Long generalItemId) {

        GeneralItem returnItem = GeneralItemManager.getGeneralItem(generalItemId);
        if (returnItem == null) {
            return null;
        }
        if (returnItem.getGameId().equals(gameId)) {
            return returnItem;
        }

        return null;
    }


    public GeneralItemList getItems(Long runIdentifier, String userIdentifier, Integer status) {
        GeneralItemList gil = VisibleGeneralItemsCache.getInstance().getVisibleGeneralitems(runIdentifier, userIdentifier, status);
        if (gil == null) {
            gil = new GeneralItemList();
            RunDelegator qr = new RunDelegator();
            Run run = qr.getRun(runIdentifier);
            if (run == null) {
                GeneralItemList il = new GeneralItemList();
                il.setError("run not found");
                il.setErrorCode(Bean.RUNNOTFOUND);
                return il;
            }

            HashMap<Long, Long> visibleItemIds = GeneralItemVisibilityManager.getItems(runIdentifier, userIdentifier, status);
            GeneralItemList generalItemList = getGeneralItems(run.getGameId());

            for (Iterator<GeneralItem> iterator = generalItemList.getGeneralItems().iterator(); iterator.hasNext(); ) {
                GeneralItem item = iterator.next();
                if (item.getDeleted() == null || !item.getDeleted())
                    if (visibleItemIds.containsKey(item.getId())) {
                        if (status == GeneralItemVisibilityManager.VISIBLE_STATUS) {
                            item.setVisibleAt(visibleItemIds.get(item.getId()));
                        }
                        if (status == GeneralItemVisibilityManager.DISAPPEARED_STATUS) {
                            item.setDisappearAt(visibleItemIds.get(item.getId()));
                        }
                        gil.addGeneralItem(item);
                    }

            }
            VisibleGeneralItemsCache.getInstance().putVisibleGeneralItemList(gil, runIdentifier, userIdentifier, status);
        }
        return gil;
    }

    public void checkActionEffect(Action action, long runId, User u) {
        if (u == null) {
            return;
        }
        ActionDelegator qa = new ActionDelegator();
        ActionList al = qa.getActionList(runId);
        GeneralItemDelegator gid = new GeneralItemDelegator();
        GeneralItemList visableGIs = gid.getItems(runId, u.getFullId(), GeneralItemVisibilityManager.VISIBLE_STATUS);
        GeneralItemList disappearedGIs = gid.getItems(runId, u.getFullId(), GeneralItemVisibilityManager.DISAPPEARED_STATUS);

        // VisibleItemDelegator vid = new VisibleItemDelegator(this);

        // VisibleItemsList vil = vid.getVisibleItems(runId, null, u.getEmail(),
        // u.getTeamId());
        // vil.merge(vid.getVisibleItems(runId, null, null, u.getTeamId()));
        // vil.merge(vid.getVisibleItems(runId, null, u.getEmail(), null));

        List<GeneralItem> nonVisibleItems = getNonVisibleItems(getAllGeneralItems(runId), visableGIs);
        Iterator<GeneralItem> it = nonVisibleItems.iterator();
        while (it.hasNext()) {
            GeneralItem generalItem = (GeneralItem) it.next();
            long visAt;
            if (influencedByAppear(generalItem, action) && (visAt = isVisible(generalItem, al, u)) != -1 && itemMatchesUserRoles(generalItem, u.getRoles()) && (generalItem.getDeleted() == null || !generalItem.getDeleted())) {
//                GeneralItemModification gim = new GeneralItemModification();
//                gim.setModificationType(GeneralItemModification.VISIBLE);
//                gim.setRunId(runId);
//                gim.setGameId(generalItem.getGameId());
////				gim.setGeneralItem(generalItem);
//                gim.setItemId(generalItem.getId());
                generalItem.setVisibleAt(visAt);
                GeneralItemVisibilityManager.setItemVisible(generalItem.getId(), runId, u.getFullId(), GeneralItemVisibilityManager.VISIBLE_STATUS, visAt);

            }

        }
        List<GeneralItem> notDisappearedItems = getNotDisappearedItems(getAllGeneralItems(runId), disappearedGIs);
        it = notDisappearedItems.iterator();
        while (it.hasNext()) {
            GeneralItem generalItem = it.next();
            long disAt;
            if (influencedByDisappear(generalItem, action) && (disAt = hasDisappeared(generalItem, al, u)) != -1) {
//                GeneralItemModification gim = new GeneralItemModification();
//                gim.setModificationType(GeneralItemModification.DISAPPEARED);
//                gim.setRunId(runId);
//                gim.setGameId(generalItem.getGameId());
//                gim.setItemId(generalItem.getId());
////				gim.setGeneralItem(generalItem);
                generalItem.setDisappearAt(disAt);
                GeneralItemVisibilityManager.setItemVisible(generalItem.getId(), runId, u.getFullId(), GeneralItemVisibilityManager.DISAPPEARED_STATUS, disAt);


            }
        }
    }

    public static boolean itemMatchesUserRoles(GeneralItem generalItem, List<String> list) {
        if (generalItem.getRoles() == null)
            return true;
        if (generalItem.getRoles().isEmpty())
            return true;
        if (list == null)
            return false;
        for (String itemRole : generalItem.getRoles()) {
            if (userRoleListContainsRole(list, itemRole))
                return true;
        }
        return false;
    }

    private static boolean userRoleListContainsRole(List<String> list, String itemRole) {
        for (String userRole : list) {
            if (itemRole.equalsIgnoreCase(userRole))
                return true;
        }
        return false;
    }

    private boolean influencedByAppear(GeneralItem gi, Action action) {
        boolean result = false;
        if (gi.getDependsOn() != null)
            result = influencedBy(gi.getDependsOn(), action);
        return result;
    }

    private boolean influencedByDisappear(GeneralItem gi, Action action) {
        boolean result = false;
        if (gi.getDisappearOn() != null)
            result = influencedBy(gi.getDisappearOn(), action);
        return result;
    }

    public long isVisible(GeneralItem gi, ActionList al, User u) {
        if (gi.getDependsOn() == null)
            return 0L;
        UsersDelegator ud = new UsersDelegator();
        HashMap<String, User> uMap = ud.getUserMap(u.getRunId());
        Dependency dep = gi.getDependsOn();
        return checkActions(dep, al, u, uMap);

    }

    public long hasDisappeared(GeneralItem gi, ActionList al, User u) {
        Dependency dep = gi.getDisappearOn();
        if (dep == null)
            return 0L;
        UsersDelegator ud = new UsersDelegator();
        HashMap<String, User> uMap = ud.getUserMap(u.getRunId());
        return checkActions(dep, al, u, uMap);

    }

    public List<GeneralItem> getNonVisibleItems(GeneralItemList allItems, GeneralItemList filterAway) {
        ArrayList returnItems = new ArrayList();
        long currentTime = System.currentTimeMillis();
        HashSet<Long> idsToRemove = new HashSet<Long>();
        for (GeneralItem generalItem : filterAway.getGeneralItems()) {
            if (generalItem.getVisibleAt() == null) {
                idsToRemove.add(generalItem.getId());
            } else if (generalItem.getVisibleAt() < currentTime) {
                idsToRemove.add(generalItem.getId());
            }
        }

        for (GeneralItem item : allItems.getGeneralItems()) {
            if (!idsToRemove.contains(item.getId())) {
                returnItems.add(item);
            }
        }
        return returnItems;

    }

    public List<GeneralItem> getNotDisappearedItems(GeneralItemList allItems, GeneralItemList filterAway) {
        ArrayList returnItems = new ArrayList();
        long currentTime = System.currentTimeMillis();
        HashSet<Long> idsToRemove = new HashSet<Long>();
        for (GeneralItem generalItem : filterAway.getGeneralItems()) {
            if (generalItem.getDisappearAt() == null) {
                idsToRemove.add(generalItem.getId());
            } else if (generalItem.getDisappearAt() < currentTime) {
                idsToRemove.add(generalItem.getId());
            }
        }

        for (GeneralItem item : allItems.getGeneralItems()) {
            if (!idsToRemove.contains(item.getId())) {
                returnItems.add(item);
            }
        }
        return returnItems;

    }

}
