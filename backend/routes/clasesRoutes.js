const express = require('express');
const router = express.Router();
const { getClases, createClase, updateClase, deleteClase } = require("../controllers/clasesController");

// Obtener todas las clases
router.get('/', getClases);
router.post('/', createClase);
router.put('/:id', updateClase);
router.delete('/:id', deleteClase);

module.exports = router;

