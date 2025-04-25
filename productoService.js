const data = require('./productoData');

function obtenerProductos() {
    return data.listarProductos();
}

function agregarProducto(producto) {
    return data.insertarProducto(producto);
}

module.exports = { obtenerProductos, agregarProducto };
