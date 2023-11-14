import express from 'express';
import { uploadImage } from '../controllers/upload.controller.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

// Definir la ruta para la carga de imágenes
router.post('/upload', upload.single('file'), uploadImage);

export default router;
