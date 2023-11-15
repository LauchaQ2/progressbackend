const express = require("express");
const {
  DeleteObraById,
  createNewObra_Imagenes,
  getObras_Imagenes
} = require("../controllers/obras_imagenes.controller.js");

const router = express.Router();

router.get('/obras_imagenes', getObras_Imagenes);

router.post('/obras_imagenes', createNewObra_Imagenes);

router.delete('/obras_imagenes/:id', DeleteObraById);

router.put('/productos',);

module.exports = router;
