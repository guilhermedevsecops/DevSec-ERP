package com.devsecerp.backend.dto.usuario;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.devsecerp.backend.entity.usuario.Users;

public class UserMapper {

    // Cria a entidade User a partir do DTO de criação
    public static Users fromCreateDTO(UserCreateDTO dto, PasswordEncoder encoder) {
        Users user = new Users();
        user.setUsername(dto.getUsername());
        user.setName(dto.getName());
        user.setLastName(dto.getLastName());
        user.setFunction(dto.getFunction());
        user.setCity(dto.getCity());
        user.setState(dto.getState());
        user.setAddress(dto.getAddress());
        user.setEmail(dto.getEmail());
        user.setPassword(encoder.encode(dto.getPassword()));
        return user;
    }

    // Converte User para DTO de retorno
    public static UserDTO toDTO(Users user) {
        if (user == null) return null;
        return new UserDTO(
            user.getId(),
            user.getUsername(),
            user.getName(),
            user.getLastName(),
            user.getFunction(),
            user.getLastLogin(),
            user.getCity(),
            user.getState(),
            user.getAddress(),
            user.getEmail()
        );
    }
}

