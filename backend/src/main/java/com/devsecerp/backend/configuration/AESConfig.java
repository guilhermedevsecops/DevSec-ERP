package com.devsecerp.backend.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

import com.devsecerp.utils.AESUtil;

@Configuration
public class AESConfig {
    public AESConfig(@Value("${api.secret.key}") String key){
        AESUtil.setSecretKey(key);
    }
}
