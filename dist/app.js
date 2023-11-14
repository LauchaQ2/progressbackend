"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _config = _interopRequireDefault(require("./config.js"));
var _productosRoutes = _interopRequireDefault(require("./routes/productos.routes.js"));
var _productos_coloresRoutes = _interopRequireDefault(require("./routes/productos_colores.routes.js"));
var _productos_materialesRoutes = _interopRequireDefault(require("./routes/productos_materiales.routes.js"));
var _productos_modelosRoutes = _interopRequireDefault(require("./routes/productos_modelos.routes.js"));
var _productos_dimensionesRoutes = _interopRequireDefault(require("./routes/productos_dimensiones.routes.js"));
var _productos_usosRoutes = _interopRequireDefault(require("./routes/productos_usos.routes.js"));
var _productos_imagenesRoutes = _interopRequireDefault(require("./routes/productos_imagenes.routes.js"));
var _carteleria_imagenesRoutes = _interopRequireDefault(require("./routes/carteleria_imagenes.routes.js"));
var _comercios_imagenesRoutes = _interopRequireDefault(require("./routes/comercios_imagenes.routes.js"));
var _decoraciones_imagenesRoutes = _interopRequireDefault(require("./routes/decoraciones_imagenes.routes.js"));
var _marcas_imagenesRoutes = _interopRequireDefault(require("./routes/marcas_imagenes.routes.js"));
var _obras_imagenesRoutes = _interopRequireDefault(require("./routes/obras_imagenes.routes.js"));
var _señaleticas_imagenesRoutes = _interopRequireDefault(require("./routes/se\xF1aleticas_imagenes.routes.js"));
var _coloresRoutes = _interopRequireDefault(require("./routes/colores.routes.js"));
var _materialesRoutes = _interopRequireDefault(require("./routes/materiales.routes.js"));
var _modelosRoutes = _interopRequireDefault(require("./routes/modelos.routes.js"));
var _usosRoutes = _interopRequireDefault(require("./routes/usos.routes.js"));
var _uploadRoutes = _interopRequireDefault(require("./routes/upload.routes.js"));
var _publicacionesRoutes = _interopRequireDefault(require("./routes/publicaciones.routes.js"));
var _publicaciones_imagenesRoutes = _interopRequireDefault(require("./routes/publicaciones_imagenes.routes.js"));
var _cors = _interopRequireDefault(require("cors"));
var app = (0, _express["default"])();

// settings
app.set('port', _config["default"].port || 3000);

// middlewares
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
// app.use(cors({ origin: 'http://127.0.0.1:5173' }));
app.use((0, _cors["default"])({
  origin: ['http://127.0.0.1:5174', 'http://127.0.0.1:5173']
}));
app.use(_productosRoutes["default"]);
app.use(_productos_coloresRoutes["default"]);
app.use(_productos_imagenesRoutes["default"]);
app.use(_productos_materialesRoutes["default"]);
app.use(_productos_modelosRoutes["default"]);
app.use(_productos_dimensionesRoutes["default"]);
app.use(_productos_usosRoutes["default"]);
app.use(_coloresRoutes["default"]);
app.use(_materialesRoutes["default"]);
app.use(_modelosRoutes["default"]);
app.use(_usosRoutes["default"]);
app.use(_uploadRoutes["default"]);
app.use(_publicacionesRoutes["default"]);
app.use(_publicaciones_imagenesRoutes["default"]);
app.use(_carteleria_imagenesRoutes["default"]);
app.use(_comercios_imagenesRoutes["default"]);
app.use(_decoraciones_imagenesRoutes["default"]);
app.use(_marcas_imagenesRoutes["default"]);
app.use(_obras_imagenesRoutes["default"]);
app.use(_señaleticas_imagenesRoutes["default"]);
var _default = exports["default"] = app;