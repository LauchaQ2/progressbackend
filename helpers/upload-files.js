const path = require('path')
const { v4: uuidv4 } = require('uuid');

const uploadFile = (files, allowedExtensions = ['png', 'jpg', 'jpeg', 'gif'], folder = '') => {

    return new Promise((resolve, reject) => {

        const { archivo } = files;

        const shortName = archivo.name.split('.')
        const extension = shortName[shortName.length - 1];

        if (!allowedExtensions.includes(extension)) {
            return reject(`Extension ${extension} isn't allowed.`)
        }

        const tempName = uuidv4() + '.' + extension;

        const uploadPath = path.join(__dirname, '../uploads/', folder, tempName);

        archivo.mv(uploadPath, (err) => {
            if (err) {
                reject(err)
            }

            resolve(tempName)
        });

    })



}

module.exports = {
    uploadFile
}