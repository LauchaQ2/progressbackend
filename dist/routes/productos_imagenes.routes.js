"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productos_imagenesController = require("../controllers/productos_imagenes.controller.js");
var router = (0, _express.Router)();
router.get('/productos_imagenes', _productos_imagenesController.getProductos_Imagenes);
router.post('/productos_imagenes', _productos_imagenesController.createNewProduct_Imagenes);
router.get('/productos_imagenes/:id', _productos_imagenesController.getProductos_ImagenesById);
router["delete"]('/productos_imagenes/:id', _productos_imagenesController.DeleteProductos_ImagenesById);
router.put('/productos');
var _default = exports["default"] = router;