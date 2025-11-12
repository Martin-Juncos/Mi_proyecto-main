const Sugerencia = require("../src/models/sugerencias");
//const Sugerencia = require("../handlers/sugerciasHandlersDB");

const getAllSugerController = async () => {
  console.log("Get todas las sugerencias desde MongoD");
  const sugerencias = await Sugerencia.find({});
  console.log("✅ Datos recuperados de MongoDB:", sugerencias);
  return sugerencias;
};

const registrarController = async (Nombre, Descripcion, Categoria) => {
  console.log("crear una sugerencia controller (MongoDB)");

  if (!Nombre || !Descripcion)
    throw new Error("Nombre y descripción son requeridos");

  const newSuge = new Sugerencia({
    Nombre: Nombre.toUpperCase(),
    Descripcion,
    Categoria,
  });

  await newSuge.save();

  return newSuge;
};

module.exports = {
  registrarController,
  getAllSugerController,
};
