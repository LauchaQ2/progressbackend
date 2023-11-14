import { google } from 'googleapis'; // Asegúrate de importar googleapis según corresponda
import fs from 'fs';
import { apikeys } from './apikey.js';
import path from 'path';

const SCOPE = ["https://www.googleapis.com/auth/drive"]

export async function authorize() {
  const jwtClient = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    SCOPE
  )
  await jwtClient.authorize()
  return jwtClient;
}

export async function uploadFile(authClient, originalname) {
  const drive = google.drive({ version: 'v3', auth: authClient });

  const fileMetaData = {
    name: originalname, // Nombre del archivo se mantendrá igual
    parents: ["16vR9enaI1p_4apNu3TG8tAbE7cUlu4c4"]
  };

  let mimeType;

  // Lógica para determinar el tipo MIME según la extensión del archivo
  if (originalname.endsWith('.jpg') || originalname.endsWith('.jpeg')) {
    mimeType = 'image/jpeg';
  } else if (originalname.endsWith('.png')) {
    mimeType = 'image/png';
  } else if (originalname.endsWith('.gif')) {
    mimeType = 'image/gif';
  } else {
    // Establece un tipo MIME predeterminado si la extensión no coincide con ninguno de los formatos admitidos
    mimeType = 'application/octet-stream';
  }

  return new Promise((resolve, rejected) => {
    drive.files.create({
      resource: fileMetaData,
      media: {
        body: fs.createReadStream(path.join('uploads', originalname)),
        mimeType,
      },
      fields: 'id'
    }, (err, file) => {
      if (err) {
        return rejected(err);
      }
      resolve(file.data.id);
    });
  });
}
