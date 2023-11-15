const express = require('express');
const { createNewModelo, getModelos } = require('../controllers/modelos.controllers.js');
const { createNewUso, getUsos } = require('../controllers/usos.controllers.js');

const router = express.Router();

router.get('/usos', getUsos);

router.post('/usos', createNewUso);

router.get('/productos',);

router.delete('/productos',);

router.put('/productos',);

module.exports = router;
