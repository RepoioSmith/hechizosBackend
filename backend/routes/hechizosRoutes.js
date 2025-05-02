const express = require ('express');
const router = express.Router();
const {getHechizos, createHechizos, updateHechizos, deleteHechizos} = require("../controllers/hechizosControllers")



//obtenemos las tareas
router.get('/', getHechizos)
//creamos un hechizo
router.post('/', createHechizos)
//modificamos un hechizo
router.put('/:id', updateHechizos)
//borramos
router.delete('/:id', deleteHechizos)

module.exports = router