const Order = require("../models/Order");
const Product = require("../models/Product");
const Cart = require("../models/CartItem");
const expressError = require("../utils/expressError");

//Order a particular product - Irrespective of cart
const orderProduct = async (req, res) => {
  const userId = req.user._id;
  const { productId } = req.params;
  const { quantity = 1 } = req.body; //get quantity from the body
  const product = await Product.findById(productId);
  if (!product) {
    throw new expressError(404, "No product found");
  }

  if (product.stock < quantity) {
    throw new expressError(400, "Insufficient stock available");
  }
  const originalPrice =
    product.price - product.price * (product.discount / 100);
  const totalAmount = originalPrice * quantity;
  let newOrder = await Order.create({
    userId,
    items: [
      {
        productId: product._id,
        quantity,
        price: originalPrice,
      },
    ],
    totalAmount,
    status: "placed",
  });
  //decrease stock
  await Product.findByIdAndUpdate(productId, {
    $inc: { stock: -quantity },
  });
  newOrder = await newOrder.populate("items.productId");
  res.json({
    message: "Order Placed",
    data: newOrder,
  });
};

//Order the item stored in cart
const orderCart = async (req, res) => {
  const userId = req.user._id;
  //get the items of cart
  let cartItems = await Cart.find({ userId });
  if (cartItems.length === 0) {
    throw new expressError(404, "Cart is empty");
  }

  let items = [];
  let totalAmount = 0;

  // for loop to add the productId, quantity and price(by fetching product) to the items array
  for (const item of cartItems) {
    let product = await Product.findById(item.productId);
    if (!product) {
      throw new expressError(
        404,
        `Product with ID ${item.productId} not found`
      );
    }

    // if any product is not in the stock
    if (product.stock < item.quantity) {
      throw new expressError(
        400,
        `Insufficient stock for ${product.title}. Available: ${product.stock}, Requested: ${item.quantity}`
      );
    }

    //to calculate price
    let price = product.price - product.price * (product.discount / 100);
    items.push({
      productId: product._id,
      quantity: item.quantity,
      price,
    });

    //add the amount into total amount
    totalAmount += price * item.quantity;
  }

  //Create the order
  let newOrder = await Order.create({
    userId,
    items,
    totalAmount,
    status: "placed",
  });

  //clear cart item after placing the order
  await Cart.deleteMany({ userId });

  //decrease stock quantity
  for (const item of items) {
    let product = await Product.findByIdAndUpdate(item.productId, {
      $inc: { stock: -item.quantity },
    });
  }

  newOrder = await newOrder.populate("items.productId");

  res.json({
    message: "order placed",
    data: newOrder,
  });
};

//Cancel Order
const cancelOrder = async (req, res) => {
  const userId = req.user._id;
  const { orderId } = req.params;

  //get the order
  let order = await Order.findOne({_id : orderId, userId});

  //checking if order exist or the order status is already cancelled
  if(!order){
    throw new expressError(404, "Order not found");
  }
  if(order.status === "cancelled"){
    return res.json({message : "Order already cancelled"});
  }

//update the order status to cancelled
  order.status = "cancelled";
  await order.save();

  //to add the orderItem quantity to the stock of the product
  for(let item of order.items){
    let updatedProduct = await Product.findByIdAndUpdate(item.productId, {$inc :{stock : item.quantity}}, {new : true});
    if(!updatedProduct){
      throw new expressError(404, "No item found in the order")
    }
  }

  res.json({
    message : "Order cancelled",
    data : order
  })

};

//Get all the orders
const getAllOrders = async (req, res) => {
  const userId = req.user._id;
  let orders = await Order.find({ userId })
    .sort({ createdAt: -1 })
    .populate("items.productId");
  return res.json({
    message: orders.length === 0 ? "No recent orders" : "Orders fetched",
    data: orders,
  });
};

module.exports = { orderProduct, orderCart, cancelOrder, getAllOrders };
