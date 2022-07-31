const { Category, Product } = require('../models');
const Role = require('../models/role')
const User = require('../models/user');


const isRoleValid = async (role = '') => {
    const roleExist = await Role.findOne({ role });
    if (!roleExist) {
        throw new Error(`Role ${role} isn't registered on DB`)
    }
}

const isEmailExist = async (email = '') => {
    const emailExist = await User.findOne({ email })
    if (emailExist) {
        throw new Error(`Email ${email} is already registered.`)
    }
}

const userIdExist = async (id) => {
    const idExist = await User.findById(id)
    if (!idExist) {
        throw new Error(`Id ${id} isn't registered on DB.`)
    }
}

const categoryIdExist = async (id) => {
    const categoryExist = await Category.findById(id)
    if (!categoryExist) {
        throw new Error(`Id ${id} isn't registered on DB.`)
    }
}
const productIdExist = async (id) => {
    const productExist = await Product.findById(id)
    if (!productExist) {
        throw new Error(`Id ${id} isn't registered on DB.`)
    }
}

const allowedCollections = (collection = '', collections = []) => {

    const collectionInclude = collections.includes(collection)
    if (!collectionInclude){
        throw new Error(`Collection ${collection} isn't allowed.`)
    }

    return true;

}



module.exports = {
    isRoleValid,
    isEmailExist,
    userIdExist,
    categoryIdExist,
    productIdExist,
    allowedCollections
}