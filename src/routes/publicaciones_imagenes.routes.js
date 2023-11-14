import { Router } from "express";
import { createNewPublicaciones_Imagenes, getPublicaciones_Imagenes } from "../controllers/publicaciones_imagenes.controller.js";

const router = Router()

router.get('/publicaciones_imagenes', getPublicaciones_Imagenes)

router.post('/publicaciones_imagenes', createNewPublicaciones_Imagenes)

// router.get('/productos',)

router.delete('/productos',)

router.put('/productos',)

export default router;