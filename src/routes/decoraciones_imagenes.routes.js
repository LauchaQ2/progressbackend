const express = require("express");
const {
  DeleteDecoracionById,
  createNewDecoracion_Imagenes,
  getDecoraciones_Imagenes
} = require("../controllers/decoraciones.controller.js");

const router = express.Router();

router.get('/decoraciones_imagenes', getDecoraciones_Imagenes);

router.post('/decoraciones_imagenes', createNewDecoracion_Imagenes);

router.delete('/decoraciones_imagenes/:id', DeleteDecoracionById);

router.put('/productos',);

module.exports = router;
