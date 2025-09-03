package com.devsecerp.backend.repository.endpoint;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsecerp.backend.entity.endpoint.EndpointsApi;

import java.util.Optional;

public interface EndpointsApiRepository extends JpaRepository<EndpointsApi, Long> {
    Optional<EndpointsApi> findByApiApplicationAndAtivoTrue(String apiApplication);
}