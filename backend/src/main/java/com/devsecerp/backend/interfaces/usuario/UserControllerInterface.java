package com.devsecerp.backend.interfaces.usuario;

import com.devsecerp.backend.dto.usuario.UserDTO;
import com.devsecerp.backend.dto.usuario.UserCreateDTO;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/users")
public interface UserControllerInterface {

    @PostMapping
    ResponseEntity<UserDTO> createUser(UserCreateDTO dto);

    @GetMapping("/{id}")
    ResponseEntity<UserDTO> getUserById(@PathVariable Integer id);

    @GetMapping
    ResponseEntity<List<UserDTO>> getAllUsers();

    @PutMapping("/{id}")
    ResponseEntity<UserDTO> updateUser(@PathVariable Integer id, @RequestBody UserDTO dto);

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteUser(@PathVariable Integer id);

    @PostMapping("/login")
    ResponseEntity<Boolean> login(@RequestParam String username, @RequestParam String password);
}
