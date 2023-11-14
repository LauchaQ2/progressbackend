import { Router } from "express";
import { DeleteProductos_MaterialesById, createNewProduct_Material, getProductos_Material, getProductos_MaterialById } from "../controllers/productos_materiales.controller.js";

const router = Router()

router.get('/productos_materiales', getProductos_Material)

router.post('/productos_materiales', createNewProduct_Material)

router.get('/productos_materiales/:id', getProductos_MaterialById)

router.delete('/productos_materiales/:id', DeleteProductos_MaterialesById)

router.put('/productos',)

export default router;