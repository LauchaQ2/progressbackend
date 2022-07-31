const { response } = require("express");
const { UserRefreshClient } = require("google-auth-library");
const { ObjectId } = require('mongoose').Types
const { Category, User, Product } = require('../models')


const collections = [
    'users',
    'categories',
    'products',
    'roles'
]

const searchUser = async (query = '', res = response) => {
    const isMongoId = ObjectId.isValid(query);

    if (isMongoId) {
        const user = await User.findById(query);
        res.json({
            results: (user) ? [user] : []
        })
    }

    const regex = new RegExp(query, 'i');

    const users = await User.find({
        $or: [{ name: regex }, { email: regex }],
        $and: [{ state: true }]
    })
    const total = await User.count({
        $or: [{ name: regex }, { email: regex }],
        $and: [{ state: true }]
    })

    res.json({
        total,
        results: users
    })


}

const searchCategory = async (query = '', res = response) => {
    const isMongoId = ObjectId.isValid(query);

    if (isMongoId) {
        const category = await Category.findById(query);
        res.json({
            results: (category) ? [category] : []
        })
    }

    const regex = new RegExp(query, 'i');

    const categories = await Category.find({ name: regex, state: true })
    .populate('createdBy', 'name')
    const total = await User.count({ name: regex, state: true })

    res.json({
        total,
        results: categories
    })


}

const searchProduct = async (query = '', res = response) => {
    const isMongoId = ObjectId.isValid(query);

    if (isMongoId) {
        const product = await Product.findById(query);
        res.json({
            results: (product) ? [product] : []
        })
    }

    const regex = new RegExp(query, 'i');

    const products = await Product.find({ name: regex, state: true })
        .populate('createdBy', 'name')
        .populate('category', 'name')
    const total = await Product.count({ name: regex, state: true })

    res.json({
        total,
        results: products
    })


}





const search = (req, res = response) => {

    const { collection, query } = req.params;

    if (!collections.includes(collection)) {
        return res.status(400).json({
            msg: `Allowed collections are ${collections}.`
        })
    }

    switch (collection) {
        case 'users':
            searchUser(query, res)
            break;
        case 'categories':
            searchCategory(query, res)
            break;
        case 'products':
            searchProduct(query, res)
            break;
        default:
            res.status(500).json({
                msg: 'Error server'
            })
    }
}

module.exports = {
    search
}