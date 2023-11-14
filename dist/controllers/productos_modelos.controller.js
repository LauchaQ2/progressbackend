"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductos_ModelosById = exports.getProductos_Modelos = exports.createNewProduct_Modelo = exports.DeleteProductos_ModelosById = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = require("../database/index.js");
var getProductos_Modelos = exports.getProductos_Modelos = /*#__PURE__*/function () {
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
          return pool.request().query(_index.queries.getAllProductos_Modelos);
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
  return function getProductos_Modelos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getProductos_ModelosById = exports.getProductos_ModelosById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var id, pool, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return (0, _index.getConnection)();
        case 4:
          pool = _context2.sent;
          _context2.next = 7;
          return pool.request().input('id', id).query('SELECT * FROM productos_modelos as pm inner join modelos as m on m.id = pm.modelo_id where producto_id = @id');
        case 7:
          result = _context2.sent;
          console.log(result);
          res.json(result.recordset);
          _context2.next = 16;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          res.status(500);
          res.send(_context2.t0.message);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return function getProductos_ModelosById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var DeleteProductos_ModelosById = exports.DeleteProductos_ModelosById = /*#__PURE__*/function () {
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
          return pool.request().input('id', id).query('DELETE FROM productos_modelos where producto_id = @id');
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
  return function DeleteProductos_ModelosById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var createNewProduct_Modelo = exports.createNewProduct_Modelo = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _req$body, producto_id, modelo_id, pool, result, insertedId;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$body = req.body, producto_id = _req$body.producto_id, modelo_id = _req$body.modelo_id;
          if (!(producto_id == null || modelo_id == null)) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            msg: 'Bad Request. Fill all fields'
          }));
        case 3:
          _context4.prev = 3;
          _context4.next = 6;
          return (0, _index.getConnection)();
        case 6:
          pool = _context4.sent;
          _context4.next = 9;
          return pool.request().input('producto_id', _index.sql.Int, producto_id).input('modelo_id', _index.sql.Int, modelo_id).query('INSERT INTO productos_modelos(producto_id, modelo_id) OUTPUT INSERTED.id VALUES(@producto_id, @modelo_id)');
        case 9:
          result = _context4.sent;
          insertedId = result.recordset[0].id; // Obtiene el ID del producto insertado
          console.log("Nuevo productos_modelos insertado con ID: ".concat(insertedId));
          res.json({
            id: insertedId,
            msg: 'New product created'
          });
          _context4.next = 19;
          break;
        case 15:
          _context4.prev = 15;
          _context4.t0 = _context4["catch"](3);
          res.status(500);
          res.send(_context4.t0.message);
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 15]]);
  }));
  return function createNewProduct_Modelo(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();