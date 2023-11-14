"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadImage = uploadImage;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _googleDrive = require("../googleDrive.js");
function uploadImage(_x, _x2) {
  return _uploadImage.apply(this, arguments);
}
function _uploadImage() {
  _uploadImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var file, authClient, uploadedFile;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          file = req.file;
          if (file) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", res.status(400).send('No se seleccionó ningún archivo.'));
        case 3:
          _context.prev = 3;
          _context.next = 6;
          return (0, _googleDrive.authorize)();
        case 6:
          authClient = _context.sent;
          _context.next = 9;
          return (0, _googleDrive.uploadFile)(authClient, file.originalname);
        case 9:
          uploadedFile = _context.sent;
          res.status(200).json({
            fileId: uploadedFile
          });
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);
          res.status(500).send('Error al subir el archivo a Google Drive: ' + _context.t0);
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[3, 13]]);
  }));
  return _uploadImage.apply(this, arguments);
}