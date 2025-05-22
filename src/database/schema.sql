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

INSERT INTO motoristas (nome, tipo_habilitacao, photo) VALUES
('Ana', 'Tipo A', '/uploads/Ana.png'),
('Bruna', 'Tipo A', '/uploads/Bruna.png'),
('Caio', 'Tipo A', '/uploads/Caio.png'),
('Eduardo', 'Tipo A', '/uploads/Eduardo.png'),
('Enzo', 'Tipo A', '/uploads/Enzo.png'),
('Fabiana', 'Tipo A', '/uploads/Fabiana.png'),
('Felipe', 'Tipo A', '/uploads/Felipe.png'),
('Jorge', 'Tipo A', '/uploads/Jorge.png'),
('Jose', 'Tipo A', '/uploads/Jose.png'),
('Julia', 'Tipo A', '/uploads/Julia.png'),
('Luana', 'Tipo A', '/uploads/Luana.png'),
('Luiz', 'Tipo A', '/uploads/Luiz.png'),
('Maisa', 'Tipo A', '/uploads/Maisa.png'),
('Marcelo', 'Tipo A', '/uploads/Marcelo.png'),
('Maria', 'Tipo A', '/uploads/Maria.png'),
('Nathan', 'Tipo A', '/uploads/Nathan.png'),
('Ricardo', 'Tipo A', '/uploads/Ricardo.png'),
('Thiago', 'Tipo A', '/uploads/Thiago.png'),
('Vitor', 'Tipo A', '/uploads/Vitor.png');