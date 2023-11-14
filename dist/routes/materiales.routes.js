"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _materialesController = require("../controllers/materiales.controller.js");
var router = (0, _express.Router)();
router.get('/materiales', _materialesController.getMateriales);
router.post('/materiales', _materialesController.createNewMaterial);
router.get('/productos');
router["delete"]('/productos');
router.put('/productos');
var _default = exports["default"] = router;