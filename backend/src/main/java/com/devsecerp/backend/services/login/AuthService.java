package com.devsecerp.backend.services.login;

import com.devsecerp.backend.dto.login.LoginRequestDTO;
import com.devsecerp.backend.dto.login.LoginResponseDTO;
import com.devsecerp.backend.entity.usuario.Users;
import com.devsecerp.backend.repository.usuario.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository repository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public LoginResponseDTO login(LoginRequestDTO request) {
        Optional<Users> userOpt = repository.findByEmail(request.getEmail());

        if (userOpt.isEmpty()) {
            throw new RuntimeException("Usuário não encontrado");
        }

        Users user = userOpt.get();

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Senha inválida");
        }

        String token = jwtService.generateToken(user);
        return new LoginResponseDTO(token);
    }
}
