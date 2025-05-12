const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Character = require("../models/characterModel");

// GET: Obtener todos los personajes
const getCharacters = asyncHandler(async (req, res) => {
  const characters = await Character.find()
    .populate("clase")
    .populate("hechizos");
  res.status(200).json(characters);
});

// POST: Crear personaje
const createCharacter = asyncHandler(async (req, res) => {
  const { nombre, clase, nivel, equipamiento, hechizos } = req.body;

  if (!nombre || !clase || !nivel) {
    res.status(400);
    throw new Error("Faltan datos obligatorios");
  }

  const character = await Character.create({
    nombre,
    clase: new mongoose.Types.ObjectId(clase),
    nivel,
    equipamiento,
    hechizos: hechizos.map((id) => new mongoose.Types.ObjectId(id)),
  });

  res.status(201).json(character);
});

// PUT: Actualizar personaje
const updateCharacter = asyncHandler(async (req, res) => {
  const character = await Character.findById(req.params.id);

  if (!character) {
    res.status(404);
    throw new Error("Personaje no encontrado");
  }

  const { nombre, clase, nivel, equipamiento, hechizos } = req.body;

  const updatedCharacter = await Character.findByIdAndUpdate(
    req.params.id,
    {
      nombre,
      clase,
      nivel,
      equipamiento,
      hechizos,
    },
    { new: true }
  )
    .populate("clase")
    .populate("hechizos");

  res.status(200).json(updatedCharacter);
});

// DELETE: Eliminar personaje
const deleteCharacter = asyncHandler(async (req, res) => {
  const character = await Character.findById(req.params.id);

  if (!character) {
    res.status(404);
    throw new Error("Personaje no encontrado");
  }

  await character.deleteOne();
  res.status(200).json({ mensaje: "Personaje eliminado", id: req.params.id });
});

module.exports = {
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
