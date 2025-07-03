const express = require("express");
const Product = require("../models/Product");
const expressError = require("../utils/expressError");

//to get all product
const getAllProduct = async (req, res) => {
  let products = await Product.find({});
  if (!products || products.length === 0) {
    throw new expressError(400, "No Product Found");
  }
  res.json(products);
};

//get product by Id
const getProductById = async (req, res) => {
  let { id } = req.params;
  if (!id) {
    throw new expressError(400, "Invalid id");
  }
  let product = await Product.findById(id);
  if (!product) {
    throw new expressError(404, "No product found");
  }
  res.json(product);
};

//search product
const searchProduct = async (req, res) => {
  const { search, title, category, minPrice, maxPrice } = req.query;
  let query = {};

  // specific field filters
  if (title) {
    query.title = { $regex: title, $options: "i" };
  }

  if (category) {
    query.Category = { $regex: category, $options: "i" };
  }

  // if `search` is present - look for all -title, category, etc.
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
      { Category: { $regex: search, $options: "i" } }
    ];
  }

  // price filter
  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = Number(minPrice);
    if (maxPrice) query.price.$lte = Number(maxPrice);
  }

  const products = await Product.find(query);
  res.json(products);
};



module.exports = { getAllProduct, getProductById, searchProduct };
