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
