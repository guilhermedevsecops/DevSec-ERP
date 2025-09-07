BEGIN;

-- Administrador (todas as ações)
INSERT INTO role_action (role_id, action_id)
SELECT 1, id FROM actions;

-- TI (Tecnologia da Informação)
INSERT INTO role_action (role_id, action_id)
SELECT 2, id FROM actions WHERE modulo = 'TI';

-- RH (Recursos Humanos)
INSERT INTO role_action (role_id, action_id)
SELECT 3, id FROM actions WHERE modulo = 'RH';

-- Financeiro
INSERT INTO role_action (role_id, action_id)
SELECT 4, id FROM actions WHERE modulo = 'Financeiro';

-- Compras
INSERT INTO role_action (role_id, action_id)
SELECT 5, id FROM actions WHERE modulo = 'Compras';

-- Vendas
INSERT INTO role_action (role_id, action_id)
SELECT 6, id FROM actions WHERE modulo = 'Vendas';

-- Marketing
INSERT INTO role_action (role_id, action_id)
SELECT 7, id FROM actions WHERE modulo = 'Marketing';

-- Suprimentos
INSERT INTO role_action (role_id, action_id)
SELECT 8, id FROM actions WHERE modulo = 'Suprimentos';

-- Produção
INSERT INTO role_action (role_id, action_id)
SELECT 9, id FROM actions WHERE modulo = 'Produção';

-- Logística
INSERT INTO role_action (role_id, action_id)
SELECT 10, id FROM actions WHERE modulo = 'Logística';

-- Jurídico
INSERT INTO role_action (role_id, action_id)
SELECT 11, id FROM actions WHERE modulo = 'Jurídico';

COMMIT;
