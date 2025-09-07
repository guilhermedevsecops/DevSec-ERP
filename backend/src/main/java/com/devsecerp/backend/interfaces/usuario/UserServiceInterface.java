package com.devsecerp.backend.interfaces.usuario;

import java.util.List;

import com.devsecerp.backend.dto.usuario.UserCreateDTO;
import com.devsecerp.backend.dto.usuario.UserDTO;

public interface UserServiceInterface {
    UserDTO createUser(UserCreateDTO dto);
    UserDTO getUserById(Integer id);
    List<UserDTO> getAllUsers();
    void deleteUser(Integer id);
    UserDTO updateUser(Integer id, UserDTO dto);
}
