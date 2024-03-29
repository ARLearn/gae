package org.celstec.arlearn2.jdo.manager;

import com.google.appengine.api.datastore.*;
import org.celstec.arlearn2.beans.game.Game;
//import org.celstec.arlearn2.beans.game.GameAccessList;
import org.celstec.arlearn2.beans.game.GameAccessList;
import org.celstec.arlearn2.beans.run.RunAccess;
import org.celstec.arlearn2.beans.run.RunAccessList;
//import org.celstec.arlearn2.jdo.classes.GameAccessEntity;
import org.celstec.arlearn2.jdo.classes.GameAccessEntity;
import org.celstec.arlearn2.jdo.classes.RunAccessEntity;

import java.util.*;


public class RunAccessManager {
	private static final int ACCESS_IN_LIST = 5;
	private static DatastoreService datastore;
	static {
		datastore = DatastoreServiceFactory.getDatastoreService();
	}
	public static RunAccess addRunAccess(String localID, int accountType, long runId, long gameId, int accesRights) {
		RunAccessEntity runAccess = new RunAccessEntity();
		runAccess.setAccessRights(accesRights);
		runAccess.setLocalId(localID);
		runAccess.setAccountType(accountType);
		runAccess.setRunId(runId);
		runAccess.setUniqueId();
		runAccess.setLastModificationDateRun(System.currentTimeMillis());
		runAccess.setGameId(gameId);
		datastore.put(runAccess.toEntity());
		return runAccess.toBean();
	}

	//todo testnewimplementation
	public static void resetGameAccessLastModificationDate(long runId) {
		long lastModifiation = System.currentTimeMillis();

		ArrayList<Game> raList = new ArrayList<Game>();
		Query q = new Query(RunAccessEntity.KIND)
				.setFilter(new Query.FilterPredicate(RunAccessEntity.COL_RUNID, Query.FilterOperator.EQUAL, runId));
		PreparedQuery pq = datastore.prepare(q);
		for (Entity result : pq.asIterable()) {
			result.setProperty(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, lastModifiation);
			datastore.put(result);
		}
	}

	public static List<RunAccess> getRunList(int accountType, String localId, Long from, Long until) {
		ArrayList<RunAccess> accessDefinitions = new ArrayList<RunAccess>();
		Query.CompositeFilter filter;
		if (from == null) {
			filter = Query.CompositeFilterOperator.and(
					new Query.FilterPredicate(RunAccessEntity.COL_LOCALID, Query.FilterOperator.EQUAL, localId),
					new Query.FilterPredicate(RunAccessEntity.COL_ACCOUNTTYPE, Query.FilterOperator.EQUAL, accountType),
					new Query.FilterPredicate(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, Query.FilterOperator.LESS_THAN_OR_EQUAL, until)
			);
		} else if (until == null) {
			filter = Query.CompositeFilterOperator.and(
					new Query.FilterPredicate(RunAccessEntity.COL_LOCALID, Query.FilterOperator.EQUAL, localId),
					new Query.FilterPredicate(RunAccessEntity.COL_ACCOUNTTYPE, Query.FilterOperator.EQUAL, accountType),
					new Query.FilterPredicate(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, Query.FilterOperator.GREATER_THAN_OR_EQUAL, from)
			);
		} else {
			filter = Query.CompositeFilterOperator.and(
					new Query.FilterPredicate(RunAccessEntity.COL_LOCALID, Query.FilterOperator.EQUAL, localId),
					new Query.FilterPredicate(RunAccessEntity.COL_ACCOUNTTYPE, Query.FilterOperator.EQUAL, accountType),
					new Query.FilterPredicate(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, Query.FilterOperator.GREATER_THAN_OR_EQUAL, from),
					new Query.FilterPredicate(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, Query.FilterOperator.LESS_THAN_OR_EQUAL, until)
			);
		}

		Query q = new Query(RunAccessEntity.KIND)
				.setFilter(filter);
		PreparedQuery pq = datastore.prepare(q);
		for (Entity result : pq.asIterable()) {
			accessDefinitions.add(new RunAccessEntity(result).toBean());
		}
		return accessDefinitions;
	}

	public static List<RunAccess> getRunList(int accountType, String localId, Long gameId) {
		ArrayList<RunAccess> accessDefinitions = new ArrayList<RunAccess>();
		Query.CompositeFilter filter = Query.CompositeFilterOperator.and(
					new Query.FilterPredicate(RunAccessEntity.COL_LOCALID, Query.FilterOperator.EQUAL, localId),
					new Query.FilterPredicate(RunAccessEntity.COL_ACCOUNTTYPE, Query.FilterOperator.EQUAL, accountType),
					new Query.FilterPredicate(RunAccessEntity.COL_GAMEID, Query.FilterOperator.EQUAL, gameId)

			);
		Query q = new Query(RunAccessEntity.KIND)
				.setFilter(filter);
		PreparedQuery pq = datastore.prepare(q);
		for (Entity result : pq.asIterable()) {
			accessDefinitions.add(new RunAccessEntity(result).toBean());
		}
		return accessDefinitions;
	}


