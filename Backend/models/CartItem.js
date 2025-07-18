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
        ref : "Product"
    },
    quantity:Number
})

//CartItem Model
const CartItem = new mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;