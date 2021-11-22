package org.celstec.arlearn2.endpoints.impl.account;

import com.google.appengine.api.search.*;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import org.celstec.arlearn2.beans.game.Game;
import org.celstec.arlearn2.tasks.beans.GenericBean;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;

public class AccountSearchIndex extends GenericBean {

    String fullId;
    String displayName;
    String labels;
    String email;
    Long expirationDate;
    boolean suspended;
    boolean delete = false;

    public AccountSearchIndex() {
        super();
    }

    public AccountSearchIndex(String fullId, String displayName, String labels, String email, Long expirationDate, boolean suspended) {
        super();
        this.displayName = displayName;
        this.fullId = fullId;
        this.labels = labels;
        this.email = email;
        this.delete = false;
        this.expirationDate = expirationDate;
        this.suspended = suspended;
        System.out.println("setting suspended to "+ this.suspended);
    }

    public AccountSearchIndex(String fullId, String displayName, String labels, String email, Long expirationDate) {
        super();
        this.displayName = displayName;
        this.fullId = fullId;
        this.labels = labels;
        this.email = email;
        this.delete = false;
        this.expirationDate = expirationDate;
        this.suspended = false;
    }

    public AccountSearchIndex(String fullId, String displayName, String labels, boolean delete) {
        super();
        this.displayName = displayName;
        this.fullId = fullId;
        this.labels = labels;
        this.delete = delete;
        this.suspended = false;
    }

    public String getFullId() {
        return fullId;
    }

    public void setFullId(String fullId) {
        this.fullId = fullId;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getLabels() {
        return labels;
    }

    public void setLabels(String labels) {
        this.labels = labels;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public boolean isDelete() {
        return delete;
    }

    public boolean getDelete() {
        return delete;
    }

    public void setDelete(boolean delete) {
        this.delete = delete;
    }

    public Long getExpirationDate() {
        return expirationDate;
    }

    public void setExpirationDate(Long expirationDate) {
        this.expirationDate = expirationDate;
    }

    public boolean getSuspended() {
        return suspended;
    }

    public boolean isSuspended() {
        return suspended;
    }

    public void setSuspended(boolean suspended) {
        this.suspended = suspended;
    }

    @Override
    public void run() {
        try {
            if (delete) {
                removeFromIndex();
            } else {
                addToIndex();
            }



        } catch (PutException e) {
            if (StatusCode.TRANSIENT_ERROR.equals(e.getOperationResult().getCode())) {
                // retry storing the document
                throw e;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void scheduleTask() {
        Queue queue = QueueFactory.getDefaultQueue();
        TaskOptions to  = TaskOptions.Builder.withUrl("/asyncTask")
                .param("type", this.getClass().getName());
        queue.add(setParameters(to));
    }


    public void resetIndex() {
        try {
            // looping because getRange by default returns up to 100 documents at a time
            while (true) {
                List<String> docIds = new ArrayList<>();
                // Return a set of doc_ids.
                GetRequest request = GetRequest.newBuilder().setReturningIdsOnly(true).build();
                GetResponse<Document> response = getIndex().getRange(request);
                if (response.getResults().isEmpty()) {
                    break;
                }
                for (Document doc : response) {
                    docIds.add(doc.getId());
                }
                getIndex().delete(docIds);
            }
        } catch (RuntimeException e) {
            e.printStackTrace();
        }
    }


    private void removeFromIndex() {
        ArrayList<String> docIds = new ArrayList<String>();
        docIds.add(fullId);
        getIndex().delete(docIds);
    }

    public void addToIndex() throws PutException {
        System.out.println("adding to index: "+suspended);
        Document.Builder builder = Document.newBuilder()
                .setId(fullId)
                .addField(Field.newBuilder().setName("displayName").setText(""+getDisplayName()))
                .addField(Field.newBuilder().setName("email").setText(""+getEmail()))
                .addField(Field.newBuilder().setName("labels").setText(getLabels()))
                .addField(Field.newBuilder().setName("suspended").setText(""+isSuspended()))
                .addField(Field.newBuilder().setName("expirationDate").setText(""+getExpirationDate()));

        Document doc = builder.build();
        System.out.println(doc);
        getIndex().put(doc);
    }

    public Index getIndex() {
        IndexSpec indexSpec = IndexSpec.newBuilder().setName("account_index").build();
        return SearchServiceFactory.getSearchService().getIndex(indexSpec);
    }
}
