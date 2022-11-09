package vn.codegym.backend.util;

import javax.mail.MessagingException;

public interface EmailService {
    boolean sendEmail(String receiptEmail, String link);
}
