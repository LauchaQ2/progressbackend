"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObras_Imagenes = exports.createNewObra_Imagenes = exports.DeleteObraById = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var getObras_Imagenes = exports.getObras_Imagenes = /*#__PURE__*/function () {
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
          return pool.request().query(_index.queries.getAllObras_Imagenes);
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
  return function getObras_Imagenes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createNewObra_Imagenes = exports.createNewObra_Imagenes = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var image_path, pool, result, insertedId;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          image_path = req.body.image_path;
          if (!(image_path == null)) {
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
          return pool.request().input('image_path', _index.sql.NVarChar, image_path).query('INSERT INTO obras_imagenes( image_path) OUTPUT INSERTED.id VALUES(@image_path)');
        case 9:
          result = _context2.sent;
          insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado
          console.log("Nuevo obras_imagenes insertado con ID: ".concat(insertedId));
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
  return function createNewObra_Imagenes(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var DeleteObraById = exports.DeleteObraById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return (0, _index.getConnection)();
        case 4:
          pool = _context3.sent;
          _context3.next = 7;
          return pool.request().input('id', id).query('DELETE FROM obras_imagenes where id = @id');
        case 7:
          result = _context3.sent;
          console.log(result);
          res.json(result.recordset);
          _context3.next = 16;
          break;
        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](1);
          res.status(500);
          res.send(_context3.t0.message);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 12]]);
  }));
  return function DeleteObraById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();