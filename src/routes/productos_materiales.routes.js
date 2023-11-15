const express = require("express");
const {
  DeleteProductos_MaterialesById,
  createNewProduct_Material,
  getProductos_Material,
  getProductos_MaterialById
} = require("../controllers/productos_materiales.controller.js");

const router = express.Router();

router.get('/productos_materiales', getProductos_Material);

router.post('/productos_materiales', createNewProduct_Material);

router.get('/productos_materiales/:id', getProductos_MaterialById);

router.delete('/productos_materiales/:id', DeleteProductos_MaterialesById);

router.put('/productos',);

module.exports = router;
