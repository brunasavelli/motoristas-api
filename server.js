require("dotenv").config();
const express = require("express");
const cors = require("cors");
const motoristaRoutes = require("./src/routes/motoristaRoutes");
const corridasRoutes = require("./src/routes/corridaRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const path = require("path");
const setupSwagger = require('./src/config/swagger');
// const apiKeyMiddleware = require("./src/config/apiKey");

const app = express();
app.use(cors());
app.use(express.json());
setupSwagger(app);

app.use("/api/motoristas", motoristaRoutes);
app.use("/api/corridas", corridasRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api", reportRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});