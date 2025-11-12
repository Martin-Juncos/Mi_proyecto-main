//const router = express.Router();
const { Router } = require("express");
//const express = require('express');
const userRoutes = require("./userRoutes");
//const postRoutes = require('./postRoutes')
const mainRoutes = Router();

//const { getSugerHandler } = require("../handlers/sugerciasHandlersDB");

//const sugerencias = require("./sugerencias")

const authRoutes = require("./authRoutes");
const sugeRoutes = require("./sugerenciasRoutes");
// const { getSugerHandlerDB } = require("../handlers/sugerciasHandlersDB");

mainRoutes.get("/sugerencias", sugeRoutes);
//getSugerHandlerDB
mainRoutes.use("/auth", authRoutes);
mainRoutes.use("/user", userRoutes);

module.exports = mainRoutes;
