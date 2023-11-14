import { Router } from "express";
import { DeleteDecoracionById, createNewDecoracion_Imagenes, getDecoraciones_Imagenes } from "../controllers/decoraciones.controller.js";

const router = Router()

router.get('/decoraciones_imagenes', getDecoraciones_Imagenes)

router.post('/decoraciones_imagenes', createNewDecoracion_Imagenes)

// router.get('/productos',)

router.delete('/decoraciones_imagenes/:id', DeleteDecoracionById)

router.put('/productos',)

export default router;