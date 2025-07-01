const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.js");
const mongoose = require("mongoose");
const Order = require('./models/Order.js')
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());

//port number
const port = process.env.PORT || 8080;;

// Core Functional Routes
app.use("/api/users", userRoutes);
app.use("/api/products", userRoutes);
app.use("/api/cart", userRoutes);
app.use("/api/orders", userRoutes);
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



//backend server
app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
});
