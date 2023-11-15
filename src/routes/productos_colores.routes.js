const express = require("express");
const {
  DeleteProductos_ColoresById,
  createNewProduct_Color,
  getProductos_Colores,
  getProductos_ColoresById
} = require("../controllers/productos_colores.controller.js");

const router = express.Router();

router.get('/productos_colores', getProductos_Colores);

router.post('/productos_colores', createNewProduct_Color);

router.get('/productos_colores/:id', getProductos_ColoresById);

router.delete('/productos_colores/:id', DeleteProductos_ColoresById);

router.put('/productos',);

module.exports = router;
