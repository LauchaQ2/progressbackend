const express = require("express");
const {
  createNewPublicaciones_Imagenes,
  getPublicaciones_Imagenes
} = require("../controllers/publicaciones_imagenes.controller.js");

const router = express.Router();

router.get('/publicaciones_imagenes', getPublicaciones_Imagenes);

router.post('/publicaciones_imagenes', createNewPublicaciones_Imagenes);

router.delete('/productos',);

router.put('/productos',);

module.exports = router;
