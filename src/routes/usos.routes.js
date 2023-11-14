import { Router } from "express";
import { createNewModelo, getModelos } from "../controllers/modelos.controllers.js";
import { createNewUso, getUsos } from "../controllers/usos.controllers.js";

const router = Router()

router.get('/usos', getUsos)

router.post('/usos', createNewUso)

router.get('/productos',)

router.delete('/productos',)

router.put('/productos',)

export default router;