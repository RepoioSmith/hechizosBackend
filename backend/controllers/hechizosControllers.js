const asyncHandler = require('express-async-handler');
const Hechizo = require("../models/hechizosModel");

// Obtener todos los hechizos
const getHechizos = asyncHandler(async (req, res) => {
    const hechizos = await Hechizo.find();
    res.status(200).json({ hechizos });
});

// Crear un nuevo hechizo
const createHechizos = asyncHandler(async (req, res) => {
    const { nombre, content } = req.body;

    if (!nombre || !content || !Array.isArray(content)) {
        res.status(400);
        throw new Error("Información incompleta o formato incorrecto");
    }

    const hechizoExistente = await Hechizo.findOne({ nombre });
    if (hechizoExistente) {
        res.status(400);
        throw new Error("El hechizo ya existe");
    }

    const hechizo = await Hechizo.create({ nombre, content });

    res.status(201).json(hechizo);
});

// Actualizar un hechizo existente
const updateHechizos = asyncHandler(async (req, res) => {
    const hechizo = await Hechizo.findById(req.params.id);
    if (!hechizo) {
        res.status(404);
        throw new Error('Hechizo no encontrado');
    }

    const { nombre, content } = req.body;

    if (!nombre || !content || !Array.isArray(content)) {
        res.status(400);
        throw new Error("Información incompleta o formato incorrecto");
    }

    hechizo.nombre = nombre;
    hechizo.content = content;

    const hechizoActualizado = await hechizo.save();

    res.status(200).json(hechizoActualizado);
});

// Eliminar un hechizo
const deleteHechizos = asyncHandler(async (req, res) => {
    const hechizo = await Hechizo.findById(req.params.id);
    if (!hechizo) {
        res.status(404);
        throw new Error('Hechizo no encontrado');
    }

    await hechizo.deleteOne();

    res.status(200).json({ mensaje: "Hechizo eliminado", id: req.params.id });
});

module.exports = {
    getHechizos,
    createHechizos,
    updateHechizos,
    deleteHechizos
};
