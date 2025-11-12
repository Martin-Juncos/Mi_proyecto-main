// const { ServerRouter } = require("react-router-dom");
// const servidor = require("./backend/app.js");
// //const connectDB = require("./backend/config/db.js");

// const mongoose = require("./backend/config/db.js")
// const PORT = 3002;

// index.js

// 1. Llama a dotenv al inicio (SOLO AQUÍ)
// require('dotenv').config();

const app = require("./app");
const connectDB = require("./config/db");

// PUERTO: Usa el puerto del .env o un valor por defecto
const PORT = 3000;

// FUNCIÓN CRÍTICA: Orquestar la conexión y el inicio
const startServer = async () => {
  try {
    // 🔑 PASO 1: ESPERAR a que la promesa de conexión se resuelva.
    console.log("Conectando a MongoDB...");
    await connectDB();
    console.log(
      "✅ Conexión a MongoDB establecida. Iniciando servidor Express..."
    );

    // 🔑 PASO 2: Solo si la conexión fue exitosa, iniciamos el servidor Express.
    app.listen(PORT, () => {
      console.log(`🚀 Servidor Express escuchando en puerto ${PORT}`);
    });
  } catch (error) {
    console.error("El servidor falló al iniciar. Error:", error.message);
    // process.exit(1); // Ya está en db.js, pero no está de más
  }
};

startServer(); // Llama a la función para iniciar todo

// async function main(){
//     try{
//         await mongoose.conncection;
//         console.log("Conectando")
//         servidor.listen(PORT, console.log(`Server escuchando en puerto ${PORT}`));
//     } catch (error){
//         console.error("Error al conectarnos a la base de datos")
//     }
// }

// main();

// // Función principal asíncrona para manejar la conexión y el inicio del servidor
// const startServer = async () => {
//     try {
//         // PASO 1: Esperar la conexión a la base de datos
//         await connectDB();

//         console.log("Conexión DB establecida. Iniciando servidor Express...");

//         // PASO 2: Iniciar el servidor Express y mantener el proceso de Node vivo
//         servidor.listen(PORT, () => {
//             console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
//         });
//     } catch (error) {
//         // Manejo de errores si falla la conexión a DB o Express
//         console.error("Error al conectar el servidor:", error.message);
//         process.exit(1);
//     }
// };

// startServer();
