const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
const productRoutes = require("./routes/productRoutes.js");
const cartRoutes = require("./routes/cartRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const mongoose = require("mongoose");
const Order = require('./models/Order.js')
const dotenv = require("dotenv");
const cors = require('cors');

dotenv.config();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cors());

//port number
const port = process.env.PORT || 8080;

// Core Functional Routes
app.use("/api/users", userRoutes); //User route
app.use("/api/products", productRoutes); //Product Route
app.use("/api/cart", cartRoutes); //Cart Route
app.use("/api/orders", orderRoutes); //Order Route
app.get("/", (req, res) => res.send("API Running"));

//Setting up mongo db connection
main()
  .then(() => {
    console.log("Connected To Mongo Database Successfully");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.DB_URL);
}

//error - middleware
app.use((err, req, res, next) => {
  let {message="Something Went Wrong !", statusCode=400} = err;
  res.status(statusCode).json({ message });
})


//backend server
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
