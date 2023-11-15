const express = require("express");
const {
  DeleteProductos_UsosById,
  createNewProduct_Uso,
  getProductos_Usos,
  getProductos_UsosById
} = require("../controllers/productos_usos.controller.js");

const router = express.Router();

router.get('/productos_usos', getProductos_Usos);

router.post('/productos_usos', createNewProduct_Uso);

router.get('/productos_usos/:id', getProductos_UsosById);

router.delete('/productos_usos/:id', DeleteProductos_UsosById);

router.put('/productos',);

module.exports = router;
