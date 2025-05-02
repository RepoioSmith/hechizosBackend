const asyncHandler = require('express-async-handler')
const Hechizo = require("../models/hechizosModel")

const getHechizos = asyncHandler(async (req, res) => {
    const hechizos = await Hechizo.find()
    res.status(200).json({ hechizos })
})

const createHechizos = asyncHandler(async (req, res) => {
    if (!req.body.nombre||!req.body.nivel || !req.body.rango || !req.body.descripcion) {
        res.status(400)
        throw new Error("Informacion incompleta")
    }

    const hechizo = await Hechizo.create({
        nombre: req.body.nombre,
        nivel: req.body.nivel,
        rango: req.body.rango,
        descripcion: req.body.descripcion
    })

    res.status(201).json({ hechizo })
})

const updateHechizos = asyncHandler(async (req, res) => {

    const hechizo = await Hechizo.findById(req.params.id)
    if (!hechizo) {
        res.status(404)
        throw new Error('Tarea no encontrada')
    }

    const hechizosUpdated = await Hechizo.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(hechizosUpdated)
})

const deleteHechizos = asyncHandler(async (req, res) => {

    const hechizo = await Hechizo.findById(req.params.id)
    if (!hechizo) {
        res.status(404)
        throw new Error('Tarea no encontrada')
    }

    await hechizo.deleteOne()

    res.status(200).json({ "id": req.params.id })
})

module.exports = {
    getHechizos,
    createHechizos,
    updateHechizos,
    deleteHechizos
}