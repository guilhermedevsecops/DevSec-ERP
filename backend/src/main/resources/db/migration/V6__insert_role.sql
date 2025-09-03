BEGIN;

INSERT INTO roles (id, nome, descricao) VALUES
(1, 'Administrador', 'Acesso total ao sistema'),
(2, 'TI', 'Gestão e manutenção do sistema e infraestrutura'),
(3, 'RH', 'Gestão de recursos humanos e funcionários'),
(4, 'Financeiro', 'Gestão de finanças e contabilidade'),
(5, 'Compras', 'Gestão de compras e fornecedores'),
(6, 'Vendas', 'Gestão de vendas e clientes'),
(7, 'Marketing', 'Gestão de campanhas e comunicação'),
(8, 'Suprimentos', 'Controle de estoque e materiais'),
(9, 'Produção', 'Gestão da produção e ordens de fabricação'),
(10, 'Logística', 'Gestão de transporte e distribuição'),
(11, 'Jurídico', 'Controle de contratos e processos legais');

COMMIT;