const express = require("express");
const router = express.Router();
const corridaController = require("../controllers/corridaController");

router.get("/", corridaController.getAllCorridas);
router.get("/:id", corridaController.getCorrida);
router.post("/", corridaController.createCorrida);
router.put("/:id", corridaController.updateCorrida);
router.delete("/:id", corridaController.deleteCorrida);

module.exports = router;