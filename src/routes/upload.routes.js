const express = require('express');
const { uploadImage } = require('../controllers/upload.controller.js');
const upload = require('../middlewares/upload.js');

const router = express.Router();

// Definir la ruta para la carga de imágenes
router.post('/upload', upload.single('file'), uploadImage);

module.exports = router;
