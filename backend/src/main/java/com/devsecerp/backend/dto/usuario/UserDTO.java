package com.devsecerp.backend.dto.usuario;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter @Setter
public class UserDTO {
    private Integer id;
    private String username;
    private String firstName;
    private String lastName;
    private String departament;
    private String logadouro;
    private String referencia;
    private String function;
    private LocalDate lastLogin;
    private String city;
    private String cep;
    private String state;
    private String address;
    private String email;
}
