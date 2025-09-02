-- TABELA USUARIOS

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    function VARCHAR(50),
    password VARCHAR(255) NOT NULL,
    last_login TIMESTAMP,
    city VARCHAR(50),
    state CHAR(2),
    address VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL
);

-- TABELA DEPARTAMENTO

CREATE TABLE departament (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL
);

-- TABELA PERMISSOES

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL,
    descricao TEXT
);

-- TABELA AÇÕES

CREATE TABLE actions (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) UNIQUE NOT NULL,      
    descricao TEXT,
    modulo VARCHAR(50) NOT NULL            
);

-- TABELA USUARIOS PERMISSÕES

CREATE TABLE users_role (
    users_id INT NOT NULL,
    role_id INT NOT NULL,
    PRIMARY KEY(users_id, role_id),
    FOREIGN KEY(users_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE CASCADE
);

-- TABELA PERMISSÕES AÇÕES

CREATE TABLE role_action (
    role_id INT NOT NULL,
    action_id INT NOT NULL,
    PRIMARY KEY(role_id, action_id),
    FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE CASCADE,
    FOREIGN KEY(action_id) REFERENCES actions(id) ON DELETE CASCADE
);

-- TABELAS USUARIO DEPARTAMENTO

CREATE TABLE user_departament (
    user_id INT NOT NULL,
    departament_id INT NOT NULL,
    PRIMARY KEY(user_id, departament_id),
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(departament_id) REFERENCES departament(id) ON DELETE CASCADE
);
