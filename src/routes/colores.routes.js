import { Router } from "express";
import { createNewColor, getColores } from "../controllers/colores.controllers.js";
// import { createNewProduct } from "../controllers/productos.controller.js";

const router = Router()

router.get('/colores', getColores)

router.post('/colores', createNewColor)

router.get('/productos',)

router.delete('/productos',)

router.put('/productos',)

export default router;