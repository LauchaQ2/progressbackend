import { Router } from "express";
import { DeleteObraById, createNewObra_Imagenes, getObras_Imagenes } from "../controllers/obras_imagenes.controller.js";

const router = Router()

router.get('/obras_imagenes', getObras_Imagenes)

router.post('/obras_imagenes', createNewObra_Imagenes)

// router.get('/productos',)

router.delete('/obras_imagenes/:id', DeleteObraById)

router.put('/productos',)

export default router;