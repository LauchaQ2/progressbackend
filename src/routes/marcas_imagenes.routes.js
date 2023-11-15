const express = require("express");
const {
  DeleteMarcaById,
  createNewMarca_Imagenes,
  getMarcas_Imagenes
} = require("../controllers/marcas_imagenes.controller.js");

const router = express.Router();

router.get('/marcas_imagenes', getMarcas_Imagenes);

router.post('/marcas_imagenes', createNewMarca_Imagenes);

router.delete('/marcas_imagenes/:id', DeleteMarcaById);

router.put('/productos',);

module.exports = router;
