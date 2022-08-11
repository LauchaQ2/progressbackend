const { response } = require("express");
const {Shopping} = require("../models");


const postShopping = async(req, res = response) =>{
    const products = req.body.products;
    const customer = req.body.customer;

    console.log(products)
    console.log(customer)

    const data = [];

    products.map(product =>{
        data.push({
            ...product,
            productId: product.id,
        })
    })

    const shopping = new Shopping({customer: customer, products: data})
    console.log(shopping)
    await shopping.save();

    res.status(201).json(shopping)

}
module.exports = {
    postShopping
}