const express = require("express");
const {
  createNewPublicacion,
  getPublicaciones
} = require("../controllers/publicaciones.controller.js");

const router = express.Router();

router.get('/publicaciones', getPublicaciones);

router.post('/publicaciones', createNewPublicacion);

router.delete('/productos',);

router.put('/productos',);

module.exports = router;
