const express = require("express");
const router = express.Router();
const motoristaController = require("../controllers/motoristaController");

router.get("/", motoristaController.getAllMotoristas);
router.get("/:id", motoristaController.getMotorista);
router.post("/", motoristaController.createMotorista);
router.put("/:id", motoristaController.updateMotorista);
router.delete("/:id", motoristaController.deleteMotorista)

module.exports = router;