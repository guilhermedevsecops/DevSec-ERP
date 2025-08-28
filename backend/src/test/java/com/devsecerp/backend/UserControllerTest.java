package com.devsecerp.backend;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    // Teste de criação de usuário válido
    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"})
    public void testCreateUser() throws Exception {
        String userJson = """
            {
                "name": "João",
                "lastName": "Silva",
                "email": "joao.silva@example.com",
                "username": "joaos",
                "password": "123456"
            }
            """;

        mockMvc.perform(MockMvcRequestBuilders.post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(userJson))
               .andExpect(status().isCreated())
               .andExpect(jsonPath("$.success").value(true))
               .andExpect(jsonPath("$.data.name").value("João"))
               .andExpect(jsonPath("$.data.email").value("joao.silva@example.com"));
    }

    // Teste para rota inexistente
    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"})
    public void testRotaNaoEncontrada() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/users/rotaInexistente")
                        .contentType(MediaType.APPLICATION_JSON))
               .andExpect(status().isNotFound())
               .andExpect(jsonPath("$.success").value(false))
               .andExpect(jsonPath("$.message").value("Rota não encontrada: /users/rotaInexistente"));
    }

    // Teste de erro genérico (JSON inválido)
    @Test
    @WithMockUser(username = "admin", roles = {"ADMIN"})
    public void testErroGenerico() throws Exception {
        String invalidJson = "{ \"name\": null, \"email\": \"teste\" }";

        mockMvc.perform(MockMvcRequestBuilders.post("/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidJson))
               .andExpect(status().isInternalServerError())
               .andExpect(jsonPath("$.success").value(false))
               .andExpect(jsonPath("$.message").value("Erro interno do servidor"));
    }
}
