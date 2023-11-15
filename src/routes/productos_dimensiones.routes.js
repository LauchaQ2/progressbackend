const express = require("express");
const {
  DeleteProductos_DimensionesById,
  createNewProduct_Dimension,
  getProductos_Dimensiones,
  getProductos_DimensionesById
} = require("../controllers/productos_dimensiones.controller.js");

const router = express.Router();

router.get('/productos_dimensiones', getProductos_Dimensiones);

router.post('/productos_dimensiones', createNewProduct_Dimension);

router.get('/productos_dimensiones/:id', getProductos_DimensionesById);

router.delete('/productos_dimensiones/:id', DeleteProductos_DimensionesById);

router.put('/productos',);

module.exports = router;
