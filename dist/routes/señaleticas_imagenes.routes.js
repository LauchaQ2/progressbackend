"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _señaleticas_imagenesController = require("../controllers/se\xF1aleticas_imagenes.controller.js");
var router = (0, _express.Router)();
router.get('/senaleticas_imagenes', _señaleticas_imagenesController.getSeñaleticas_Imagenes);
router.post('/senaleticas_imagenes', _señaleticas_imagenesController.createNewSeñaletica_Imagenes);

// router.get('/productos',)

router["delete"]('/senaleticas_imagenes/:id', _señaleticas_imagenesController.DeleteSeñaleticaById);
router.put('/productos');
var _default = exports["default"] = router;