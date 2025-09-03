BEGIN;

-- Recursos Humanos (departament_id = 1)
INSERT INTO functions(nome, departament_id) VALUES
('Analista de Folha', 1),
('Recrutador', 1),
('Coordenador de RH', 1);

-- Financeiro (departament_id = 2)
INSERT INTO functions(nome, departament_id) VALUES
('Contador', 2),
('Analista Financeiro', 2),
('Gerente Financeiro', 2);

-- Compras (departament_id = 3)
INSERT INTO functions(nome, departament_id) VALUES
('Assistente de Compras', 3),
('Comprador', 3),
('Gerente de Compras', 3);

-- Vendas (departament_id = 4)
INSERT INTO functions(nome, departament_id) VALUES
('Representante de Vendas', 4),
('Supervisor de Vendas', 4),
('Gerente Comercial', 4);

-- Marketing (departament_id = 5)
INSERT INTO functions(nome, departament_id) VALUES
('Analista de Marketing', 5),
('Coordenador de Marketing', 5),
('Gerente de Marketing', 5);

-- Tecnologia da Informação (departament_id = 6)
INSERT INTO functions(nome, departament_id) VALUES
('Desenvolvedor', 6),
('Administrador de Sistemas', 6),
('Analista de Suporte', 6);

-- Suprimentos (departament_id = 7)
INSERT INTO functions(nome, departament_id) VALUES
('Analista de Suprimentos', 7),
('Coordenador de Suprimentos', 7);

-- Produção (departament_id = 8)
INSERT INTO functions(nome, departament_id) VALUES
('Planejador de Produção', 8),
('Supervisor de Produção', 8),
('Operador de Máquina', 8);

-- Logística (departament_id = 9)
INSERT INTO functions(nome, departament_id) VALUES
('Analista de Logística', 9),
('Coordenador de Transporte', 9);

-- Jurídico (departament_id = 10)
INSERT INTO functions(nome, departament_id) VALUES
('Advogado', 10),
('Assistente Jurídico', 10);


COMMIT;