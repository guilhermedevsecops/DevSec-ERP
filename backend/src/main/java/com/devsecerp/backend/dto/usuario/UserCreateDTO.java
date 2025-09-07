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
    private String firstname;
    private String lastname;
    private String function;
    private String departament;
    private String password;
    private String city;
    private String state;
    private String address;
    private String cep;
    private String logadouro;
    private String referencia;
    private String email;
}