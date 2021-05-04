package org.celstec.arlearn2.beans.generalItem;

import org.celstec.arlearn2.beans.Bean;
import org.celstec.arlearn2.beans.deserializer.json.ListDeserializer;
import org.celstec.arlearn2.beans.serializer.json.ListSerializer;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

import java.util.List;
import java.util.Vector;

public class CombinationLock extends GeneralItem {

    public static String answersType = "org.celstec.arlearn2.beans.generalItem.MultipleChoiceAnswerItem";
    private List<MultipleChoiceAnswerItem> answers = new Vector();
    private Long combinationLength;
    private String text;
    private Boolean showFeedback;


    public List<MultipleChoiceAnswerItem> getAnswers() {
        return answers;
    }
    public void setAnswers(List<MultipleChoiceAnswerItem> answers) {
        this.answers = answers;
    }
    public String getText() {
        return text;
    }
    public void setText(String text) {
        this.text = text;
    }

    public Long getCombinationLength() {
        return combinationLength;
    }

    public void setCombinationLength(Long combinationLength) {
        this.combinationLength = combinationLength;
    }

    public Boolean getShowFeedback() {
        return showFeedback;
    }
    public void setShowFeedback(Boolean showFeedback) {
        this.showFeedback = showFeedback;
    }

    public static GeneralItemSerializer serializer = new GeneralItemSerializer(){

        @Override
        public JSONObject toJSON(Object bean) {
            CombinationLock mct = (CombinationLock) bean;
            JSONObject returnObject = super.toJSON(bean);
            try {
                if (mct.getText() != null) returnObject.put("text", mct.getText());
                if (mct.getShowFeedback()!= null) returnObject.put("showFeedback", mct.getShowFeedback());
                if (mct.getCombinationLength()!= null) returnObject.put("combinationLength", mct.getCombinationLength());
                if (mct.getAnswers() != null) returnObject.put("answers", ListSerializer.toJSON(mct.getAnswers()));
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return returnObject;
        }

    };


    public static GeneralItemDeserializer deserializer = new GeneralItemDeserializer(){

        @Override
        public CombinationLock toBean(JSONObject object) {
            CombinationLock mct = new CombinationLock();
            try {
                initBean(object, mct);
            } catch (JSONException e) {
                e.printStackTrace();
            }
            return mct;
        }

        public void initBean(JSONObject object, Bean genericBean) throws JSONException {
            super.initBean(object, genericBean);
            CombinationLock mctItem = (CombinationLock) genericBean;
            if (object.has("text")) mctItem.setText(object.getString("text"));
            if (object.has("combinationLength")) mctItem.setCombinationLength(object.getLong("combinationLength"));
            if (object.has("showFeedback")) mctItem.setShowFeedback(object.getBoolean("showFeedback"));
            if (object.has("answers")) mctItem.setAnswers(ListDeserializer.toBean(object.getJSONArray("answers"), MultipleChoiceAnswerItem.class));
        };
    };
}
