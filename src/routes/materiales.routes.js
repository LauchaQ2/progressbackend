import { Router } from "express";
import { createNewMaterial, getMateriales } from "../controllers/materiales.controller.js";

const router = Router()

router.get('/materiales', getMateriales)

router.post('/materiales', createNewMaterial)

router.get('/productos',)

router.delete('/productos',)

router.put('/productos',)

export default router;