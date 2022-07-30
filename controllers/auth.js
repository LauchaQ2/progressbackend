const { response } = require("express");
const User = require('../models/user');
const bcrypt = require('bcrypt-nodejs');
const { generateJWT } = require("../helpers/generate-jwt");
const { googleVerify } = require("../helpers/google-verify");
const { json } = require("body-parser");


const login = async (req, res = response) => {

    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
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

        const token = await generateJWT(user.id);


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

const googleSignIn = async (req, res = response) => {
    const { id_token } = req.body;

    try {
        const { name, picture, email } = await googleVerify(id_token)

        let user = await User.findOne({ email })

        if (!user) {
            const data = {
                name,
                email,
                password: '.p',
                role: 'USER_ROLE',
                google: true
            };

            const salt = bcrypt.genSaltSync();

            user = new User(data);
            user.img = picture;
            await user.save();
        }

        if (!user.state) {
            res.status(401).json({
                msg: 'Talk with Admin, user blocked'
            });
        }

        const token = await generateJWT(user.id);


        res.json({
            user,
            token
        })
    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: 'Token not verified'
        })
    }

}

module.exports = {
    login,
    googleSignIn
}