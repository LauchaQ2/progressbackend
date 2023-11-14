import { Router } from "express";
import { DeleteProductos_ModelosById, createNewProduct_Modelo, getProductos_Modelos, getProductos_ModelosById } from "../controllers/productos_modelos.controller.js";

const router = Router()

router.get('/productos_modelos', getProductos_Modelos)

router.post('/productos_modelos', createNewProduct_Modelo)

router.get('/productos_modelos/:id', getProductos_ModelosById)

router.delete('/productos_modelos/:id', DeleteProductos_ModelosById)

router.put('/productos',)

export default router;