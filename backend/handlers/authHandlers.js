const {
  registerController,
  loginController,
} = require("../controllers/authController");

const Joi = require("joi");

const EsquemaUser = Joi.object({
  name: Joi.string().min(2).required(),
  userName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(2).required(),
  role: Joi.string().min(2).required(),
});

const EsquemaLogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(2).required(),
});

const registerHandler = async (req, res) => {
  try {
    const { error } = EsquemaUser.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const { name, userName, email, password, role } = req.body;
    const newUser = await registerController(
      name,
      userName,
      email,
      password,
      role
    );
    return res.status(201).send(newUser);
  } catch (error) {
    if (error.message === "Usuario ya registrado") {
      return res.status(409).send({ error: "Usuario ya registrado" });
    }
    console.error(error);
    return res.status(500).send({ error: "Faltan datos del usuario" });
  }
};

const loginHandler = async (req, res) => {
  try {
    const { error } = EsquemaLogin.validate(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }

    const { email, password } = req.body;
    const user = await loginController(email, password);
    res.status(200).send(user);
  } catch (error) {
    if (
      error.message === "Usuario no encontrado" ||
      error.message === "Credenciales inválidas"
    ) {
      return res.status(401).send({ error: error.message });
    }
    res.status(500).send({ error: "Error en el login" });
  }
};

module.exports = {
  registerHandler,
  loginHandler,
};
