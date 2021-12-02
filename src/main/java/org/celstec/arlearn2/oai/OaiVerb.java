package org.celstec.arlearn2.oai;


//import org.celstec.arlearn2.jdo.classes.LomJDO;

import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.Namespace;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.TimeZone;

//import javax.jdo.Query;

//import nl.ounl.itunesu.server.db.Lom;

public abstract class OaiVerb {
	OaiParameters oaiParameters;

	public static Namespace oai = Namespace.getNamespace("oai", "http://www.openarchives.org/OAI/2.0/");
	public static Namespace  rfc1807 = Namespace.getNamespace("rfc1807", "http://info.internet.isi.edu:80/in-notes/rfc/files/rfc1807.txt");
	public static Namespace  oai_dc = Namespace.getNamespace("oai_dc", "http://www.openarchives.org/OAI/2.0/oai_dc/");

	public OaiVerb(OaiParameters oaiParameters) {
		this.oaiParameters = oaiParameters;
	}

	public abstract Element getXml();

	public  Element getParent() {
		Element root = new Element("OAI-PMH", oai);
		Date d = new Date(System.currentTimeMillis());
//		System.out.println("date is "+d + " - "+d.toGMTString());
//		SimpleDateFormat test = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
//		test.setTimeZone(TimeZone.getTimeZone("UTC"));
//
//		System.out.println("test is "+d + " - "+test.format(d));
		Element responseDate = new Element("responseDate", oai)
				.setText(OaiDateFormatter.getSingleTonInstance().format(d));
		Element request = new Element("request", oai);

		if (oaiParameters.getMetadataPrefix() != null) {
			request.setAttribute("metadataPrefix", oaiParameters.getMetadataPrefix());
		}
		if (oaiParameters.getIdentifier() != null) {
			request.setAttribute("identifier", oaiParameters.getIdentifier());
		}
		if (oaiParameters.getUntil() != null) {
			request.setAttribute("until", oaiParameters.getUntil());
		}
		if (oaiParameters.getFrom() != null) {
			request.setAttribute("from", oaiParameters.getFrom());
		}
		if (oaiParameters.getResumptionToken() != null) {
			request.setAttribute("resumptionToken", oaiParameters.getResumptionToken());
		}
		if (oaiParameters.getSet() != null) {
			request.setAttribute("set", oaiParameters.getSet());
		}
		request.setAttribute("verb", oaiParameters.getVerb());
		root.addContent(responseDate);
		root.addContent(request);
		return root;
	};



}