	public static List<RunAccess> getRunAccessList(long runId) {
		ArrayList<RunAccess> accessDefinitions = new ArrayList<RunAccess>();
		Query q = new Query(RunAccessEntity.KIND)
				.setFilter(new Query.FilterPredicate(RunAccessEntity.COL_RUNID, Query.FilterOperator.EQUAL, runId));
		PreparedQuery pq = datastore.prepare(q);
		for (Entity result : pq.asIterable()) {
			accessDefinitions.add(new RunAccessEntity(result).toBean());
		}
		return accessDefinitions;
	}


	//todo test new implementation
	public static RunAccessEntity getAccessById(String accessId) {
		Key key = KeyFactory.createKey(RunAccessEntity.KIND, accessId);
		try {
			return new RunAccessEntity(datastore.get(key));
		} catch (EntityNotFoundException e) {
			e.printStackTrace();
		}
		return null;

	}

	public static RunAccessList getRunListFrom(int accountType, String localId, String cursorString, long from) {
		FetchOptions fetchOptions = FetchOptions.Builder.withLimit(ACCESS_IN_LIST);
		if (cursorString != null) {
			fetchOptions.startCursor(Cursor.fromWebSafeString(cursorString));
		}
		RunAccessList returnList = new RunAccessList();
		returnList.setFrom(from);
		Query q = new Query(RunAccessEntity.KIND);
		Query.CompositeFilter accountFilter = Query.CompositeFilterOperator.and(
				new Query.FilterPredicate(RunAccessEntity.COL_LOCALID, Query.FilterOperator.EQUAL, localId),
				new Query.FilterPredicate(RunAccessEntity.COL_ACCOUNTTYPE, Query.FilterOperator.EQUAL, accountType),
				new Query.FilterPredicate(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, Query.FilterOperator.GREATER_THAN_OR_EQUAL, from)
		);
		q.setFilter(accountFilter);
		System.out.println("query is " +q);
		q.addSort(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, Query.SortDirection.DESCENDING);
		PreparedQuery pq = datastore.prepare(q);
		QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);
		for (Entity result : results) {
			RunAccessEntity object = new RunAccessEntity(result);
			returnList.addRunAccess(object.toBean());
		}
		if (results.size() == ACCESS_IN_LIST) {
			returnList.setResumptionToken(results.getCursor().toWebSafeString());
		}
		returnList.setServerTime(System.currentTimeMillis());
		return returnList;
	}

	public static RunAccessList getRunList(int accountType, String localId, String cursorString, long gameId) {
		FetchOptions fetchOptions = FetchOptions.Builder.withLimit(ACCESS_IN_LIST);
		if (cursorString != null) {
			fetchOptions.startCursor(Cursor.fromWebSafeString(cursorString));
		}
		RunAccessList returnList = new RunAccessList();
		Query q = new Query(RunAccessEntity.KIND);
		Query.CompositeFilter runAccessFilter = Query.CompositeFilterOperator.and(
				new Query.FilterPredicate(RunAccessEntity.COL_LOCALID, Query.FilterOperator.EQUAL, localId),
				new Query.FilterPredicate(RunAccessEntity.COL_ACCOUNTTYPE, Query.FilterOperator.EQUAL, accountType),
				new Query.FilterPredicate(RunAccessEntity.COL_GAMEID, Query.FilterOperator.EQUAL, gameId)
		);
		q.setFilter(runAccessFilter);
		q.addSort(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, Query.SortDirection.DESCENDING);
		PreparedQuery pq = datastore.prepare(q);
		QueryResultList<Entity> results =pq.asQueryResultList(fetchOptions);
		for (Entity result : results) {
			RunAccessEntity object = new RunAccessEntity(result);
			returnList.addRunAccess(object.toBean());
		}
		if (results.size() == ACCESS_IN_LIST) {
			returnList.setResumptionToken(results.getCursor().toWebSafeString());
		}
		returnList.setServerTime(System.currentTimeMillis());
		return returnList;
	}


	public static void removeRunAccess(String localID, int accountType, Long runIdentifier) {
		Key key = KeyFactory.createKey(RunAccessEntity.KIND, accountType+":"+localID+":"+runIdentifier);
		datastore.delete(key);
	}


	public static void deleteRun(Long runId) {
		Long lastModificationDate = System.currentTimeMillis();
		Query q = new Query(RunAccessEntity.KIND);//.addSort("name", SortDirection.ASCENDING);
		q.setFilter(new Query.FilterPredicate(RunAccessEntity.COL_RUNID, Query.FilterOperator.EQUAL, runId));
		PreparedQuery pq = datastore.prepare(q);
		for (Entity result : pq.asIterable()) {
			result.setProperty(RunAccessEntity.COL_LASTMODIFICATIONDATERUN, lastModificationDate);
			result.setProperty(RunAccessEntity.COL_ACCESSRIGHTS, RunAccessEntity.RUN_DELETED);
			datastore.put(result);
		}
	}

}
