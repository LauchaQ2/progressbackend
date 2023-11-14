import { Router } from "express";
import { DeleteMarcaById, createNewMarca_Imagenes, getMarcas_Imagenes } from "../controllers/marcas_imagenes.controller.js";

const router = Router()

router.get('/marcas_imagenes', getMarcas_Imagenes)

router.post('/marcas_imagenes', createNewMarca_Imagenes)

// router.get('/productos',)

router.delete('/marcas_imagenes/:id', DeleteMarcaById)

router.put('/productos',)

export default router;