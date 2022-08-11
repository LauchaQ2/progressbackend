const {Schema, model} = require('mongoose');

const ShoppingSchema = Schema({
    customer:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    products: [{
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
        quantity: {
            type: Number,
            default: 1
        },
        name:{
            type: String
        }
    }]
})

module.exports = model('Shopping', ShoppingSchema)