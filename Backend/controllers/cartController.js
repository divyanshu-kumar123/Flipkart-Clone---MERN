const express = require('express');
const Cart = require("../models/CartItem");
const expressError = require("../utils/expressError");

//Get the product from cart
const getCartItems = async(req, res)=>{
    let userId = req.user._id
    let items = await Cart.find({ userId }).sort({ createdAt: -1 }).populate("productId"); //to get the latest items first
    res.json({
        message : items.length === 0? "Cart is empty" : "Cart item retrieved",
        cart : items
    });
}

//Add item to the cart
const addToCart = async(req, res) =>{
    const {productId, quantity = 1} = req.body;
    const userId = req.user._id;

    //Check if the item is already present in cart - In that case will add the quantity only
    const existingItem = await Cart.findOne({userId, productId});
    if(existingItem){
        existingItem.quantity += quantity;
        await existingItem.save();
        await existingItem.populate("productId");
        return res.json({
            message : "Quantity Updated",
            cart : existingItem
        })
    }
    const newItem = await Cart.create({userId, productId, quantity });
    await newItem.populate("productId");
    res.json({
        message : "Item added to cart",
        cart : newItem
    })
}

//Remove Item from cart
const removeFromCart = async(req, res)=>{
    const userId = req.user._id;
    const {productId} = req.params;
    const item = await Cart.findOne({userId, productId});
    if(!item){
        throw new expressError(404, "Item not found")
    }else{
        await Cart.deleteOne({userId, productId })
        return res.json({
            message : "Item Deleted",
            cart : item
        })
    }
}

//Remove all the items from cart
const emptyCart = async(req, res)=>{
    const userId = req.user._id;
    await Cart.deleteMany({userId});
    return res.json({
        message: "Cart Empty",
        cart : []
    })
}

//Add quantity to the cart by one
const addQuantity = async (req, res) => {
    const userId = req.user._id;
    const { productId } = req.params;
    const existingItem = await Cart.findOne({ userId, productId });
    if (!existingItem) {
      return res.status(404).json({ message: "Item not found in cart" });
    }
    existingItem.quantity += 1;
    await existingItem.save();
    await existingItem.populate("productId");
    return res.json({
      message: "Quantity updated",
      cart: existingItem,
    });
  };

  //decrease quantity by 1
  const decreaseQuantity = async (req, res) => {
    const userId = req.user._id;
    const { productId } = req.params;
    const existingItem = await Cart.findOne({ userId, productId });
    if (!existingItem || existingItem.quantity <= 0) {
      return res.status(404).json({ message: "Item not found in cart" });
    }
    existingItem.quantity -= 1;
    await existingItem.save();
    await existingItem.populate("productId");
    return res.json({
      message: "Quantity updated",
      cart: existingItem,
    });
  };
  
  

module.exports = {getCartItems, addToCart, removeFromCart, emptyCart, addQuantity, decreaseQuantity}