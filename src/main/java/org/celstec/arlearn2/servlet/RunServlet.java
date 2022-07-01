package org.celstec.arlearn2.servlet;

import org.celstec.arlearn2.beans.run.Run;
import org.celstec.arlearn2.delegators.RunDelegator;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class RunServlet extends HttpServlet {


    public void doGet(HttpServletRequest req, HttpServletResponse resp)
            throws IOException {


        String requestUri = req.getRequestURI();
        long runId = Long.parseLong(requestUri.substring(5));
        Run r = new RunDelegator().getRun(runId, false);
        if (r != null) {
            String path = "/#/game/" + r.getGameId() + "/detail/runs/" + r.getRunId() + "/players";
            resp.sendRedirect(req.getContextPath() + path);
        }
        resp.sendRedirect(req.getContextPath() + "/#/landing" + req.getRequestURI());

    }
}
