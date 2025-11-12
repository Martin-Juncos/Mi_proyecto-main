const { Router } = require('express');

const {
    getUserHandler,
    getUserByIdHandler,
    createUserHandler,
    putUserHandler,
    deleteUserHandler,
} = require ("../handlers/userHandlers.js");

const userRoutes = Router();

//const verifyToken = require("../middlware/verifyToken");

userRoutes.get("/", getUserHandler);
userRoutes.get("/:id", getUserByIdHandler);
userRoutes.post("/", createUserHandler);
userRoutes.put("/:id",putUserHandler);
userRoutes.delete("/:id",deleteUserHandler);

//userRoutes.post("/surg", createSugerencia);

module.exports = userRoutes