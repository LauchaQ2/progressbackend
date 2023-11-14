"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productosController = require("../controllers/productos.controller.js");
var router = (0, _express.Router)();
router.get('/productos', _productosController.getProductos);
router.post('/productos', _productosController.createNewProduct);
router.get('/productos/:id', _productosController.getProductosById);
router["delete"]('/productos/:id', _productosController.DeleteProductosById);
router.put('/productos');
var _default = exports["default"] = router;