package com.devsecerp.backend.dto.climaTempo;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClimaTempoResponse {

    private String temperatura;
    private String clima;
    private String cidade;
    private String dia;
    private String diaMesAno;
    
}
