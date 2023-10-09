const express = require("express");
const {
  getAllDogs,
  getDogsById,
  createDogs,
  updateDogsById,
  deleteDogsById,
} = require("../controllers/dogs");

const router = express.Router();

router.get("/", getAllDogs);
router.get("/:id", getDogsById);
router.post("/", createDogs);
router.put("/:id", updateDogsById);
router.delete("/:id", deleteDogsById);

module.exports = router;