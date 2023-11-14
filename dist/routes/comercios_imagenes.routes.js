"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _comercios_imagenesController = require("../controllers/comercios_imagenes.controller.js");
var router = (0, _express.Router)();
router.get('/comercios_imagenes', _comercios_imagenesController.getComercios_Imagenes);
router.post('/comercios_imagenes', _comercios_imagenesController.createNewComercios_Imagenes);

// router.get('/productos',)

router["delete"]('/comercios_imagenes/:id', _comercios_imagenesController.DeleteComercioById);
router.put('/productos');
var _default = exports["default"] = router;