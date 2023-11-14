"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productos_materialesController = require("../controllers/productos_materiales.controller.js");
var router = (0, _express.Router)();
router.get('/productos_materiales', _productos_materialesController.getProductos_Material);
router.post('/productos_materiales', _productos_materialesController.createNewProduct_Material);
router.get('/productos_materiales/:id', _productos_materialesController.getProductos_MaterialById);
router["delete"]('/productos_materiales/:id', _productos_materialesController.DeleteProductos_MaterialesById);
router.put('/productos');
var _default = exports["default"] = router;