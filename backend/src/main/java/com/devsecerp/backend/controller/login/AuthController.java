package com.devsecerp.backend.controller.login;

import com.devsecerp.backend.dto.login.LoginRequestDTO;
import com.devsecerp.backend.dto.login.LoginResponseDTO;
import com.devsecerp.backend.dto.passwordreset.ResetPasswordRequest;
import com.devsecerp.backend.dto.resetPassword.ForgotPasswordRequest;
import com.devsecerp.backend.services.login.AuthService;
import com.devsecerp.backend.services.passwordreset.PasswordResetService;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;
    @Autowired
    private PasswordResetService resetService;

    @PostMapping("/forgot-password")
public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest request) {
    try {
        System.out.println("Cheguei aqui");
        resetService.requestReset(request.getEmail());
        return ResponseEntity.ok("Você receberá instruções para redefinição de sua senha");
    } catch (Exception e) {
        e.printStackTrace(); // imprime o erro real no console
        return ResponseEntity.status(500).body(
            Map.of(
                "success", false,
                "message", e.getMessage(),
                "data", null
            )
        );
    }
}

@PostMapping("/reset-password")
public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordRequest request) {
    System.out.println("AQUI ESTOU =======================================");
    boolean valid = resetService.isTokenValid(request.getToken()); 
    if (!valid) {
        return ResponseEntity.badRequest().body("Token inválido ou expirado");
    }

    resetService.resetPassword(request.getToken(), request.getPassword());
    return ResponseEntity.ok("Senha alterada com sucesso!");
}

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO request) {
        try {
            LoginResponseDTO response = authService.login(request);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(e.getMessage());
        }
    }
}
