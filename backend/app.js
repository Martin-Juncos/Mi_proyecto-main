// backend/app.js (VERSIÓN CORREGIDA)
const express = require("express");
const mainRoutes = require("./routes/mainRoutes");
const app = express();
const path = require("path");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const corsOptions = {
  origin: "http://localhost:5173", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


app.use(express.json());
app.use("/api", mainRoutes);
app.use("/auth", authRoutes);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "..", "frontend")));

//app.get(/.*/, (req, res) => {
//  res.sendFile(path.resolve(__dirname, "public", "index.html"));
//});

module.exports = app;