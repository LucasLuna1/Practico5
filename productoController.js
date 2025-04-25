const service = require('./productoService');

const listarProductos = (req, res) => {
    const productos = service.obtenerProductos();
    res.status(200).json(productos);
};

const agregarProducto = (req, res) => {
    const nuevo = service.agregarProducto(req.body);
    res.status(201).json({ mensaje: "Producto agregado", producto: nuevo });
};

module.exports = { listarProductos, agregarProducto };
