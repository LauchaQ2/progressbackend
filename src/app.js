import express from "express";
import config from "./config.js";
import productsRoutes from './routes/productos.routes.js'
import productosColoresRoutes from './routes/productos_colores.routes.js'
import productosMaterialesRoutes from './routes/productos_materiales.routes.js'
import productosModelosRoutes from './routes/productos_modelos.routes.js'
import productosDimensionesRoutes from './routes/productos_dimensiones.routes.js'
import productosUsosRoutes from './routes/productos_usos.routes.js'
import productosImagenesRoutes from './routes/productos_imagenes.routes.js'
import carteleriaImagenesRoutes from './routes/carteleria_imagenes.routes.js'
import comerciosImagenesRoutes from './routes/comercios_imagenes.routes.js'
import decoracionesImagenesRoutes from './routes/decoraciones_imagenes.routes.js'
import marcasImagenesRoutes from './routes/marcas_imagenes.routes.js'
import obrasImagenesRoutes from './routes/obras_imagenes.routes.js'
import señaleticasImagenesRoutes from './routes/señaleticas_imagenes.routes.js'
import coloresRoutes from './routes/colores.routes.js'
import materialesRoutes from './routes/materiales.routes.js'
import modelosRoutes from './routes/modelos.routes.js'
import usosRoutes from './routes/usos.routes.js'
import uploadRoutes from './routes/upload.routes.js'
import publicacionesRoutes from './routes/publicaciones.routes.js'
import publicacionesImagenesRoutes from './routes/publicaciones_imagenes.routes.js'

import cors from 'cors';


const app = express()


// settings
app.set('port', config.port || 3000)

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(cors({ origin: 'http://127.0.0.1:5173' }));
app.use(cors({ 
    origin: ['http://127.0.0.1:5174','http://127.0.0.1:5173'] }));




app.use(productsRoutes)
app.use(productosColoresRoutes)
app.use(productosImagenesRoutes)
app.use(productosMaterialesRoutes)
app.use(productosModelosRoutes)
app.use(productosDimensionesRoutes)
app.use(productosUsosRoutes)
app.use(coloresRoutes)
app.use(materialesRoutes)
app.use(modelosRoutes)
app.use(usosRoutes)
app.use(uploadRoutes)
app.use(publicacionesRoutes)
app.use(publicacionesImagenesRoutes)
app.use(carteleriaImagenesRoutes)
app.use(comerciosImagenesRoutes)
app.use(decoracionesImagenesRoutes)
app.use(marcasImagenesRoutes)
app.use(obrasImagenesRoutes)
app.use(señaleticasImagenesRoutes)




export default app