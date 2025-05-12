const mongoose = require("mongoose");

const hechizoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor teclea el nombre"],
        unique: true
    },
    content: {
        type: [String], // Lista de strings como en tu JSON de ejemplo
        required: [true, "Por favor incluye el contenido del hechizo"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Hechizo", hechizoSchema);
