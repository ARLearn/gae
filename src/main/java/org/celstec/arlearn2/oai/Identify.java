package org.celstec.arlearn2.oai;

import org.jdom2.Element;

public class Identify extends OaiVerb {

    public Identify(OaiParameters oaiParameters) {
        super(oaiParameters);
    }

    @Override
    public Element getXml() {
        Element root = getParent();
        Element pl = new Element("Identify", oai);
        root.addContent(pl);
        pl.addContent(new Element("repositoryName", oai).setText("Bibendo"));
        pl.addContent(new Element("baseURL", oai).setText(System.getenv("URL"+"/oai")));
        pl.addContent(new Element("protocolVersion", oai).setText("2.0"));
        pl.addContent(new Element("granularity", oai).setText("YYYY-MM-DDThh:mm:ssZ"));
        return root;
    }
}
