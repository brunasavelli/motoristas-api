const pool = require("../config/database");

const getMotoristas = async () => {
    const result = await pool.query("SELECT * FROM motoristas");
    return result.rows;
};

const getMotoristasById = async (id) => {
    const result = await pool.query("SELECT * FROM motoristas WHERE id = $1", [id]);
    return result.rows[0];
};

const createMotorista = async (nome, tipo_habilitacao) => {
    const result = await pool.query(
        "INSERT INTO motoristas (nome, tipo_habilitacao) VALUES ($1, $2) RETURNING *",
        [nome, tipo_habilitacao]
    );
    return result.rows[0];
};

const updateMotorista = async (id, nome, tipo_habilitacao) => {
    const result = await pool.query(
        "UPDATE motoristas SET nome = $1, tipo_habilitacao = $2 WHERE id = $3 RETURNING *",
        [nome, tipo_habilitacao, id]
    );
    return result.rows[0];
}

const deleteMotorista = async (id) => {
    const result = await pool.query(
        "DELETE FROM motoristas WHERE id = $1 RETURNING *", [id]
    );
    return{ message: "Motorista deletado com sucesso!" };
}

module.exports = { getMotoristas, getMotoristasById, createMotorista, updateMotorista, deleteMotorista }