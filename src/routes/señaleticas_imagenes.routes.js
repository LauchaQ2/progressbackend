import { Router } from "express";
import { DeleteSeñaleticaById, createNewSeñaletica_Imagenes, getSeñaleticas_Imagenes } from "../controllers/señaleticas_imagenes.controller.js";

const router = Router()

router.get('/senaleticas_imagenes', getSeñaleticas_Imagenes)

router.post('/senaleticas_imagenes', createNewSeñaletica_Imagenes)

// router.get('/productos',)

router.delete('/senaleticas_imagenes/:id',DeleteSeñaleticaById)

router.put('/productos',)

export default router;