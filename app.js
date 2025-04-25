const express = require('express');
const app = express();
const productoRoutes = require('./productoRoutes');

app.use(express.json());
app.use('/productos', productoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`API REST corriendo en http://localhost:${PORT}`);
});
