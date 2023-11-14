import { Router } from "express";
import { DeleteProductos_ImagenesById, createNewProduct_Imagenes, getProductos_Imagenes, getProductos_ImagenesById } from "../controllers/productos_imagenes.controller.js";

const router = Router()

router.get('/productos_imagenes', getProductos_Imagenes)

router.post('/productos_imagenes', createNewProduct_Imagenes)

router.get('/productos_imagenes/:id', getProductos_ImagenesById)

router.delete('/productos_imagenes/:id', DeleteProductos_ImagenesById)

router.put('/productos',)

export default router;