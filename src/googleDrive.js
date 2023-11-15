const { google } = require('googleapis');
const fs = require('fs');
const { apikeys } = require('./apikey.js');
const path = require('path');

const SCOPE = ["https://www.googleapis.com/auth/drive"];

function authorize() {
  const jwtClient = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    SCOPE
  );

  return new Promise((resolve, reject) => {
    jwtClient.authorize((err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(jwtClient);
    });
  });
}

function uploadFile(authClient, originalname) {
  const drive = google.drive({ version: 'v3', auth: authClient });

  const fileMetaData = {
    name: originalname,
    parents: ["16vR9enaI1p_4apNu3TG8tAbE7cUlu4c4"]
  };

  let mimeType;

  if (originalname.endsWith('.jpg') || originalname.endsWith('.jpeg')) {
    mimeType = 'image/jpeg';
  } else if (originalname.endsWith('.png')) {
    mimeType = 'image/png';
  } else if (originalname.endsWith('.gif')) {
    mimeType = 'image/gif';
  } else {
    mimeType = 'application/octet-stream';
  }

  return new Promise((resolve, reject) => {
    drive.files.create({
      resource: fileMetaData,
      media: {
        body: fs.createReadStream(path.join('uploads', originalname)),
        mimeType,
      },
      fields: 'id'
    }, (err, file) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(file.data.id);
    });
  });
}

module.exports = { authorize, uploadFile };
