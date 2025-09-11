package com.devsecerp.backend.services.endpoint.climaTempo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Duration;
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
    
    private final WebClient webClient;

    public ClimaTempoService() {
        this.webClient = WebClient.builder()
                .build();
    }

    public ClimaTempoResponse buscarClima() {
         Map<String, Object> ipApiResponse = webClient.get()
                .uri(ipApiUrl)
                .retrieve()
                .bodyToMono(Map.class)
                .block(Duration.ofSeconds(10));

        String cidade = (String) ipApiResponse.get("city");
        Double lat = ((Number) ipApiResponse.get("latitude")).doubleValue();
        Double lon = ((Number) ipApiResponse.get("longitude")).doubleValue();

        String urlClima = String.format(openWeatherUrl, lat, lon, openWeatherApiKey);

        Map<String, Object> climaApiResponse = webClient.get()
                .uri(urlClima)
                .retrieve()
                .bodyToMono(Map.class)
                .block(Duration.ofSeconds(10));

        Map<String, Object> main = (Map<String, Object>) climaApiResponse.get("main");
        Double temperatura = (Double) main.get("temp");

        var weatherList = (List<Map<String, Object>>) climaApiResponse.get("weather");
        String clima = (String) weatherList.get(0).get("description");

        // fazer data formatada pegando dia da semana
        LocalDateTime agora = LocalDateTime.now();
        String dia = agora.format(DateTimeFormatter.ofPattern("EEE", new Locale("pt", "BR")));
        String diaMesAno = agora.format(DateTimeFormatter.ofPattern("dd-MM-YY"));

        // Montagem do JSON
        ClimaTempoResponse resp = new ClimaTempoResponse();
        resp.setTemperatura(Math.round(temperatura) + "°");
        resp.setClima(clima);
        resp.setCidade(cidade);
        resp.setDia(dia);
        resp.setDiaMesAno(diaMesAno);

        System.out.println(resp);

        return resp;

    }
}
