package com.devsecerp.backend.controller.endpoint;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.devsecerp.backend.dto.cep.CepResponse;
import com.devsecerp.backend.entity.endpoint.EndpointsApi;
import com.devsecerp.backend.services.cep.ViaCepService;
import com.devsecerp.backend.services.endpoint.EndpointsApiService;

import java.util.List;

@RestController
@RequestMapping("/api/cep")
@CrossOrigin(origins = "http://localhost:3000")
public class CepController {

    private final ViaCepService apiConfigService;
    private final RestTemplate restTemplate = new RestTemplate();

    public CepController(ViaCepService apiConfigService) {
        this.apiConfigService = apiConfigService;
    }

    @GetMapping("/{cep}")
    public CepResponse getCep(@PathVariable String cep) {
        String url = apiConfigService.getUrl("ViaCEP", cep + "/json/");
        System.out.println(url);
        return restTemplate.getForObject(url, CepResponse.class);
    }
}
