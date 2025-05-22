const express = require("express");
const dotenv = require("dotenv");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swagger");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors()); // 🟢 CORS yoqildi

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
const messageRoute = require("./routes/message");
app.use("/api/message", messageRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
