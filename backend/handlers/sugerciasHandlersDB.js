//const sugerencia = require ("../routes/sugerencias")
const {
  registrarController,
  getAllSugerController,
} = require("../controllers/sugeControllerDB");

const registerHandlerDB = async (req, res) => {
  console.log("➡️ INICIO - Handler de Registro (POST /api/suge)");
  try {
    console.log("Datos del Body recibidos:", req.body);
    console.log(req.body);
    const { Nombre, Descripcion, Categoria } = req.body;

    const newSuge = await registrarController(Nombre, Descripcion, Categoria);
    console.log("⬅️ FIN - Registro exitoso. Enviando respuesta 201.");
    res.status(201).send(newSuge);
  } catch (error) {
    console.error("❌ FALLO en registerHandlerDB. Error:", error.message);
    res
      .status(500)
      .send({ error: "Error al registrar la sugerencia: " + error.message });
  }
};
const getSugerHandlerDB = (req, res) => {
  res.status(200).send("allSuger");
};

// const getSugerHandlerDB = async (req, res) => {
//   console.log("Get todas las sugerencias Handrler JC");
//   try {
//     console.log("handler traer todas las sugerencias 2");

//     const allSuger = await getAllSugerController();
//     console.log(allSuger);

//     if (allSuger.length) {
//       console.log("⬅️ FIN - Get exitoso. Enviando respuesta 201.");

//       res.status(200).send(allSuger);
//     } else {
//       console.error("❌ FALLO 404 en registerHandlerDB. Error:", error.message);

//       res.status(404).send({ error: "No hay sugerencias en la base de datos" });
//     }
//   } catch (error) {
//     console.error("[ERROR GET Sugerencias]:");
//     res
//       .status(500)
//       .send({ error: "Error interno del servidor al obtener sugerencias" });
//   }
// };

module.exports = {
  registerHandlerDB,
  getSugerHandlerDB,
};
