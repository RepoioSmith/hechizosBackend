const express = require('express');
const router = express.Router();
const {
    getCharacters,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../controllers/characterController');

// Obtener todos los personajes
router.get('/', getCharacters);

// Crear un nuevo personaje
router.post('/', createCharacter);

// Actualizar un personaje existente
router.put('/:id', updateCharacter);

// Eliminar un personaje
router.delete('/:id', deleteCharacter);

module.exports = router;
