package com.devsecerp.backend.entity.usuario;

import java.time.LocalDate;

import org.springframework.stereotype.Repository;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String username;
    private String name;
    @Column(name = "last_name")
    private String lastName;
    private String function;
    private String password;
    @Column(name = "last_login")
    private LocalDate lastLogin;
    private String city;
    private String state;
    private String address;
    private String email;
}
