const path = require('path')
const fs = require('fs')
const cloudinary = require('cloudinary').v2
cloudinary.config(process.env.CLOUDINARY_URL)
const { response } = require("express");
const { uploadFile } = require("../helpers/upload-files");
const { User, Product } = require('../models')


const uploadFiles = async (req, res = response) => {

    try {
        const name = await uploadFile(req.files, ['txt', 'md'], 'txts')

        res.json({
            name
        })

    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }


}

const updateImage = async (req, res = response) => {

    const { id, collection } = req.params

    let model;

    switch (collection) {
        case 'users':
            model = await User.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: 'User not exist'
                })
            }
            break;

        case 'products':
            model = await Product.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: 'Product not exist'
                })
            }
            break;
        default:
            return res.status(500).json({
                msg: "Error server"
            })
    }

    if (model.img) {
        const pathImg = path.join(__dirname, '../uploads', collection, model.img)
        if (fs.existsSync(pathImg)) {
            fs.unlinkSync(pathImg)
        }
    }

    const name = await uploadFile(req.files, undefined, collection)
    model.img = name;

    await model.save();

    res.json({
        model
    })
}

const showImage = async (req, res = response) => {
    const { id, collection } = req.params

    let model;

    switch (collection) {
        case 'users':
            model = await User.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: 'User not exist'
                })
            }
            break;

        case 'products':
            model = await Product.findById(id);
            if (!model) {
                return res.status(400).json({
                    msg: 'Product not exist'
                })
            }
            break;
        default:
            return res.status(500).json({
                msg: "Error server"
            })
    }

    if (model.img) {
        const pathImg = path.join(__dirname, '../uploads', collection, model.img)
        if (fs.existsSync(pathImg)) {
            return res.sendFile(pathImg)
        }
    }

    const pathPlaceholder = path.join(__dirname, '../assets', 'no-image.jpg')
    if (fs.existsSync(pathPlaceholder)) {
        return res.sendFile(pathPlaceholder)
    }

}

const updateImageCloudinary = async (req, res = response) => {

    const { id, collection } = req.params;

    let model;

    switch ( collection ) {
        case 'users':
            model = await User.findById(id);
            if ( !model ) {
                return res.status(400).json({
                    msg: `No existe un usuario con el id ${ id }`
                });
            }
        
        break;

        case 'products':
            model = await Product.findById(id);
            if ( !model ) {
                return res.status(400).json({
                    msg: `No existe un producto con el id ${ id }`
                });
            }
        
        break;
    
        default:
            return res.status(500).json({ msg: 'Se me olvidó validar esto'});
    }


    // Limpiar imágenes previas
    if ( model.img ) {
        const nameArr = model.img.split('/');
        const name    = nameArr[ nameArr.length - 1 ];
        const [ public_id ] = name.split('.');
        cloudinary.uploader.destroy( public_id );
    }


    const { tempFilePath } = req.files.archivo
    const { secure_url } = await cloudinary.uploader.upload( tempFilePath );
    model.img = secure_url;

    await model.save();


    res.json( model );

}



module.exports = {
    uploadFiles,
    updateImage,
    showImage,
    updateImageCloudinary
}




