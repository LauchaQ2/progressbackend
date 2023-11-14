"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _modelosControllers = require("../controllers/modelos.controllers.js");
var _usosControllers = require("../controllers/usos.controllers.js");
var router = (0, _express.Router)();
router.get('/usos', _usosControllers.getUsos);
router.post('/usos', _usosControllers.createNewUso);
router.get('/productos');
router["delete"]('/productos');
router.put('/productos');
var _default = exports["default"] = router;