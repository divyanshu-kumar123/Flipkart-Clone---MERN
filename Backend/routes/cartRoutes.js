const express = require('express');
const WrapAsync = require('../utils/WrapAsync.js');
const { getCartItems, addToCart, removeFromCart, emptyCart, addQuantity, decreaseQuantity } = require('../controllers/cartController.js');
const router = express.Router();
const {isLoggedIn} = require('../middleware/authMiddleware.js');

router.use(isLoggedIn); // to check if the user is loggedIn

router.get("/", WrapAsync(getCartItems)); //to get all the cart items
router.post("/",WrapAsync(addToCart)); //to add item to cart
router.patch("/:productId/increase", WrapAsync(addQuantity)); //to add the quantity by 1
router.patch("/:productId/decrease", WrapAsync(decreaseQuantity)); //to add the quantity by 1
router.delete("/clear", WrapAsync(emptyCart)); // delete all item from cart
router.delete("/:productId", WrapAsync(removeFromCart)); // delete a particular item


module.exports = router;
