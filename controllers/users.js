const { response, request } = require('express')
const bcrypt = require('bcrypt-nodejs');
const User = require('../models/user');

const usersGet = async (req = request, res = response) => {

    const { limit = 5, from = 0 } = req.query;


    const [total, users] = await Promise.all([
        User.countDocuments({ state: true }),
        User.find({ state: true })
            .skip(Number(from))
            .limit(Number(limit))
    ])

    res.json({
        total,
        users
    })
}
const usersPost = async (req, res = response) => {


    const { name, email, password, role } = req.body;
    const user = new User(
        {
            name,
            email,
            password,
            role
        });



    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.json({
        msg: 'post API - controller',
        user
    })
}
const usersPut = async (req, res = response) => {

    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if (password) {
        const salt = bcrypt.genSaltSync();
        rest.password = bcrypt.hashSync(password, salt);
    }
    const user = await User.findByIdAndUpdate(id, rest)

    res.json(user)
}
const usersPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    })
}
const usersDelete = async (req, res = response) => {

    const { id } = req.params;


    const user = await User.findByIdAndUpdate(id, { state: false })

    res.json({
        user
    })
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}