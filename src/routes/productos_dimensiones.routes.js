import { Router } from "express";
import { DeleteProductos_DimensionesById, createNewProduct_Dimension, getProductos_Dimensiones, getProductos_DimensionesById } from "../controllers/productos_dimensiones.controller.js";

const router = Router()

router.get('/productos_dimensiones', getProductos_Dimensiones)

router.post('/productos_dimensiones', createNewProduct_Dimension)

router.get('/productos_dimensiones/:id',getProductos_DimensionesById)

router.delete('/productos_dimensiones/:id', DeleteProductos_DimensionesById)

router.put('/productos',)

export default router;