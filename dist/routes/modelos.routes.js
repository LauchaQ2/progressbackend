"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _modelosControllers = require("../controllers/modelos.controllers.js");
var router = (0, _express.Router)();
router.get('/modelos', _modelosControllers.getModelos);
router.post('/modelos', _modelosControllers.createNewModelo);
router.get('/productos');
router["delete"]('/productos');
router.put('/productos');
var _default = exports["default"] = router;