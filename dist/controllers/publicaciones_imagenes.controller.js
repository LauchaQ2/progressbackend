"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPublicaciones_Imagenes = exports.createNewPublicaciones_Imagenes = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var getPublicaciones_Imagenes = exports.getPublicaciones_Imagenes = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _index.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_index.queries.getAllPublicaciones_Imagenes);
        case 6:
          result = _context.sent;
          console.log(result);
          res.json(result.recordset);
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getPublicaciones_Imagenes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createNewPublicaciones_Imagenes = exports.createNewPublicaciones_Imagenes = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, publicacion_id, image_path, pool, result, insertedId;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, publicacion_id = _req$body.publicacion_id, image_path = _req$body.image_path;
          if (!(publicacion_id == null || image_path == null)) {
            _context2.next = 3;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            msg: 'Bad Request. Fill all fields'
          }));
        case 3:
          _context2.prev = 3;
          _context2.next = 6;
          return (0, _index.getConnection)();
        case 6:
          pool = _context2.sent;
          _context2.next = 9;
          return pool.request().input('publicacion_id', _index.sql.Int, publicacion_id).input('image_path', _index.sql.NVarChar, image_path).query('INSERT INTO publicaciones_imagenes(publicacion_id, image_path) OUTPUT INSERTED.id VALUES(@publicacion_id, @image_path)');
        case 9:
          result = _context2.sent;
          insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado
          console.log("Nuevo publicaciones_imagenes insertado con ID: ".concat(insertedId));
          res.json({
            id: insertedId,
            msg: 'New product created'
          });
          _context2.next = 19;
          break;
        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](3);
          res.status(500);
          res.send(_context2.t0.message);
        case 19:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 15]]);
  }));
  return function createNewPublicaciones_Imagenes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();