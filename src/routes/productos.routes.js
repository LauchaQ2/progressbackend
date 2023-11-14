import { Router } from "express";
import { DeleteProductosById, createNewProduct, getProductos, getProductosById } from "../controllers/productos.controller.js";

const router = Router()

router.get('/productos', getProductos)

router.post('/productos', createNewProduct)

router.get('/productos/:id', getProductosById)

router.delete('/productos/:id', DeleteProductosById)

router.put('/productos',)

export default router;