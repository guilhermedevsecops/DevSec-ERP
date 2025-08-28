package com.devsecerp.backend.exceptions.usuario;

public class BadRequestException extends RuntimeException {
    public BadRequestException(String message) {
        super(message);
    }
}
