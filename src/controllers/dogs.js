const Dogs = require("../models/dogs");
const {
  getAllDogsFromDB,
  getDogsByIdFromDB,
  createDogsInDB,
  updateDogsByIdInDB,
  deleteDogsByIdInDB,
} = require("../repository/dogs");

const getAllDogs = async (req, res, next) => {
  const { filter } = req.query;
  const dogs = await getAllDogsFromDB(filter);

  res.status(200).json({ data: dogs });
};

const getDogsById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const kitten = await getDogsByIdFromDB(id);
    res.status(200).json({ data: dogs });
  } catch (error) {
    console.log("El id es inválido:", error);
    res.status(404).json({
      data: "Valor ingresado es incorrecto. Realice una verificación rápida!",
    });
  }
};

const createDogs = async (req, res, next) => {
  try {
    const newDogs = await createDogsInDB(req.body);
    res.status(201).json({ data: newDogs });
  } catch (error) {
    console.log("Lo siento! No se ha creado", error);
    res.status(500).json({ data: error.message });
  }
};

const updateDogsById = async (req, res, next) => {
  const { id } = req.params;
  const newDogs = new Dogs(req.body);
  newDogs._id = id;

  const updateDogs = await updateDogsByIdInDB(id, newDogs);
  return res.status(200).json({ data: updateDogs });
};

const deleteDogsById = async (req, res, next) => {
  const { id } = req.params;
  deleteDogsByIdInDB(id);
  res.status(200).json({ data: "Eliminado!" });
};

module.exports = {
  getAllDogs,
  getDogsById,
  createDogs,
  updateDogsById,
  deleteDogsById,
};