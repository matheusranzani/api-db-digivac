const mongoose = require("mongoose");

const TextoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    texto: {
        type: String,
        required: true,
    },
    fonte: {
        type: String,
        required: false,
    }

});

module.exports = mongoose.model('Texto', TextoSchema);