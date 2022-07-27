const { response, request } = require('express')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const validateJWT = async( req = request, res = response, next ) =>{

    const token = req.header('x-token');
    console.log(token)

    if (!token) {
        return res.status(401).json({
            msg: 'Token required'
        })
    }

    try {

        const {uid} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const user = await User.findById(uid);

        if(!user) {
            return res.status(401).json({
                msg: 'Token no válido - user not exist'
            })

        }

        if(!user.state){
            return res.status(401).json({
                msg: 'Token no válido - user false'
            })
        }

        req.user = user;
        next()
        
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Invalid Token'
        })
    }


}

module.exports = {
    validateJWT
}