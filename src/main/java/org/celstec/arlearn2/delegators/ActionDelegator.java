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

import org.celstec.arlearn2.beans.dependencies.ActionDependency;
import org.celstec.arlearn2.beans.run.*;
import org.celstec.arlearn2.jdo.manager.ActionManager;
import org.celstec.arlearn2.tasks.beans.UpdateGeneralItems;
import org.celstec.arlearn2.util.ActionCache;

import java.util.List;
import java.util.logging.Logger;

public class ActionDelegator  {

    private static final Logger logger = Logger.getLogger(ActionDelegator.class.getName());

    public ActionDelegator() {}

    public ActionList getActionList(Long runId) {
        ActionList al = ActionCache.getInstance().getRunActions(runId);
        if (al == null) {
            al = ActionManager.runActions(runId);
            ActionCache.getInstance().putRunActions(runId, al);
        }
        return al;
    }

    private static final Logger log = Logger.getLogger(ActionDelegator.class.getName());

    public Action createAction(Action action, String userFullId) {

        if (action.getRunId() == null) {
            action.setError("No run identifier specified");
            return action;
        }

        RunDelegator rd = new RunDelegator();
        Run r = rd.getRun(action.getRunId());
        UsersDelegator qu = new UsersDelegator();

        User u = qu.getUserByEmail(action.getRunId(), userFullId);
        if (u == null) {
            action.setError("User not found");
            log.severe("user not found");
            return action;
        }

        RunDelegator qr = new RunDelegator();
        Run run = qr.getRun(action.getRunId());
        ActionRelevancyPredictor arp = ActionRelevancyPredictor.getActionRelevancyPredicator(run.getGameId());

        //TODO migrate these to list of relevant dependecies (getActionDependencies[])
        boolean relevancy = arp.isRelevant(action);
        Long actionId = ActionManager.addAction(action.getRunId(), action.getAction(), action.getUserId(), action.getGeneralItemId(), action.getGeneralItemType(), action.getTimestamp());
        action.setIdentifier(actionId);
        ActionCache.getInstance().removeRunAction(action.getRunId());


        if (relevancy) {
            (new UpdateGeneralItems( action.getRunId(), action.getAction(), userFullId, action.getGeneralItemId(), action.getGeneralItemType())).scheduleTask();
        }
        return action;
    }

    private boolean applyRelevancyFilter(Action action, List<ActionDependency> dependencies) {
        for (ActionDependency dep : dependencies) {
            boolean soFar = true;
            if (dep.getAction() != null && !dep.getAction().equals(action.getAction())) soFar = false;
            if (dep.getGeneralItemId() != null && !dep.getGeneralItemId().equals(action.getGeneralItemId()))
                soFar = false;
            if (dep.getGeneralItemType() != null && !dep.getGeneralItemType().equals(action.getGeneralItemType()))
                soFar = false;
            if (soFar) return true;
        }
        return false;
    }


    public void deleteActions(Long runId) {
        ActionManager.deleteActions(runId);
        ActionCache.getInstance().removeRunAction(runId);
    }

    public void deleteActions(Long runId, String email) {
        ActionManager.deleteActions(runId, email);
        ActionCache.getInstance().removeRunAction(runId);
    }

    public ActionList getActionsFromUntil(Long runIdentifier, String user, Long from, Long until, String cursor) {
        return ActionManager.getActions(runIdentifier, user, from, until, cursor);
    }
}
