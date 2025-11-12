const { Router } = require("express");
// const { getSugerHandlerDB } = require("../handlers/sugerciasHandlersDB");

const sugeRoutes = Router();

// sugeRoutes.post('/registrar', registerHandler)
sugeRoutes.get("/", (req, res) => {
  res.status(200).send("allSuger");
});

module.exports = sugeRoutes;
