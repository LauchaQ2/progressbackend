import { Router } from "express";
import { DeleteCarteleriaById, createNewCarteleria_Imagenes, getCarteleria_Imagenes } from "../controllers/carteleria_imagenes.controller.js";

const router = Router()

router.get('/carteleria_imagenes', getCarteleria_Imagenes)

router.post('/carteleria_imagenes', createNewCarteleria_Imagenes)

// router.get('/productos',)

router.delete('/carteleria_imagenes/:id', DeleteCarteleriaById)

router.put('/productos',)

export default router;