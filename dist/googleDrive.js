"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authorize = authorize;
exports.uploadFile = uploadFile;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _googleapis = require("googleapis");
var _fs = _interopRequireDefault(require("fs"));
var _apikey = require("./apikey.js");
var _path = _interopRequireDefault(require("path"));
// Asegúrate de importar googleapis según corresponda

var SCOPE = ["https://www.googleapis.com/auth/drive"];
function authorize() {
  return _authorize.apply(this, arguments);
}
function _authorize() {
  _authorize = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var jwtClient;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          jwtClient = new _googleapis.google.auth.JWT(_apikey.apikeys.client_email, null, _apikey.apikeys.private_key, SCOPE);
          _context.next = 3;
          return jwtClient.authorize();
        case 3:
          return _context.abrupt("return", jwtClient);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _authorize.apply(this, arguments);
}
function uploadFile(_x, _x2) {
  return _uploadFile.apply(this, arguments);
}
function _uploadFile() {
  _uploadFile = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(authClient, originalname) {
    var drive, fileMetaData, mimeType;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          drive = _googleapis.google.drive({
            version: 'v3',
            auth: authClient
          });
          fileMetaData = {
            name: originalname,
            // Nombre del archivo se mantendrá igual
            parents: ["16vR9enaI1p_4apNu3TG8tAbE7cUlu4c4"]
          };
          // Lógica para determinar el tipo MIME según la extensión del archivo
          if (originalname.endsWith('.jpg') || originalname.endsWith('.jpeg')) {
            mimeType = 'image/jpeg';
          } else if (originalname.endsWith('.png')) {
            mimeType = 'image/png';
          } else if (originalname.endsWith('.gif')) {
            mimeType = 'image/gif';
          } else {
            // Establece un tipo MIME predeterminado si la extensión no coincide con ninguno de los formatos admitidos
            mimeType = 'application/octet-stream';
          }
          return _context2.abrupt("return", new Promise(function (resolve, rejected) {
            drive.files.create({
              resource: fileMetaData,
              media: {
                body: _fs["default"].createReadStream(_path["default"].join('uploads', originalname)),
                mimeType: mimeType
              },
              fields: 'id'
            }, function (err, file) {
              if (err) {
                return rejected(err);
              }
              resolve(file.data.id);
            });
          }));
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _uploadFile.apply(this, arguments);
}