const express = require("express");
const router = express.Router();
const motoristaController = require("../controllers/motoristaController");
const upload = require("../config/upload.js");

router.get("/", motoristaController.getAllMotoristas);
router.get("/:id", motoristaController.getMotorista);
router.post("/", upload.single("photo"), motoristaController.createMotorista);
router.put("/:id", motoristaController.updateMotorista);
router.delete("/:id", motoristaController.deleteMotorista)

module.exports = router;