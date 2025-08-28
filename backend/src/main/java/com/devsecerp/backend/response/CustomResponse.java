package com.devsecerp.backend.response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CustomResponse<T> { 
    private boolean success;
    private String message;
    private T data;

    public CustomResponse(boolean success, String message, T data) {
        this.success = success;
        this.message = message;
        this.data = data;
    }
}