CREATE DATABASE uber;

\c uber

CREATE TABLE motoristas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo_habilitacao VARCHAR(100) NOT NULL
);

ALTER TABLE motoristas ADD COLUMN photo TEXT;

CREATE TABLE corridas (
    id SERIAL PRIMARY KEY,
    cliente VARCHAR(100) NOT NULL,
    motorista_id INTEGER REFERENCES motoristas(id) ON DELETE SET NULL
);

INSERT INTO motoristas (nome, tipo_habilitacao) VALUES
('Marcio', 'Tipo A'),
('João', 'Tipo B'),
('Mariana', 'Tipo C'),
('Joana', 'Tipo D');

INSERT INTO corridas (cliente, motorista_id) VALUES
('Gabriel', 1),
('Maria', 1),
('José', 2),
('Nathan', 2),
('Beatriz', 3),
('Jorge', 3),
('Fernanda', 4),
('Hugo', 4);