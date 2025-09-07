package com.devsecerp.backend.services.mail;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class ResetMailSender {

    private final JavaMailSender mailSender;

    public ResetMailSender(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    /**
     * Envia um e-mail de redefinição de senha.
     * @param to Destinatário do e-mail
     * @param token Token de redefinição de senha
     * @return true se enviado com sucesso, false caso ocorra erro
     */
    public boolean sendPasswordResetEmail(String to, String token) {
        System.out.println("Entrei no envio de email");
        String resetUrl = "http://localhost:3000/reset-password/" + token;

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(to);
        message.setSubject("Recuperação de Senha - DevSec ERP");
        message.setText(
            "Olá,\n\n" +
            "Você solicitou a redefinição de senha. Clique no link abaixo para criar uma nova senha (expira em 20 minutos):\n\n" +
            resetUrl +
            "\n\nSe você não solicitou, ignore este e-mail.\n\nAtenciosamente,\nDevSec ERP"
        );

        try {
            mailSender.send(message);
            System.out.println("✅ E-mail enviado com sucesso para: " + to);
            return true;
        } catch (Exception e) {
            System.err.println("❌ Erro ao enviar e-mail para " + to + ": " + e.getMessage());
            e.printStackTrace();
            return false;
        }
    }
}
