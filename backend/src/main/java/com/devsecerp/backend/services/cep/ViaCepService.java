package com.devsecerp.backend.services.cep;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.devsecerp.backend.entity.endpoint.EndpointsApi;
import com.devsecerp.backend.repository.endpoint.EndpointsApiRepository;

@Service
public class ViaCepService {

    private final EndpointsApiRepository repository;

    public ViaCepService(EndpointsApiRepository repository) {
        this.repository = repository;
    }

    public EndpointsApi getApiByName(String apiName) {
        return repository.findByApiApplicationAndAtivoTrue(apiName)
                .orElseThrow(() -> new RuntimeException("API não configurada: " + apiName));
    }

    public String getUrl(String apiName, String path) {
        EndpointsApi api = getApiByName(apiName);
        return api.getUrl() + path;
    }
}

