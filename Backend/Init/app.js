const express = require('express');
const mongoose = require('mongoose');
const data = require('./data');
const Product = require('../models/Product')
const dotenv = require("dotenv");
dotenv.config();

main()
  .then(() => {
    console.log("Connected To Mongo Database Successfully");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/Flipkart");
}

const initProduct = async () =>{
    await Product.deleteMany({});
    console.log('product deleted');
    await Product.insertMany(data);
    console.log('product inserted');
}
initProduct();