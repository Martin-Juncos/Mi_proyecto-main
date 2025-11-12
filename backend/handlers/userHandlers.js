const {
  createUserController,
  getAllUserController,
  getUserByNameController,
  getOneUserController,
  updateUserController,
  deleteUserController,
} = require("../controllers/userControllers");

const Joi = require("joi");

const esquemaUser = Joi.object({
  name: Joi.string().min(2).required(),
  userName: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
});

const getUserHandler = (req, res) => {
  const { name } = req.query;
  console.log("GET User Handler");
  try {
    if (name) {
      const userByName = getUserByNameController(name);
      res.send(userByName);
    } else {
      const allUsers = getAllUserController();
      res.send(allUsers);
    }
  } catch (error) {
    res.status(400).send({ error: "No hay usuarios" });
  }
};

const getUserByIdHandler = (req, res) => {
  try {
    const { id } = req.params;
    const userById = getOneUserController(id);
    res.send(userById);
  } catch (error) {
    res.status(400).send({ error: "No se encontro el usuario" });
  }
};

const createUserHandler = (req, res) => {
  console.log("Creando usuario UserHandlers");
  //console.log("Body recibido:", req.body);
  //console.log(esquemaUser);
  try {
    const { error } = esquemaUser.validate(req.body);
    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      const { name, userName, email } = req.body;
      const newUser = createUserController(name, userName, email);
      res.status(201).send(newUser);
    }
  } catch (error) {
    res.status(500).send({ error: "Faltan datos al usuario" });
  }
};

const putUserHandler = (req, res) => {
  const { name, userName, email } = req.body;
  const { id } = req.params;
  const newUserData = updateUserController(id, name, userName, email);
  res.send(newUserData);
};

const deleteUserHandler = (req, res) => {
  const { id } = req.params;
  const deleteUser = deleteUserController(id);
  res.send(deleteUser);
};

module.exports = {
  getUserHandler,
  getUserByIdHandler,
  createUserHandler,
  putUserHandler,
  deleteUserHandler,
};
