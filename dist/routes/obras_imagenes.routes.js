"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _obras_imagenesController = require("../controllers/obras_imagenes.controller.js");
var router = (0, _express.Router)();
router.get('/obras_imagenes', _obras_imagenesController.getObras_Imagenes);
router.post('/obras_imagenes', _obras_imagenesController.createNewObra_Imagenes);

// router.get('/productos',)

router["delete"]('/obras_imagenes/:id', _obras_imagenesController.DeleteObraById);
router.put('/productos');
var _default = exports["default"] = router;