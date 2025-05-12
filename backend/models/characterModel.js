const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor ingresa el nombre del personaje"]
    },
    clase: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clase',
        required: [true, "El personaje debe tener una clase asignada"]
    },
    nivel: {
        type: Number,
        default: 1,
        min: 1
    },
    equipamiento: {
        type: [mongoose.Schema.Types.Mixed], // Lista de objetos o strings según el caso
        default: []
    },
    hechizos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hechizo'
        }
    ]
}, {
    timestamps: true
});

module.exports = mongoose.model("Personaje", characterSchema);
