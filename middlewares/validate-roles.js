const { response } = require("express")


const isAdminRole = (req, res = response, next) =>{

    if (!req.user){
        return res.status(500).json({
            msg: 'You want to verify the role without validating the token first'
        })
    }

    const {role, name} = req.user;

    if(role !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `${name} isn't ADMIN.`
        });
    }
 
    next();
}

const haveRole = ( ...roles ) =>{
    return (req, res = response, next) =>{
        if (!req.user){
            return res.status(500).json({
                msg: 'You want to verify the role without validating the token first'
            })
        }

        if (!roles.includes(req.user.role)){
            return res.status(401).json({
                msg: `Service required one of the next roles: ${roles}`
            })
        }


        next()
    }
}

module.exports = {
    isAdminRole,
    haveRole
}