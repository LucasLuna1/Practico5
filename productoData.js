let productos = [];

function listarProductos() {
    return productos;
}

function insertarProducto(producto) {
    productos.push(producto);
    return producto;
}

module.exports = { listarProductos, insertarProducto };
