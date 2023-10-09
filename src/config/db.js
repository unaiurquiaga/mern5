const mongoose = require("mongoose");

mongoose.set("strict", false);
mongoose.set("strictQuery", false);
mongoose.set("strictPopulate", false);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conectado a MongoDB 🐕"))
  .catch((error) => console.log("Error al conectarse a MongoDB 🐕", error));