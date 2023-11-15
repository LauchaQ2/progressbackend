const express = require("express");
const {
  DeleteSeñaleticaById,
  createNewSeñaletica_Imagenes,
  getSeñaleticas_Imagenes
} = require("../controllers/señaleticas_imagenes.controller.js");

const router = express.Router();

router.get('/senaleticas_imagenes', getSeñaleticas_Imagenes);

router.post('/senaleticas_imagenes', createNewSeñaletica_Imagenes);

// router.get('/productos',)

router.delete('/senaleticas_imagenes/:id', DeleteSeñaleticaById);

router.put('/productos',);

module.exports = router;
