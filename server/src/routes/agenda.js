const express = require('express');
const router = express.Router();
const { obtenerContactos, obtenerPorId, editarContacto, eliminarContacto, registrarContacto } = require('../controllers/agenda');


router.get('/', obtenerContactos);

router.get('/:id', obtenerPorId);

router.post('/', registrarContacto);

router.put('/:id', editarContacto);

router.delete('/:id', eliminarContacto);

module.exports = router;

