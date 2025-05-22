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
('Ana', 'Tipo A', '/images/Ana.png'),
('Bruna', 'Tipo A', '/images/Bruna.png'),
('Caio', 'Tipo A', '/images/Caio.png'),
('Eduardo', 'Tipo A', '/images/Eduardo.png'),
('Enzo', 'Tipo A', '/images/Enzo.png'),
('Fabiana', 'Tipo A', '/images/Fabiana.png'),
('Felipe', 'Tipo A', '/images/Felipe.png'),
('Jorge', 'Tipo A', '/images/Jorge.png'),
('Jose', 'Tipo A', '/images/Jose.png'),
('Julia', 'Tipo A', '/images/Julia.png'),
('Luana', 'Tipo A', '/images/Luana.png'),
('Luiz', 'Tipo A', '/images/Luiz.png'),
('Maisa', 'Tipo A', '/images/Maisa.png'),
('Marcelo', 'Tipo A', '/images/Marcelo.png'),
('Maria', 'Tipo A', '/images/Maria.png'),
('Nathan', 'Tipo A', '/images/Nathan.png'),
('Ricardo', 'Tipo A', '/images/Ricardo.png'),
('Thiago', 'Tipo A', '/images/Thiago.png'),
('Vitor', 'Tipo A', '/images/Vitor.png');