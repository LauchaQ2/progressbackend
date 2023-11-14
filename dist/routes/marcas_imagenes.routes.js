"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _marcas_imagenesController = require("../controllers/marcas_imagenes.controller.js");
var router = (0, _express.Router)();
router.get('/marcas_imagenes', _marcas_imagenesController.getMarcas_Imagenes);
router.post('/marcas_imagenes', _marcas_imagenesController.createNewMarca_Imagenes);

// router.get('/productos',)

router["delete"]('/marcas_imagenes/:id', _marcas_imagenesController.DeleteMarcaById);
router.put('/productos');
var _default = exports["default"] = router;