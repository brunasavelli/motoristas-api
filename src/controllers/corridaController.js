const corridaModel = require("../models/corridaModel");

const getAllCorridas = async (req, res) => {
    try {
        const corridas = await corridaModel.getCorridas();
        res.json(corridas);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar corridas." });
    }
};

const getCorrida = async (req, res) => {
    try {
        const corrida = await corridaModel.getCorridaById(req.params.id);
        if (!corrida) {
            return res.status(404).json({ message: "Corrida não encontrada." });
        }
        res.json(corrida);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar corrida." });
    }
};

const createCorrida = async (req, res) => {
    try {
        const { cliente, motorista_id } = req.body;
        const newCorrida = await corridaModel.createCorrida(cliente, motorista_id);
        res.status(201).json(newCorrida);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar corrida." });
    }
};

const updateCorrida = async (req, res) => {
    try {
        const { cliente, motorista_id } = req.body;
        const updateCorrida = await corridaModel.updateCorrida(req.params.id, cliente, motorista_id);
        if (!updateCorrida) {
            return res.status(404).json({ message: "Corrida não encontrada." });
        }
        res.json(updateCorrida);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar corrida." });
    }
};

const deleteCorrida = async (req, res) => {
    try {
        const message = await corridaModel.deleteCorrida(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar corrida." });
    }
};

module.exports = { getAllCorridas, getCorrida, createCorrida, updateCorrida, deleteCorrida };