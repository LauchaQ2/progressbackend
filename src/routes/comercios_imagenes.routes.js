const express = require("express");
const {
  DeleteComercioById,
  createNewComercios_Imagenes,
  getComercios_Imagenes
} = require("../controllers/comercios_imagenes.controller.js");

const router = express.Router();

router.get('/comercios_imagenes', getComercios_Imagenes);

router.post('/comercios_imagenes', createNewComercios_Imagenes);

router.delete('/comercios_imagenes/:id', DeleteComercioById);

router.put('/productos',);

module.exports = router;
