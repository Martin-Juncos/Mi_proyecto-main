const { sugerencias } = require("../db/dataBase");

const registrarController = (name, descrip,tipo) => {
  console.log("crear una sugerencia controller");
  if (!name || !descrip) throw new Error();
  const id = sugerencias.length + 1;
  const fechaCrea = Date();
  const newSuge = { id, name, descrip,tipo ,fechaCrea };
  sugerencias.push(newSuge);
  return newSuge;
};

const getAllSugerController = () => {
    console.log("Get todas las sugerencias")
  return sugerencias;
};

module.exports = {
  registrarController,
  getAllSugerController
};
