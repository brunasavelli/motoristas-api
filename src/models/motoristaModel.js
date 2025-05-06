const pool = require("../config/database");

const getMotoristas = async (tipo_habilitacao) => {
    if(!tipo_habilitacao) {
        const result = await pool.query("SELECT * FROM motoristas");
        return result.rows;
    } else {
        const result = await pool.query(
            `SELECT motoristas.*, corridas.cliente AS cliente
            FROM motoristas
            LEFT JOIN corridas ON motoristas.corrida_id = corridas.id
            WHERE motoristas.tipo_habilitacao ILIKE $1`, [`%${tipo_habilitacao}%`]
        );
        return result.rows;
    }
};

const getMotoristasById = async (id) => {
    const result = await pool.query("SELECT * FROM motoristas WHERE id = $1", [id]);
    return result.rows[0];
};

const createMotorista = async (nome, tipo_habilitacao, photo) => {
    const result = await pool.query(
        "INSERT INTO motoristas (nome, tipo_habilitacao, photo) VALUES ($1, $2, $3) RETURNING *",
        [nome, tipo_habilitacao, photo]
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