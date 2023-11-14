"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _publicaciones_imagenesController = require("../controllers/publicaciones_imagenes.controller.js");
var router = (0, _express.Router)();
router.get('/publicaciones_imagenes', _publicaciones_imagenesController.getPublicaciones_Imagenes);
router.post('/publicaciones_imagenes', _publicaciones_imagenesController.createNewPublicaciones_Imagenes);

// router.get('/productos',)

router["delete"]('/productos');
router.put('/productos');
var _default = exports["default"] = router;