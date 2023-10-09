require("dotenv").config();
require("./config/db");

const express = require("express");
const mainRouter = require("./routes");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15minutos
  max: 10,
  standardHeaders: false,
  legacyHeaders: false,
});

app.use(limiter);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.disable("x-powered-by");
app.use("/api", mainRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({ data: "Not found 🐶" });
});

app.use((error, req, res, next) => {
  console.log(">>>>> Server error:", error);
  res.status(500).json({ data: "Internal Server Error" });
});

const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
  console.log(
    `La aplicación está corriendo en: http://localhost:${PORT}/api/kittens`
  );
});