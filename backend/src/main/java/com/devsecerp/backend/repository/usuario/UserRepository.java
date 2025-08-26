package com.devsecerp.backend.repository.usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.devsecerp.backend.entity.usuario.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Integer> {
    
}
