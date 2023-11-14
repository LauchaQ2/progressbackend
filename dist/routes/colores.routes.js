"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _coloresControllers = require("../controllers/colores.controllers.js");
// import { createNewProduct } from "../controllers/productos.controller.js";

var router = (0, _express.Router)();
router.get('/colores', _coloresControllers.getColores);
router.post('/colores', _coloresControllers.createNewColor);
router.get('/productos');
router["delete"]('/productos');
router.put('/productos');
var _default = exports["default"] = router;