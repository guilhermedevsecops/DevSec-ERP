package com.devsecerp.backend.exceptions.usuario;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String message) {
        super(message);
    }
}