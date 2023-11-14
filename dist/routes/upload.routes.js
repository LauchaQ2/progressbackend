"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _uploadController = require("../controllers/upload.controller.js");
var _upload = _interopRequireDefault(require("../middlewares/upload.js"));
var router = _express["default"].Router();

// Definir la ruta para la carga de imágenes
router.post('/upload', _upload["default"].single('file'), _uploadController.uploadImage);
var _default = exports["default"] = router;