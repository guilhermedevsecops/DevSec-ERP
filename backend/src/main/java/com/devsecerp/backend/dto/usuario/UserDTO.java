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
    private String name;
    private String lastName;
    private String function;
    private LocalDate lastLogin;
    private String city;
    private String state;
    private String address;
    private String email;
}
