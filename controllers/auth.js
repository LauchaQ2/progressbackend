const { response } = require("express");
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const { generateJWT } = require("../helpers/generate-jwt");
 

const login = async(req, res = response) =>{

    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if ( !user ) {
            return res.status(400).json({
                msg: "Email isn't correct."
            })
        }

        if (!user.state) {
            return res.status(400).json({
                msg: "User not available"
            })
        }

        const validPassword = bcrypt.compareSync(password, user.password)
        if (!validPassword) {
            return res.status(400).json({
                msg: 'Invalid Password'
            })
        }

         const token = await generateJWT( user.id );


        res.json({
            user,
            token
        })
    } catch (error) {
        console.log("error", error)
        return res.status(500).json({
            msg: 'You must talk with admin'
        })
    }

    
}

module.exports = {
    login
}