const { response } = require("express");
const {Shopping} = require("../models");


const postShopping = async(req, res = response) =>{
    const {...body} = req.body;

    const data ={
        ...body,
        customer: req.user._id
    }
    const shopping = new Shopping(data)
    console.log(shopping)

    await shopping.save();

    res.status(201).json(shopping)

}
module.exports = {
    postShopping
}