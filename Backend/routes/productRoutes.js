const express = require('express');
const {getAllProduct, getProductById, searchProduct} = require('../controllers/productController.js')
const WrapAsync = require('../utils/WrapAsync.js')
const router = express.Router();

router.get("/", WrapAsync(getAllProduct));
router.get("/search", WrapAsync(searchProduct));
router.get("/:id", WrapAsync(getProductById));

module.exports = router;