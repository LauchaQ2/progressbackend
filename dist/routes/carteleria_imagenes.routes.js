"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _carteleria_imagenesController = require("../controllers/carteleria_imagenes.controller.js");
var router = (0, _express.Router)();
router.get('/carteleria_imagenes', _carteleria_imagenesController.getCarteleria_Imagenes);
router.post('/carteleria_imagenes', _carteleria_imagenesController.createNewCarteleria_Imagenes);

// router.get('/productos',)

router["delete"]('/carteleria_imagenes/:id', _carteleria_imagenesController.DeleteCarteleriaById);
router.put('/productos');
var _default = exports["default"] = router;