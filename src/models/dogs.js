const mongoose = require("mongoose");

const dogsSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  race: { type: String, required: true, trim: true },
  color: { type: String, required: true, trim: true },
  age: { type: Number, required: true, trim: true },
  responsiblePerson: { type: String, required: true, trim: true },
});

const Dogs = mongoose.model("Dogs", dogsSchema);

module.exports = Dogs;