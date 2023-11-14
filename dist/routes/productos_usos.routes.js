"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productos_usosController = require("../controllers/productos_usos.controller.js");
var router = (0, _express.Router)();
router.get('/productos_usos', _productos_usosController.getProductos_Usos);
router.post('/productos_usos', _productos_usosController.createNewProduct_Uso);
router.get('/productos_usos/:id', _productos_usosController.getProductos_UsosById);
router["delete"]('/productos_usos/:id', _productos_usosController.DeleteProductos_UsosById);
router.put('/productos');
var _default = exports["default"] = router;