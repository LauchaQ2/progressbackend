"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var storage = _multer["default"].diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, 'uploads'); // Carpeta donde se guardarán los archivos subidos
  },

  filename: function filename(req, file, cb) {
    console.log(file);
    cb(null, file.originalname); // Nombre del archivo se mantendrá igual
  }
});

var upload = (0, _multer["default"])({
  storage: storage
});
var _default = exports["default"] = upload;