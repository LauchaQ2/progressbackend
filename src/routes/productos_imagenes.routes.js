const express = require("express");
const {
  DeleteProductos_ImagenesById,
  createNewProduct_Imagenes,
  getProductos_Imagenes,
  getProductos_ImagenesById
} = require("../controllers/productos_imagenes.controller.js");

const router = express.Router();

router.get('/productos_imagenes', getProductos_Imagenes);

router.post('/productos_imagenes', createNewProduct_Imagenes);

router.get('/productos_imagenes/:id', getProductos_ImagenesById);

router.delete('/productos_imagenes/:id', DeleteProductos_ImagenesById);

router.put('/productos',);

module.exports = router;
