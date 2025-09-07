BEGIN;

-- Recursos Humanos (RH)
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Funcionarios', 'Permite visualizar funcionários', 'Recursos Humanos'),
('Cadastrar_Funcionarios', 'Permite cadastrar novos funcionários', 'Recursos Humanos'),
('Atualizar_Funcionarios', 'Permite atualizar dados de funcionários', 'Recursos Humanos');

-- Financeiro
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Contas', 'Permite visualizar contas financeiras', 'Financeiro'),
('Cadastrar_Contas', 'Permite cadastrar contas financeiras', 'Financeiro'),
('Atualizar_Contas', 'Permite atualizar contas financeiras', 'Financeiro'),
('Gerar_Relatorios', 'Permite gerar relatórios financeiros', 'Financeiro');

-- Compras
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Pedidos', 'Permite visualizar pedidos de compra', 'Compras'),
('Criar_Pedido', 'Permite criar pedidos de compra', 'Compras'),
('Atualizar_Pedido', 'Permite atualizar pedidos de compra', 'Compras');

-- Vendas
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Pedidos_Venda', 'Permite visualizar pedidos de venda', 'Vendas'),
('Criar_Pedido_Venda', 'Permite criar pedidos de venda', 'Vendas'),
('Atualizar_Pedido_Venda', 'Permite atualizar pedidos de venda', 'Vendas');

-- Marketing
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Campanhas', 'Permite visualizar campanhas', 'Marketing'),
('Criar_Campanha', 'Permite criar campanhas', 'Marketing'),
('Atualizar_Campanha', 'Permite atualizar campanhas', 'Marketing');

-- Tecnologia da Informação (TI)
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Sistemas', 'Permite visualizar sistemas', 'Tecnologia da Informação'),
('Gerenciar_Servidores', 'Permite gerenciar servidores', 'Tecnologia da Informação'),
('Monitorar_Sistemas', 'Permite monitorar sistemas e logs', 'Tecnologia da Informação');

-- Suprimentos
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Itens', 'Permite visualizar itens de suprimento', 'Suprimentos'),
('Cadastrar_Item', 'Permite cadastrar itens de suprimento', 'Suprimentos'),
('Atualizar_Item', 'Permite atualizar itens de suprimento', 'Suprimentos');

-- Produção
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Producoes', 'Permite visualizar ordens de produção', 'Produção'),
('Criar_Ordem_Producao', 'Permite criar ordens de produção', 'Produção'),
('Atualizar_Ordem_Producao', 'Permite atualizar ordens de produção', 'Produção');

-- Logística
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Envios', 'Permite visualizar envios e transportes', 'Logística'),
('Cadastrar_Envio', 'Permite cadastrar envios', 'Logística'),
('Atualizar_Envio', 'Permite atualizar informações de envio', 'Logística');

-- Jurídico
INSERT INTO actions (nome, descricao, modulo) VALUES
('Visualizar_Processos', 'Permite visualizar processos jurídicos', 'Jurídico'),
('Criar_Processo', 'Permite criar processos jurídicos', 'Jurídico'),
('Atualizar_Processo', 'Permite atualizar informações de processos', 'Jurídico');
COMMIT;