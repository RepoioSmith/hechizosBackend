const asyncHandler = require('express-async-handler');
const Clase = require('../models/clasesModel');

// Obtener todas las clases
const getClases = asyncHandler(async (req, res) => {
    const clases = await Clase.find();
    res.status(200).json({ clases });
});

// Crear una nueva clase
const createClase = asyncHandler(async (req, res) => {
    const { nombre, caracteristicas_clase } = req.body;

    if (!nombre || !caracteristicas_clase) {
        res.status(400);
        throw new Error("Información incompleta");
    }

    const nuevaClase = await Clase.create({
        nombre,
        caracteristicas_clase
    });

    res.status(201).json(nuevaClase);
});

// Actualizar una clase
const updateClase = asyncHandler(async (req, res) => {
    const clase = await Clase.findById(req.params.id);
    if (!clase) {
        res.status(404);
        throw new Error("Clase no encontrada");
    }

    const { nombre, caracteristicas_clase } = req.body;

    const claseActualizada = await Clase.findByIdAndUpdate(
        req.params.id,
        {
            nombre,
            caracteristicas_clase
        },
        { new: true }
    );

    res.status(200).json(claseActualizada);
});

// Eliminar una clase
const deleteClase = asyncHandler(async (req, res) => {
    const clase = await Clase.findById(req.params.id);
    if (!clase) {
        res.status(404);
        throw new Error("Clase no encontrada");
    }

    await clase.deleteOne();

    res.status(200).json({ mensaje: "Clase eliminada", id: req.params.id });
});

module.exports = {
    getClases,
    createClase,
    updateClase,
    deleteClase
};
