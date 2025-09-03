package com.devsecerp.backend.dto.usuario;

import org.springframework.security.crypto.password.PasswordEncoder;

import com.devsecerp.backend.entity.usuario.Users;

public class UserMapper {

    // Cria a entidade User a partir do DTO de criação
    public static Users fromCreateDTO(UserCreateDTO dto, PasswordEncoder encoder) {
        Users user = new Users();
        user.setUsername(dto.getUsername());
        user.setFirstname(dto.getFirstname());
        user.setLastname(dto.getLastname());
        user.setFunction(dto.getFunction());
        user.setDepartament(dto.getDepartament());
        user.setCity(dto.getCity());
        user.setState(dto.getState());
        user.setAddress(dto.getAddress());
        user.setCep(dto.getCep());
        user.setLogadouro(dto.getLogadouro());
        user.setReferencia(dto.getReferencia());
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
    user.getFirstname(), 
    user.getLastname(),
    user.getDepartament(),
    user.getLogadouro(),
    user.getReferencia(),
    user.getFunction(),
    user.getLastLogin(),
    user.getCity(),
    user.getCep(),
    user.getState(),
    user.getAddress(),
    user.getEmail()
);
    }
}

