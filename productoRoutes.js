const express = require('express');
const router = express.Router();
const controller = require('./productoController');

router.get('/', controller.listarProductos);
router.post('/', controller.agregarProducto);

module.exports = router;
