import { Router } from "express";
import { DeleteComercioById, createNewComercios_Imagenes, getComercios_Imagenes } from "../controllers/comercios_imagenes.controller.js";

const router = Router()

router.get('/comercios_imagenes', getComercios_Imagenes)

router.post('/comercios_imagenes', createNewComercios_Imagenes)

// router.get('/productos',)

router.delete('/comercios_imagenes/:id', DeleteComercioById)

router.put('/productos',)

export default router;