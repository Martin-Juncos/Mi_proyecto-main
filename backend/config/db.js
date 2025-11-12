// backend/config/db.js
const mongoose = require("mongoose");

// Cargar variables de entorno (si usas un archivo .env)

const MONGO_URI = "mongodb://localhost:27017/proyecto";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log(
      "MongoDB conectado con éxito. (URL: " + MONGO_URI.split("@").pop() + ")"
    );
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
