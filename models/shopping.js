const {Schema, model} = require('mongoose');

const ShoppingSchema = Schema({
    customer:{
        type: String,
        required: true,
        unique: false
    },
    products: [{
        _id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
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