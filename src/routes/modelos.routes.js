const express = require("express");
const {
  createNewModelo,
  getModelos
} = require("../controllers/modelos.controllers.js");

const router = express.Router();

router.get('/modelos', getModelos);

router.post('/modelos', createNewModelo);

router.get('/productos',);

router.delete('/productos',);

router.put('/productos',);

module.exports = router;
