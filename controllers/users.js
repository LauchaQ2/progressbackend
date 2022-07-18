const { response, request } = require('express')
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');

const usersGet = (req = request, res = response) => {

    const {q, name, page} = req.query;

    res.json({
        msg: 'get API - controller',
        q,
        name,
        page
    })
}
const usersPost = async(req, res = response) => {
    

    const {name, email, password, role} = req.body;
    const user = new User(
        {
            name,
            email,
            password,
            role
        });

    const emailExist = await User.findOne({email})
    if (emailExist){
        return res.status(400).json({
            msg: 'Email already registered.'
        })
    }

    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync( password, salt );

    await user.save();

    res.json({
        msg: 'post API - controller',
        user
    })
}
const usersPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        msg: 'put API - controller',
        id
    })
}
const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    })
}
const usersDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}