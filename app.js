const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

const formatLog = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatLog));
app.use(cors());
app.use(express.json());

//
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res) => {
  console.log(req);
  res.status(404).json({ message: "Page not found" });
});
app.use((err, req, res, next) => {
  console.log(req);
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
