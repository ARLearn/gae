package org.celstec.arlearn2.oai;


import org.celstec.arlearn2.beans.game.GameTheme;
import org.celstec.arlearn2.jdo.classes.GameEntity;
import org.celstec.arlearn2.jdo.manager.GameManager;
import org.celstec.arlearn2.jdo.manager.GameThemeManager;
import org.jdom2.Element;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

public class ListRecords extends OaiVerb {

    public ListRecords(OaiParameters oaiParameters) {
        super(oaiParameters);
    }

    public Element getXml() {

        Element root = getParent();
        Element pl = new Element("ListRecords", oai);
        root.addContent(pl);

            GameEntity mission = null;
            System.out.println("date is"+ oaiParameters.getFrom());
            List<GameEntity> gameEntities = null;
            if (oaiParameters.getFrom() != null) {
                try {
                    Date fromDate = OaiDateFormatter.getSingleTonInstance().parse(oaiParameters.getFrom());
                    gameEntities = GameManager.queryAll(); //oaiParameters.getResumptionToken(), fromDate
                } catch (ParseException e) {
                    e.printStackTrace();
                }
            }
            if (gameEntities == null) {
                gameEntities = GameManager.queryAll(); //GetMission.getInstance().queryAll(oaiParameters.getResumptionToken(), null);
            }

//            List<Mission> missions = GetMission.getInstance().queryAll(oaiParameters.getResumptionToken(), null);
            for (int i = 0; i < gameEntities.size(); i++) {
                mission = gameEntities.get(i);
                Element record = new Element("record", oai);
                Element header = new Element("header", oai);
                header.addContent(new Element("identifier", oai).setText(""+mission.getGameId()));
                if (mission.getLastModificationDate() != null) {
                    header.addContent(new Element("datestamp", oai)
                            .setText(
                                    OaiDateFormatter.getSingleTonInstance().format(new Date(mission.getLastModificationDate()))
                            ));
                }

                Element metadata = new Element("metadata", oai);
                metadata.addContent(getOaiDC(mission));

                record.addContent(header);
                record.addContent(metadata);
                pl.addContent(record);
            }
            if (mission != null) {
//                Element resumptionToken = new Element("resumptionToken", oai).setText(mission.objectID);
//                pl.addContent(resumptionToken);
            }

        return root;
    }

    private Element getOaiDC(GameEntity m) {
        Element record = new Element("dc", oai_dc);
        record.addContent(new Element("identifier", oai_dc).setText(m.getGameId()+""));
        record.addContent(new Element("title", oai_dc).setText(m.getTitle()));

        record.addContent(new Element("url").setText(System.getenv("URL")+"#/portal/root/library/game/"+m.getGameId()));
        GameTheme theme = GameThemeManager.getGameTheme(m.getTheme());



        record.addContent(new Element("primaryColor").setText(theme.getPrimaryColor()));
        record.addContent(new Element("backgroundImage")
                .setText("https://storage.cloud.google.com/"+System.getenv("ENDPOINTS_SERVICE_NAME")+theme.getBackgroundPath()));
        return record;
    }

    private Element getRfc1807(GameEntity m) {
        Element record = new Element("rfc1807", rfc1807);
        record.addContent(new Element("bib-version", rfc1807).setText("v2"));
        record.addContent(new Element("id", rfc1807).setText(m.getGameId()+""));
        record.addContent(new Element("title", rfc1807).setText(m.getTitle()));
        return record;
    }

}
