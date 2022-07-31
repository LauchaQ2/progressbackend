const { response } = require("express");
const { uploadFile } = require("../helpers/upload-files");
const {User, Product} = require('../models')


const uploadFiles = async(req, res = response) => {
    
    try {
        const name = await uploadFile(req.files, ['txt','md'], 'txts')

        res.json({
           name
        })
    
    } catch (error) {
        res.status(400).json({
            msg: error
        })
    }


}

const updateImage = async(req, res = response) =>{
    
    const {id, collection} = req.params

    let model;

    switch (collection) {
        case 'users':
            model = await User.findById(id);
            if (!model){
                return res.status(400).json({
                    msg: 'User not exist'
                })
            }
            break;
    
        case 'products':
            model = await Product.findById(id);
            if (!model){
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

    const name = await uploadFile(req.files, undefined, collection)
    model.img = name;

    await model.save();

    res.json({
        model
    })
}


module.exports = {
    uploadFiles,
    updateImage
}