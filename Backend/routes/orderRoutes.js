const express = require('express');
const WrapAsync = require('../utils/WrapAsync.js');
const router = express.Router();
const {isLoggedIn} = require('../middleware/authMiddleware.js');
const {orderProduct, orderCart, cancelOrder, getAllOrders} = require('../controllers/orderController.js');

// router.use(isLoggedIn); // to check if the user is loggedIn

router.get("/", WrapAsync(getAllOrders));
router.post("/", WrapAsync(orderCart));
router.post("/product/:productId", WrapAsync(orderProduct));
router.patch("/:orderId", WrapAsync(cancelOrder))

module.exports = router;