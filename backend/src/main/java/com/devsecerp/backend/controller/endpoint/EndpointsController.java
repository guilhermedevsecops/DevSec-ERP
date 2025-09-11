package com.devsecerp.backend.controller.endpoint;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.devsecerp.backend.dto.cep.CepResponse;
import com.devsecerp.backend.dto.climaTempo.ClimaTempoResponse;
import com.devsecerp.backend.entity.endpoint.EndpointsApi;
import com.devsecerp.backend.services.endpoint.cep.ViaCepService;
import com.devsecerp.backend.services.endpoint.climaTempo.ClimaTempoService;
import com.devsecerp.backend.services.endpoint.EndpointsApiService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class EndpointsController {

    @Autowired
    private ClimaTempoService climaService;
    @Autowired
    private ViaCepService apiConfigService;
    private final RestTemplate restTemplate = new RestTemplate();
    
    @GetMapping("/cep/{cep}")
    public CepResponse getCep(@PathVariable String cep) {
        String url = apiConfigService.getUrl("ViaCEP", cep + "/json/");
        System.out.println(url);
        return restTemplate.getForObject(url, CepResponse.class);
    }

    @GetMapping("/tempo")
    public ClimaTempoResponse getClimaTempo() {
        return climaService.buscarClima();
    }
}
