"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _decoracionesController = require("../controllers/decoraciones.controller.js");
var router = (0, _express.Router)();
router.get('/decoraciones_imagenes', _decoracionesController.getDecoraciones_Imagenes);
router.post('/decoraciones_imagenes', _decoracionesController.createNewDecoracion_Imagenes);

// router.get('/productos',)

router["delete"]('/decoraciones_imagenes/:id', _decoracionesController.DeleteDecoracionById);
router.put('/productos');
var _default = exports["default"] = router;