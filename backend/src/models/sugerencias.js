
const mongoose = require('mongoose');
const SugerenciaSchema = new mongoose.Schema({
    
    Nombre: {
        type: String,
        required: true,
        trim: true,
    },
    Descripcion: { 
        type: String,
        required: true,
    },
    Categoria: {
        type: String,
    }
}, {
    
    collection: 'sugerencias' 
});

const sugerencia = mongoose.model('sugerencia', SugerenciaSchema);

console.log("Coleccion")
console.log(sugerencia)
module.exports = sugerencia;