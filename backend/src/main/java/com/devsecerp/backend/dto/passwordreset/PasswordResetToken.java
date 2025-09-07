package com.devsecerp.backend.dto.passwordreset;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record PasswordResetToken(
        
        @NotBlank
        @Email
        String email
) {}
