import { Router } from "express";
import { createNewPublicacion, getPublicaciones } from "../controllers/publicaciones.controller.js";

const router = Router()

router.get('/publicaciones', getPublicaciones)

router.post('/publicaciones', createNewPublicacion)

// router.get('/productos',)

router.delete('/productos',)

router.put('/productos',)

export default router;