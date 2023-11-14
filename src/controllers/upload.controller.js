import {authorize,uploadFile} from '../googleDrive.js'

export async function uploadImage(req, res) {
    const file = req.file;
    if (!file) {
      return res.status(400).send('No se seleccionó ningún archivo.');
    }
 
    try {
      const authClient = await authorize();
      const uploadedFile = await uploadFile(authClient, file.originalname);

      res.status(200).json({ fileId: uploadedFile });
    } catch (err) {
      res.status(500).send('Error al subir el archivo a Google Drive: ' + err);
    }
  }

