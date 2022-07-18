const Role = require('../models/role')



const isRoleValid = async(role = '')=>{
    const roleExist = await Role.findOne({role});
    if (!roleExist) {
        throw new Error(`Role ${role} isn't registered on DB`)
    }
}


module.exports = {
    isRoleValid
}