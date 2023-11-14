import { Router } from "express";
import { createNewModelo, getModelos } from "../controllers/modelos.controllers.js";

const router = Router()

router.get('/modelos', getModelos)

router.post('/modelos', createNewModelo)

router.get('/productos',)

router.delete('/productos',)

router.put('/productos',)

export default router;