const express = require("express");
const {
  createNewColor,
  getColores
} = require("../controllers/colores.controllers.js");
// const { createNewProduct } = require("../controllers/productos.controller.js");

const router = express.Router();

router.get('/colores', getColores);

router.post('/colores', createNewColor);

router.get('/productos',);

router.delete('/productos',);

router.put('/productos',);

module.exports = router;
