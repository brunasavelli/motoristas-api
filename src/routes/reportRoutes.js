const express = require("express");
const router = express.Router();

const reportsController = require("../controllers/reportController");

router.get("/report/pdf", reportsController.exportMotoristaPDF);

module.exports = router;