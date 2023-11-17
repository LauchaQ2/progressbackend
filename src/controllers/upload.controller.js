const { authorize, uploadFile } = require('../googleDrive.js');
const fs = require('fs').promises;
const path = require('path');

async function uploadImage(req, res) {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No se seleccionó ningún archivo.');
    }

    try {
        const authClient = await authorize();
        const uploadedFile = await uploadFile(authClient, file.originalname);

        try {
            await fs.unlink(path.join('uploads', file.originalname));
        } catch (err) {
            console.error('Error al eliminar el archivo local:', err);
        }
        
        res.status(200).json({ fileId: uploadedFile });
    } catch (err) {
        res.status(500).send('Error al subir el archivo a Google Drive: ' + err);
    }
}

module.exports = { uploadImage };
