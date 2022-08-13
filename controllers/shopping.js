const { response } = require("express");
const {Shopping} = require("../models");

const getShoppingByCustomer = async (req, res = response) => {

    const {id} = req.params;
    console.log(id)

    const [total, shoppings] = await Promise.all([
        Shopping.countDocuments({ customer: id }),
        Shopping.find({ customer: id})
            .populate('customer', 'name')
    ])

    res.json({
        total,
        shoppings
    })

}

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
    postShopping,
    getShoppingByCustomer
}