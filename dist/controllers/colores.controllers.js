"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColores = exports.createNewColor = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var getColores = exports.getColores = /*#__PURE__*/function () {
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
          return pool.request().query(_index.queries.getAllColores);
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
  return function getColores(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createNewColor = exports.createNewColor = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var nombre, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          nombre = req.body.nombre;
          if (!(nombre == null)) {
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
          return pool.request().input('nombre', _index.sql.NVarChar, nombre).query('INSERT INTO colores(nombre) VALUES(@nombre)');
        case 9:
          console.log(nombre);
          res.json("new color");
          _context2.next = 17;
          break;
        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](3);
          res.status(500);
          res.send(_context2.t0.message);
        case 17:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[3, 13]]);
  }));
  return function createNewColor(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();