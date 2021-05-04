package org.celstec.arlearn2.servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class GameServlet extends HttpServlet {


    public void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {

        System.out.println("path "+ req.getPathInfo());
        System.out.println("path "+ req.getContextPath());
        System.out.println("puri "+ req.getRequestURI());
        System.out.println("pque "+ req.getQueryString());
        System.out.println("path "+ req.getServletPath());
        resp.sendRedirect(req.getContextPath() +"/#/landing" +req.getRequestURI());

    }
}
