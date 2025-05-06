const motoristaModel = require("../models/motoristaModel");

const getAllMotoristas = async (req, res) => {
    try {
        const { tipo_habilitacao } = req.query;
        const motoristas = await motoristaModel.getMotoristas(tipo_habilitacao);
        res.json(motoristas);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar motorista." });
    }
};

const getMotorista = async (req, res) => {
    try {
        const motorista = await motoristaModel.getMotoristasById(req.params.id);
        if (!motorista) {
            return res.status(404).json({ message: "Motorista não encontrado." });
        }
        res.json(motorista);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar motorista." });
    }
};

const createMotorista = async (req, res) => {
    try{
        const { nome, tipo_habilitacao } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newMotorista = await motoristaModel.createMotorista(nome, tipo_habilitacao, photo);
        res.status(201).json(newMotorista);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erro ao criar motorista." });
    }
};

const updateMotorista = async (req, res) => {
    try {
        const { nome, tipo_habilitacao } = req.body;
        const updateMotorista = await motoristaModel.updateMotorista(req.params.id, nome, tipo_habilitacao);
        if (!updateMotorista) {
            return res.status(404).json({ message: "Motorista não encontrado." });
        }
        res.json(updateMotorista);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar motorista." });
    }
};

const deleteMotorista = async (req, res) => {
    try {
        const message = await motoristaModel.deleteMotorista(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar motorista." });
    }
}

module.exports = { getAllMotoristas, getMotorista, createMotorista, updateMotorista, deleteMotorista };
