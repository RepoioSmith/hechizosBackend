const mongoose = require('mongoose');

const claseSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor teclea el nombre"],
        unique: true
    },
    caracteristicas_clase: {
        content: {
            type: String,
            required: [true, "Por favor incluye el contenido"]
        },
        hit_points: {
            type: [String], // lista como la de "Hit Dice", "Hit Points at 1st Level", etc.
            required: [true, "Por favor incluye los puntos de golpe"]
        },
        proficiencias: {
            type: [String], // lista de proficiencias con formato markdown
            required: [true, "Por favor incluye las proficiencias"]
        },
        equipamiento: {
            type: [mongoose.Schema.Types.Mixed], // acepta strings y arrays (como en tu JSON)
            required: [true, "Por favor incluye el equipamiento"]
        },
        tabla_clase: {
            type: Map,
            of: [String] // cada campo como "Level", "Features", "1st", etc. con su lista correspondiente
        },
        tabla_hechizos:{
            type: Map,
            of: [String] // cada campo como "Level", "Features", "1st", etc. con su lista correspondiente
        }
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Clase", claseSchema);
