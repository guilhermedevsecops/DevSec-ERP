package com.devsecerp.backend.services.usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.devsecerp.backend.dto.usuario.UserCreateDTO;
import com.devsecerp.backend.dto.usuario.UserDTO;
import com.devsecerp.backend.dto.usuario.UserMapper;
import com.devsecerp.backend.entity.usuario.Users;
import com.devsecerp.backend.interfaces.usuario.UserServiceInterface;
import com.devsecerp.backend.repository.usuario.UserRepository;

@Service
public class UserService implements UserServiceInterface {
    @Autowired
    private UserRepository repository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO createUser(UserCreateDTO dto) {
        Users user = UserMapper.fromCreateDTO(dto, passwordEncoder);
        Users savedUser = repository.save(user);
        return UserMapper.toDTO(savedUser);
    }

    @Override
    public UserDTO getUserById(Integer id) {

        Users user = repository.findById(id)
                              .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
        return UserMapper.toDTO(user);
    }

    @Override
    public List<UserDTO> getAllUsers() {
        List<Users> users = repository.findAll();
        return users.stream()
                    .map(UserMapper::toDTO)
                    .toList();
    }

    @Override
    public void deleteUser(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }

    @Override
    public UserDTO updateUser(Integer id, UserDTO dto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

}
