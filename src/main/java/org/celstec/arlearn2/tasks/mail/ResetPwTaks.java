package org.celstec.arlearn2.tasks.mail;

import com.google.appengine.api.taskqueue.DeferredTask;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions;
import com.sendgrid.*;

import java.io.IOException;

public class ResetPwTaks implements DeferredTask {

    String toMail;
    String resetLink;
    String displayName;


    public ResetPwTaks(String toMail, String resetLink, String displayName) {
        this.toMail = toMail;
        this.resetLink = resetLink;
        this.displayName = displayName;
    }

    @Override
    public void run() {
        Mail mail = new Mail();

        Email fromEmail = new Email();
        fromEmail.setName(System.getenv("FROM_NAME"));
        fromEmail.setEmail(System.getenv("FROM_EMAIL"));


        Email replyEmail = new Email();
        replyEmail.setName(System.getenv("FROM_NAME"));
        replyEmail.setEmail(System.getenv("REPLY_EMAIL"));

        mail.setFrom(fromEmail);
        mail.setReplyTo(replyEmail);
        mail.setTemplateId(System.getenv("TEMPLATE_RESET_PW"));

        Personalization personalization = new Personalization();
        Email to = new Email();
        to.setName(displayName);
        to.setEmail(toMail);
        personalization.addDynamicTemplateData("resetPasswordUrl", resetLink);

        personalization.addTo(to);
        personalization.setSubject("test message");

        mail.addPersonalization(personalization);
        send(mail);
    }

    private static void send(final Mail mail) {
        try {
            final SendGrid sg = new SendGrid(System.getenv("SENDGRID_API_KEY"));
            sg.addRequestHeader("X-Mock", "true");

            final Request request = new Request();
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");

            request.setBody(mail.build());


            final Response response = sg.api(request);
            System.out.println(response.getStatusCode());
            System.out.println(response.getBody());
            System.out.println(response.getHeaders());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public static void setup(String toMail, String resetLink, String displayName) {
        Queue queue = QueueFactory.getDefaultQueue();
        queue.add(
                TaskOptions.Builder
                        .withPayload(
                                new ResetPwTaks(toMail, resetLink, displayName)
                        )
        );
    }
}
