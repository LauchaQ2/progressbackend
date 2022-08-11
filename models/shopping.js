const { Schema, model, Types } = require('mongoose');

const ShoppingSchema = Schema({
    products: [{
        id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        },
        name: {
            type: String
        }
    }],
    _id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = model('Shopping', ShoppingSchema)