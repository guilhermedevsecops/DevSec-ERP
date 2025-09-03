COMMIT;

-- Recursos Humanos (RH)
INSERT INTO actions(nome, descricao, modulo) VALUES
('Visualizar Funcionários', 'Pode ver informações de todos os funcionários', 'RH'),
('Cadastrar Funcionários', 'Pode cadastrar novos funcionários', 'RH'),
('Editar Funcionários', 'Pode editar informações de funcionários', 'RH'),
('Aprovar Candidatos', 'Pode aprovar candidatos para vagas', 'RH'),
('Gerar Relatórios de Salário', 'Pode gerar relatórios financeiros de salários', 'RH');

-- Financeiro
INSERT INTO actions(nome, descricao, modulo) VALUES
('Visualizar Contas', 'Pode ver todas as contas e transações', 'Financeiro'),
('Gerar Relatórios Financeiros', 'Pode gerar relatórios de fluxo e balanço', 'Financeiro'),
('Cadastrar Pagamentos', 'Pode registrar novos pagamentos', 'Financeiro'),
('Aprovar Despesas', 'Pode aprovar despesas', 'Financeiro');

-- Compras
INSERT INTO actions(nome, descricao, modulo) VALUES
('Visualizar Fornecedores', 'Pode ver informações dos fornecedores', 'Compras'),
('Cadastrar Pedidos', 'Pode registrar novos pedidos de compra', 'Compras'),
('Aprovar Pedidos', 'Pode aprovar pedidos de compra', 'Compras');

-- Vendas
INSERT INTO actions(nome, descricao, modulo) VALUES
('Visualizar Clientes', 'Pode ver informações de clientes', 'Vendas'),
('Registrar Vendas', 'Pode registrar novas vendas', 'Vendas'),
('Gerar Relatórios de Vendas', 'Pode gerar relatórios de vendas', 'Vendas');

-- Marketing
INSERT INTO actions(nome, descricao, modulo) VALUES
('Criar Campanhas', 'Pode criar campanhas de marketing', 'Marketing'),
('Visualizar Métricas', 'Pode ver métricas de campanhas', 'Marketing');

-- Tecnologia da Informação (TI)
INSERT INTO actions(nome, descricao, modulo) VALUES
('Gerenciar Servidores', 'Pode gerenciar servidores e sistemas', 'TI'),
('Acessar Logs', 'Pode acessar logs do sistema', 'TI'),
('Gerenciar Usuários', 'Pode criar, editar e remover usuários do sistema', 'TI');

-- Suprimentos
INSERT INTO actions(nome, descricao, modulo) VALUES
('Visualizar Estoque', 'Pode ver o estoque disponível', 'Suprimentos'),
('Registrar Entradas', 'Pode registrar entrada de produtos', 'Suprimentos');

-- Produção
INSERT INTO actions(nome, descricao, modulo) VALUES
('Visualizar Produção', 'Pode ver status da produção', 'Produção'),
('Registrar Produção', 'Pode registrar novos lotes de produção', 'Produção');

-- Logística
INSERT INTO actions(nome, descricao, modulo) VALUES
('Visualizar Transportes', 'Pode ver rotas e entregas', 'Logística'),
('Registrar Entregas', 'Pode registrar entregas realizadas', 'Logística');

-- Jurídico
INSERT INTO actions(nome, descricao, modulo) VALUES
('Visualizar Processos', 'Pode ver processos jurídicos em andamento', 'Jurídico'),
('Registrar Processos', 'Pode registrar novos processos jurídicos', 'Jurídico');

BEGIN;