package org.celstec.arlearn2.oai;

import org.jdom2.Document;
import org.jdom2.Element;
import org.jdom2.output.Format;
import org.jdom2.output.XMLOutputter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * ****************************************************************************
 * Copyright (C) 2013 Open Universiteit Nederland
 * <p/>
 * This library is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * <p/>
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 * <p/>
 * You should have received a copy of the GNU Lesser General Public License
 * along with this library.  If not, see <http://www.gnu.org/licenses/>.
 * <p/>
 * Contributors: Stefaan Ternier
 * ****************************************************************************
 */


public class OaiServlet extends HttpServlet {

    protected void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        System.out.println("in oai servlet");
        OaiParameters op = new OaiParameters(req);
        String verb = req.getParameter("verb");
        Document doc = new Document();
        if (verb != null) {
            if (op.isIdentify()) {
                doc.setContent(new Identify(op).getXml());
            } else if (op.isListRecords()) {
                doc.setContent(new ListRecords(op).getXml());
            }
//            else if (op.isListMetadataFormats()) {
//                doc.setContent(new ListMetdataFormats(op).getXml());
//            }
//            System.out.println("verb is not null");
        }

        XMLOutputter outputter = new XMLOutputter(Format.getPrettyFormat());
        String xmlString = outputter.outputString(doc);
        outputter.output(doc, resp.getWriter());

//        resp.getWriter().write("todo hang on");

    }
}
