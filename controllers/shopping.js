const { response } = require("express");
const {Shopping} = require("../models");


const postShopping = async(req, res = response) =>{
    const {products} = req.body;


    const shopping = new Shopping({customer: req.user._id, products: products})
    console.log(shopping)
    await shopping.save();

    res.status(201).json(shopping)

}
module.exports = {
    postShopping
}