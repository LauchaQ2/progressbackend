const express = require("express");
const {
  DeleteCarteleriaById,
  createNewCarteleria_Imagenes,
  getCarteleria_Imagenes
} = require("../controllers/carteleria_imagenes.controller.js");

const router = express.Router();

router.get('/carteleria_imagenes', getCarteleria_Imagenes);

router.post('/carteleria_imagenes', createNewCarteleria_Imagenes);

// router.get('/productos',)

router.delete('/carteleria_imagenes/:id', DeleteCarteleriaById);

router.put('/productos',);

module.exports = router;
