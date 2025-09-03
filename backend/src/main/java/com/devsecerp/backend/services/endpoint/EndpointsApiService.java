package com.devsecerp.backend.services.endpoint;

import org.springframework.stereotype.Service;

import com.devsecerp.backend.entity.endpoint.EndpointsApi;
import com.devsecerp.backend.repository.endpoint.EndpointsApiRepository;

import java.util.List;

@Service
public class EndpointsApiService {

    private final EndpointsApiRepository repository;

    public EndpointsApiService(EndpointsApiRepository repository) {
        this.repository = repository;
    }

    public EndpointsApi save(String app, String url, String username, String password) {
        EndpointsApi api = new EndpointsApi();
        api.setApiApplication(app);
        api.setUrl(url);
        api.setUsername(username);
        api.setPassword(password);
        return repository.save(api);
    }

    public List<EndpointsApi> findAll() {
        return repository.findAll();
    }
}

