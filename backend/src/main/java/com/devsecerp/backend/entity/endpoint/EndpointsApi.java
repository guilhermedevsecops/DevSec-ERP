package com.devsecerp.backend.entity.endpoint;

import com.devsecerp.utils.AESUtil;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "endpoints_api")
@Data
public class EndpointsApi {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "api_application", nullable = false)
    private String apiApplication;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    private String username;

    @Column(name = "password_encrypted", nullable = false)
    private String passwordEncrypted;

    private Boolean ativo;


    public void setPassword(String rawPassword) {
        try {
            this.passwordEncrypted = AESUtil.encrypt(rawPassword);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao criptografar a senha", e);
        }
    }

    public String getPassword() {
        try {
            return AESUtil.decrypt(this.passwordEncrypted);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao descriptografar a senha", e);
        }
    }
}
