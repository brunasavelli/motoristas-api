const pool = require("../config/database");

const getCorridas = async () => {
    const result = await pool.query(
        `SELECT corridas.*, motoristas.nome AS motorista_nome 
        FROM corridas 
        LEFT JOIN motoristas ON corridas.motorista_id = motoristas.id`
    );
    return result.rows;
};

const getCorridaById = async (id) => {
    const result = await pool.query(
        `SELECT corridas.*, motoristas.nome AS motorista_nome 
        FROM corridas 
        LEFT JOIN motoristas ON corridas.motorista_id = motoristas.id 
        WHERE corridas.id = $1`, [id]
    );
    return result.rows[0];
};

const createCorrida = async (cliente, motorista_id) => {
    const result = await pool.query(
        "INSERT INTO corridas (cliente, motorista_id) VALUES ($1, $2) RETURNING *",
        [cliente, motorista_id]
    );
    return result.rows[0];
};

const updateCorrida = async (id, cliente, motorista_id) => {
    const result = await pool.query(
        "UPDATE corridas SET cliente = $1, motorista_id = $2 WHERE id = $3 RETURNING *",
        [cliente, motorista_id, id]
    );
    return result.rows[0];
};

const deleteCorrida = async (id) => {
    const result = await pool.query("DELETE FROM corridas WHERE id = $1 RETURNING *", [id]);
    return { message: `Corrida de id ${id} deletada com sucesso!` };
}

module.exports = { getCorridas, getCorridaById, createCorrida, updateCorrida, deleteCorrida };
