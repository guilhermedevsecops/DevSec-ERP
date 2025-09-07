-- TABELA USUARIOS

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    function VARCHAR(50) NOT NULL,
    departament VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    last_login TIMESTAMP,
    city VARCHAR(50),
    state CHAR(2),
    address VARCHAR(100),
    cep VARCHAR(40),
    logadouro varchar(40),
    referencia varchar(40),
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

CREATE TABLE functions (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    departament_id INT NOT NULL REFERENCES departament(id)
);


-- TABELAS USUARIO DEPARTAMENTO

CREATE TABLE users_departament (
    user_id INT NOT NULL,
    departament_id INT NOT NULL,
    PRIMARY KEY(user_id, departament_id),
    FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY(departament_id) REFERENCES departament(id) ON DELETE CASCADE
);

CREATE TABLE endpoints_api (
    id SERIAL PRIMARY KEY,
    api_application VARCHAR(80) NOT NULL,   
    url VARCHAR(255) NOT NULL,              
    username VARCHAR(80),          
    password_encrypted TEXT,       
    ativo BOOLEAN DEFAULT TRUE
);

--Tabela para reset de password

CREATE TABLE password_reset_tokens (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  token VARCHAR(255) NOT NULL UNIQUE,
  expires_at TIMESTAMP NOT NULL,
  used BOOLEAN NOT NULL DEFAULT FALSE,
  email VARCHAR(255) NOT NULL,
  CONSTRAINT fk_user_password_reset FOREIGN KEY (user_id) REFERENCES users(id)
);