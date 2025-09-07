package com.devsecerp.backend.services.passwordreset;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devsecerp.backend.entity.passworeset.PasswordResetToken;
import com.devsecerp.backend.entity.usuario.Users;
import com.devsecerp.backend.entity.usuario.Users;
import com.devsecerp.backend.repository.passwordreset.PasswordResetTokenRepository;
import com.devsecerp.backend.repository.usuario.UserRepository;
import com.devsecerp.backend.services.mail.ResetMailSender;

@Service
public class PasswordResetService {

    private final UserRepository userRepository;
    private final PasswordResetTokenRepository tokenRepository;
    private final ResetMailSender resetMailSender;
    private final PasswordEncoder passwordEncoder;

    public PasswordResetService(UserRepository userRepository,
                                PasswordResetTokenRepository tokenRepository,
                                ResetMailSender resetMailSender,
                                PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
        this.resetMailSender = resetMailSender;
        this.passwordEncoder = passwordEncoder;
    }

    public void requestReset(String email) {
    Optional<Users> optionalUser = userRepository.findByEmail(email);

    if (optionalUser.isEmpty()) {
        System.out.println("Email não encontrado: " + email);
        return;
    }

    optionalUser.ifPresent(user -> {
        System.out.println("✅ Entrei no findByEmail para: " + user.getEmail());

        
        String token = UUID.randomUUID().toString();
        PasswordResetToken prt = new PasswordResetToken();
        prt.setEmail(user.getEmail());
        prt.setToken(token);
        prt.setExpires_at(LocalDateTime.now().plusMinutes(20));
        tokenRepository.save(prt);
        System.out.println("Token salvo no banco: " + token);

    
        try {
            resetMailSender.sendPasswordResetEmail(user.getEmail(), token);
            System.out.println("Email de redefinição enviado para: " + user.getEmail());
        } catch (Exception e) {
            System.out.println("Falha ao enviar email: " + e.getMessage());
            e.printStackTrace();
        }
    });
}


    public void resetPassword(String token, String newPassword) {
        System.out.println("================= aqui");
        PasswordResetToken prt = tokenRepository.findByToken(token)
                .orElseThrow(() -> new IllegalArgumentException("Token inválido"));

        if (prt.isUsed() || prt.getExpires_at().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Token expirado ou já utilizado");
        }

        Users user = userRepository.findByEmail(prt.getEmail())
                .orElseThrow(() -> new IllegalStateException("Usuário não encontrado"));

        user.setPassword(passwordEncoder.encode(newPassword));
        userRepository.save(user);

        prt.setUsed(true);
        tokenRepository.save(prt);
    }

    public boolean isTokenValid(String token) {
        System.out.println("Entrei aqui ===============================");
        Optional<PasswordResetToken> optionalToken = tokenRepository.findByToken(token);

        if (optionalToken.isEmpty()) {
            return false;
        }

        PasswordResetToken prt = optionalToken.get();
        return !prt.isUsed() && prt.getExpires_at().isAfter(LocalDateTime.now());
    }
}
