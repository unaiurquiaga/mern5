const express = require("express");
const dogsRouter = require("./dogs");

const router = express.Router();

router.use("/dogs", dogsRouter);

module.exports = router;