const express = require("express");
const {
  createNewMaterial,
  getMateriales
} = require("../controllers/materiales.controller.js");

const router = express.Router();

router.get('/materiales', getMateriales);

router.post('/materiales', createNewMaterial);

router.get('/productos',);

router.delete('/productos',);

router.put('/productos',);

module.exports = router;
