const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderStatus = ["Placed", "Delivered", "OnWay"];

//Schema for the order
const orderSchema = new Schema({
    userId :  {
            type: Schema.Types.ObjectId,
            ref : "User"
        },
    products : [
        {
            type: Schema.Types.ObjectId,
            ref : "Product"
        }
    ],
    total : { type: Number, default : 0},
    status : {
        type: [String],
        enum: {
            values: OrderStatus,
            message: '{VALUE} is not a supported category'
        },
        default: ["Placed"]
    },
    date : Date
})

//Model
const Listing = new mongoose.model("Order", orderSchema);

module.exports = Listing;