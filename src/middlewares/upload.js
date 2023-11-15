const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Carpeta donde se guardarán los archivos subidos
  },
  filename: function(req, file, cb) {
    console.log(file);
    cb(null, file.originalname); // Nombre del archivo se mantendrá igual
  },
});

const upload = multer({ storage });

module.exports = upload;
