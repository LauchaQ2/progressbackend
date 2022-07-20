const Role = require('../models/role')
const User = require('../models/user');


const isRoleValid = async (role = '') => {
    const roleExist = await Role.findOne({ role });
    if (!roleExist) {
        throw new Error(`Role ${role} isn't registered on DB`)
    }
}

const isEmailExist = async (email = '') => {
    const emailExist = await User.findOne({email})
    if (emailExist){
        throw new Error(`Email ${email} is already registered.`)
    }
}

const userIdExist = async (id) => {
    const idExist = await User.findById(id)
    if (!idExist){
        throw new Error(`Id ${id} isn't registered on DB.`)
    }
}



module.exports = {
    isRoleValid,
    isEmailExist,
    userIdExist
}