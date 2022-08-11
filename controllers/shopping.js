const { response } = require("express");
const {Shopping} = require("../models");


const postShopping = async(req, res = response) =>{
    const {products, customer} = req.body;


    const shopping = new Shopping({customer: customer, products: products})
    console.log(shopping)
    await shopping.save();

    res.status(201).json(shopping)

}
module.exports = {
    postShopping
}