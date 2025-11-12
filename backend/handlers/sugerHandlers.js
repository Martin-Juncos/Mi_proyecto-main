const { registrarController,getAllSugerController } = require("../controllers/sugerenciasController");

//const Joi = require("joi");

const registerHandler = async (req, res) => {
  console.log("crear una sugerencia handlers");
  console.log(req.body);

  const { name, descrip, tipo } = req.body;
  name2 = name.toUpperCase();
  const newSuge = registrarController(name2, descrip, tipo);
  res.status(201).send(newSuge);
};

const getSugerHandler = (req, res) => {
  console.log("handler trear todas las sugerencias")
  const allSuger = getAllSugerController();
  console.log(allSuger)
  if (allSuger.length)
    res.send(allSuger);
  else{
    res.status(400).send({ error: "No hay sugerencias" });}
  
};

module.exports = {
  registerHandler,
  getSugerHandler
};
