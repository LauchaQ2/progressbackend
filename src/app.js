const express = require("express");
const config = require("./config.js");
const productsRoutes = require('./routes/productos.routes.js');
const productosColoresRoutes = require('./routes/productos_colores.routes.js');
const productosMaterialesRoutes = require('./routes/productos_materiales.routes.js');
const productosModelosRoutes = require('./routes/productos_modelos.routes.js');
const productosDimensionesRoutes = require('./routes/productos_dimensiones.routes.js');
const productosUsosRoutes = require('./routes/productos_usos.routes.js');
const productosImagenesRoutes = require('./routes/productos_imagenes.routes.js');
const carteleriaImagenesRoutes = require('./routes/carteleria_imagenes.routes.js');
const comerciosImagenesRoutes = require('./routes/comercios_imagenes.routes.js');
const decoracionesImagenesRoutes = require('./routes/decoraciones_imagenes.routes.js');
const marcasImagenesRoutes = require('./routes/marcas_imagenes.routes.js');
const obrasImagenesRoutes = require('./routes/obras_imagenes.routes.js');
const señaleticasImagenesRoutes = require('./routes/señaleticas_imagenes.routes.js');
const coloresRoutes = require('./routes/colores.routes.js');
const materialesRoutes = require('./routes/materiales.routes.js');
const modelosRoutes = require('./routes/modelos.routes.js');
const usosRoutes = require('./routes/usos.routes.js');
const uploadRoutes = require('./routes/upload.routes.js');
const publicacionesRoutes = require('./routes/publicaciones.routes.js');
const publicacionesImagenesRoutes = require('./routes/publicaciones_imagenes.routes.js');
const cors = require('cors');

const app = express();

// settings
app.set('port', config.port || 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(cors({ origin: 'http://127.0.0.1:5173' }));
app.use(cors({ 
    origin: ['http://127.0.0.1:5174','http://127.0.0.1:5173', 'https://progresscrud.netlify.app'] }));

// app.use(productsRoutes);
// app.use(productosColoresRoutes);
// app.use(productosImagenesRoutes);
// app.use(productosMaterialesRoutes);
// app.use(productosModelosRoutes);
// app.use(productosDimensionesRoutes);
// app.use(productosUsosRoutes);
// app.use(coloresRoutes);
// app.use(materialesRoutes);
// app.use(modelosRoutes);
// app.use(usosRoutes);
app.use(uploadRoutes);
// app.use(publicacionesRoutes);
// app.use(publicacionesImagenesRoutes);
// app.use(carteleriaImagenesRoutes);
// app.use(comerciosImagenesRoutes);
// app.use(decoracionesImagenesRoutes);
// app.use(marcasImagenesRoutes);
// app.use(obrasImagenesRoutes);
// app.use(señaleticasImagenesRoutes);

module.exports = app;
