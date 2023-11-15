const express = require("express");
const {
  DeleteProductosById,
  createNewProduct,
  getProductos,
  getProductosById
} = require("../controllers/productos.controller.js");

const router = express.Router();

router.get('/productos', getProductos);

router.post('/productos', createNewProduct);

router.get('/productos/:id', getProductosById);

router.delete('/productos/:id', DeleteProductosById);

router.put('/productos',);

module.exports = router;
