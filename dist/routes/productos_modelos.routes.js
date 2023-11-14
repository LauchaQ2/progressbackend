"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productos_modelosController = require("../controllers/productos_modelos.controller.js");
var router = (0, _express.Router)();
router.get('/productos_modelos', _productos_modelosController.getProductos_Modelos);
router.post('/productos_modelos', _productos_modelosController.createNewProduct_Modelo);
router.get('/productos_modelos/:id', _productos_modelosController.getProductos_ModelosById);
router["delete"]('/productos_modelos/:id', _productos_modelosController.DeleteProductos_ModelosById);
router.put('/productos');
var _default = exports["default"] = router;