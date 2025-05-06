const express = require("express");
const router = express.Router();
const corridaController = require("../controllers/corridaController");

/**
 * @swagger
 * /api/corridas:
 *   get:
 *     summary: Lista todas as corridas
 *     tags: [Corridas]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
router.get("/", corridaController.getAllCorridas);

/**
 * @swagger
 * /api/corridas/{id}:
 *   get:
 *     summary: Busca corrida por ID
 *     tags: [Corridas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Corridas encontrado
 *       404:
 *         description: Corridas não encontrado
 */
router.get("/:id", corridaController.getCorrida);

/**
 * @swagger
 * /api/corridas:
 *   post:
 *     summary: Cria uma nova corrida
 *     tags: [Corridas]
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
 *         description: Corrida criada com sucesso
 */
router.post("/", corridaController.createCorrida);

/**
 * @swagger
 * /api/corridas/{id}:
 *   put:
 *     summary: Atualiza uma corrida
 *     tags: [Corridas]
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
 *         description: Corrida atualizada com sucesso
 */
router.put("/:id", corridaController.updateCorrida);

/**
 * @swagger
 * /api/corridas/{id}:
 *   delete:
 *     summary: Deleta uma corrida
 *     tags: [Corridas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Corrida deletada com sucesso
 */
router.delete("/:id", corridaController.deleteCorrida);

module.exports = router;