"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _publicacionesController = require("../controllers/publicaciones.controller.js");
var router = (0, _express.Router)();
router.get('/publicaciones', _publicacionesController.getPublicaciones);
router.post('/publicaciones', _publicacionesController.createNewPublicacion);

// router.get('/productos',)

router["delete"]('/productos');
router.put('/productos');
var _default = exports["default"] = router;