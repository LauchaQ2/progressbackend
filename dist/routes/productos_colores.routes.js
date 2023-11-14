"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productos_coloresController = require("../controllers/productos_colores.controller.js");
var router = (0, _express.Router)();
router.get('/productos_colores', _productos_coloresController.getProductos_Colores);
router.post('/productos_colores', _productos_coloresController.createNewProduct_Color);
router.get('/productos_colores/:id', _productos_coloresController.getProductos_ColoresById);
router["delete"]('/productos_colores/:id', _productos_coloresController.DeleteProductos_ColoresById);
router.put('/productos');
var _default = exports["default"] = router;