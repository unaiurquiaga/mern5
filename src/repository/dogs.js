const Dogs = require("../models/dogs");

const getAllDogsFromDB = async (filter) => {
  const filterOptions = {
    $or: [
      { name: { $regex: new RegExp(filter, "i") } },
      { race: { $regex: new RegExp(filter, "i") } },
      { color: { $regex: new RegExp(filter, "i") } },
      { responsiblePerson: { $regex: new RegExp(filter, "i") } },
    ],
  };

  const dogs = await Dogs.find(filter ? filterOptions : {});
  return dogs;
};

const getDogsByIdFromDB = async (id) => {
  const kittens = await Dogs.findById(id);
  return dogs;
};

const createDogsInDB = async (payload) => {
  const newDogs = new Dogs(payload);
  await newDogs.save();

  return newDogs;
};

const updateDogsByIdInDB = async (id, payload) => {
  const kitten = await Dogs.findByIdAndUpdate(id, payload, { new: true });
  return dogs;
};

const deleteDogsByIdInDB = async (id) => {
  await Dogs.deleteOne({ _id: id });
};

module.exports = {
  getAllDogsFromDB,
  getDogsByIdFromDB,
  createDogsInDB,
  updateDogsByIdInDB,
  deleteDogsByIdInDB,
};