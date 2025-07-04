const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CATEGORY_OPTIONS = ["Trending", "grocery", "mobile", "faishon", "electronics", "homeNfurniture", "appliances", "dress", "shoes", "manWears", "womenWear"]; 


const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0, // represents discount in percent, e.g., 2 means 2%
        min: 0,
        max: 100
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    stock: {
        type: Number,
        default: 0
    },
    Category: {
        type: [String],
        enum: {
            values: CATEGORY_OPTIONS,
            message: '{VALUE} is not a supported category'
        },
        default: ['Trending']
    },
    properties: {
        type: Schema.Types.Mixed, // allows dynamic object (e.g. RAM, ROM, etc.)
        default: {}
    }
}, {
    timestamps: true
});


//Product Model
const Product = new mongoose.model("Product", productSchema);

module.exports = Product;