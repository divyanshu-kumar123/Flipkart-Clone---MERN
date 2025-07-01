const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema for cart Item
const cartItemSchema = new Schema({
    userId :  {
        type: Schema.Types.ObjectId,
        ref : "User"
    },
    productId :  {
        type: Schema.Types.ObjectId,
        ref : "User"
    },
    quantity:Number
})

//CartItem Model
const CartItem = new mongoose.Model("CartItem", cartItemSchema);

module.exports = CartItem;