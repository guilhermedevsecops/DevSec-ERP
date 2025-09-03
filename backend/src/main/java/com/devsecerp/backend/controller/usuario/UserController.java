package com.devsecerp.backend.controller.usuario;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsecerp.backend.dto.usuario.UserCreateDTO;
import com.devsecerp.backend.dto.usuario.UserDTO;
import com.devsecerp.backend.interfaces.usuario.UserControllerInterface;
import com.devsecerp.backend.services.usuario.UserService;

@RestController
@RequestMapping("/register")
public class UserController implements UserControllerInterface{

    @Autowired
    private UserService service;


    @Override
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@RequestBody UserCreateDTO dto) {
        UserDTO createUser = service.createUser(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(createUser);
        
    }

    @Override
    public ResponseEntity<UserDTO> getUserById(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'getUserById'");
    }

    @Override
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
         List<UserDTO> users = service.getAllUsers(); // chama o service
        return ResponseEntity.ok(users);
    }

    @Override
    public ResponseEntity<UserDTO> updateUser(Integer id, UserDTO dto) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateUser'");
    }

    @Override
    public ResponseEntity<Void> deleteUser(Integer id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deleteUser'");
    }

    @Override
    public ResponseEntity<Boolean> login(String username, String password) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'login'");
    }
    
}
