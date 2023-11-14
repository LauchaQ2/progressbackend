"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productos_dimensionesController = require("../controllers/productos_dimensiones.controller.js");
var router = (0, _express.Router)();
router.get('/productos_dimensiones', _productos_dimensionesController.getProductos_Dimensiones);
router.post('/productos_dimensiones', _productos_dimensionesController.createNewProduct_Dimension);
router.get('/productos_dimensiones/:id', _productos_dimensionesController.getProductos_DimensionesById);
router["delete"]('/productos_dimensiones/:id', _productos_dimensionesController.DeleteProductos_DimensionesById);
router.put('/productos');
var _default = exports["default"] = router;