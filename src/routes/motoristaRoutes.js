const express = require("express");
const router = express.Router();
const motoristaController = require("../controllers/motoristaController");
const upload = require("../config/upload.js");

/**
 * @swagger
 * /api/motoristas:
 *   get:
 *     summary: Lista todos os motoristas
 *     tags: [Motoristas]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/", motoristaController.getAllMotoristas);

/**
 * @swagger
 * /api/motoristas/{id}:
 *   get:
 *     summary: Busca motorista por ID
 *     tags: [Motoristas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Motorista encontrado
 *       404:
 *         description: Motorista não encontrado
 */
router.get("/:id", motoristaController.getMotorista);

/**
 * @swagger
 * /api/motoristas:
 *   post:
 *     summary: Cria um novo motorista
 *     tags: [Motoristas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Motorista criado com sucesso
 */
router.post("/", upload.single("photo"), motoristaController.createMotorista);

/**
 * @swagger
 * /api/motoristas/{id}:
 *   put:
 *     summary: Atualiza um motorista
 *     tags: [Motoristas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Motorista atualizado com sucesso
 */
router.put("/:id", motoristaController.updateMotorista);

/**
 * @swagger
 * /api/motoristas/{id}:
 *   delete:
 *     summary: Deleta um motorista
 *     tags: [Motoristas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Motorista deletado com sucesso
 */
router.delete("/:id", motoristaController.deleteMotorista)

module.exports = router;