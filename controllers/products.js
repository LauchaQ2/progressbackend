const { response } = require("express");
const { Product } = require('../models')


const getProducts = async (req, res = response) => {

    const { limit = 5, from = 0 } = req.query;

    const [total, products] = await Promise.all([
        Product.countDocuments({ state: true }),
        Product.find({ state: true })
            .skip(Number(from))
            .limit(Number(limit))
            .populate('createdBy', 'name')
            .populate('category', 'name')
    ])

    res.json({
        total,
        products
    })

}

const getProduct = async (req, res = response) => {

    const { id } = req.params;
    console.log(id)

    const product = await Product.findById(id)
        .populate('createdBy', 'name')
        .populate('category', 'name')

    res.json(product)

}

const updateProduct = async (req, res = response) => {
    const { id } = req.params;

    const { state, user, ...data } = req.body;

    if (data.name) {
        data.name = data.name.toUpperCase();
    }

    data.user = req.user._id;

    const product = await Product.findByIdAndUpdate(id, data, { new: true })

    res.json(product);
}

const deleteProduct = async (req, res = response) => {

    const { id } = req.params;
    const productDeleted = await Product.findByIdAndUpdate(id, { state: false }, { new: true })
    res.json({
        productDeleted
    })

}




const createProduct = async (req, res = response) => {

    const { state, user, ...body } = req.body;

    const productDB = await Product.findOne({ name: body.name  });

    if (productDB) {
        return res.status(400).json({
            msg: `Product ${productDB.name} is already exist.`
        })
    }

    const data = {
        ...body,
        name: body.name.toUpperCase(),
        createdBy: req.user._id,
    }

    const product = new Product(data);

    await product.save();

    res.status(201).json(product)

}

module.exports = {
    getProduct,
    createProduct,
    getProducts,
    updateProduct,
    deleteProduct
}