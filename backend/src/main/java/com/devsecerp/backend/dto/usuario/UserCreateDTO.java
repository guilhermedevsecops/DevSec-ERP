package com.devsecerp.backend.dto.usuario;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserCreateDTO {
    private String username;
    private String name;
    private String lastName;
    private String function;
    private String password;
    private String city;
    private String state;
    private String address;
    private String email;
}