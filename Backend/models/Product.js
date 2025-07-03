const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CATEGORY_OPTIONS = ["Trending", "grocery", "mobile", "faishon", "electronics", "homeNfurniture", "appliances", "dress", "shoes", "manWears", "womenWear"]; 


//Schema for the product
const productSchema = new Schema({
    title:String,
    price:Number,
    description:String,
    image:String,
    stock:Number,
    Category:{
        type: [String],
        enum: {
            values: CATEGORY_OPTIONS,
            message: '{VALUE} is not a supported category'
        },
        default: ["Trending"]
    }
})

//Product Model
const Product = new mongoose.model("Product", productSchema);

module.exports = Product;