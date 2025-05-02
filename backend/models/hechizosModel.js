const mongoose = require("mongoose")

const hechizoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "Por favor teclea el nombre"]
    },
    nivel: {
        type: String,
        required: [true, "Por favor teclea el nivel"]
    },
    rango:{
        type: String,
        required: [true, "Por favor teclea el rango"]
    },
    descripcion:{
        type: String,
        required: [true, "Por favor teclea la descripcion"]
    },

},{
    timestamps: true
})

module.exports = mongoose.model("Hechizo", hechizoSchema)