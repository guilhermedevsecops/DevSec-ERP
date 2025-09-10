package com.devsecerp.backend.services.endpoint.climaTempo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import com.devsecerp.backend.dto.climaTempo.ClimaTempoResponse;

@Service
public class ClimaTempoService {
    
    @Value("${ipapi.url}")
    private String ipApiUrl;

    @Value("${openweather.url}")
    private String openWeatherUrl;

    @Value("${openweather.api.key}")
    private String openWeatherApiKey;

    private final RestTemplate restTemplate = new RestTemplate();

    public ClimaTempoResponse buscarClima(){
        Map<String, Object> ipApiResponse = restTemplate.getForObject(ipApiUrl, Map.class);
        String cidade = (String) ipApiResponse.get("city");
        Object lat = ipApiResponse.get("latitude");
        Object lon = ipApiResponse.get("longitude");

        String urlClima = String.format(openWeatherUrl, lat, lon, openWeatherApiKey);
        Map<String, Object> climaApiResponse = restTemplate.getForObject(urlClima, Map.class);

        Map<String, Object> main = (Map<String, Object>) climaApiResponse.get("main");
        Double temperatura = (Double) main.get("temp");

        var weatherList = (List<Map<String, Object>>) climaApiResponse.get("weather");
        String clima = (String) weatherList.get(0).get("description");

        // fazer data formatada pegando dia da semana 
        LocalDateTime agora = LocalDateTime.now();
        String dia = agora.format(DateTimeFormatter.ofPattern("EEE", new Locale("pt", "BR")));
        String diaMesAno = agora.format(DateTimeFormatter.ofPattern("dd-MM-YY"));

        //Montagem do JSON
        ClimaTempoResponse resp = new ClimaTempoResponse();
        resp.setTemperatura(Math.round(temperatura) + "°");
        resp.setClima(clima);
        resp.setCidade(cidade);
        resp.setDia(dia);
        resp.setMes(diaMesAno);

        return resp;

        
    }
}
