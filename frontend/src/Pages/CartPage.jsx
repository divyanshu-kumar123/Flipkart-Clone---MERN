import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import "../css/CartPage.css";
import CartItemCard from "../Components/CartItemCard";
import CartPriceCard from "../Components/CartPriceCard";
import EmptyCart from "../Components/EmptyCart";
import { Button, Typography, Card, CardContent } from "@mui/material";
import Alert from "@mui/material/Alert";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [refreshCart, setRefreshCart] = useState(false);
  const navigate = useNavigate();

  //get the cart data
  useEffect(() => {
    api
      .get("/cart")
      .then((res) => {
        setCartItems(res.data.cart);
      })
      .catch((e) => {
        setError(
          e.response?.data?.message || "Error: While fetching cart items"
        );
      });
  }, [refreshCart]);

  // to increase or decrease quantity
  const handleQuantityChange = async (id, arg) => {
    await api
      .patch(`/cart/${id}/${arg === "decrease" ? "decrease" : "increase"}`)
      .then(() => {
        setRefreshCart((prev) => !prev);
      })
      .catch((e) => {
        setError(e.response?.data?.message || "Error: Unable to update quantity");
      });
  };

  // to remove any item
  const handleRemove = async (id) => {
    await api
      .delete(`/cart/${id}`)
      .then(() => {
        setSuccess("Item removed");
        setRefreshCart((prev) => !prev);
      })
      .catch((e) => {
        setError(e.response?.data?.message || "Error: Unable to remove item");
      });
  };

  // place order - on clicking the place order button
  const placeOrder = () => {
    const processedCartItems = cartItems.map((item) => ({
      _id: item._id,
      title: item.productId?.title,
      price: item.productId?.price,
      discount: item.productId?.discount,
      description: item.productId?.description,
      image: item.productId?.image,
      quantity: item.quantity,
      productId: item.productId?._id,
    }));

    const order = {
      from : "Cart",
      items: processedCartItems,
      location: "Delhi, India",
    };

    navigate("/order", { state: { order } });
  };

  const processedCartItems = cartItems.map((item) => ({
    _id: item._id,
    title: item.productId?.title,
    price: item.productId?.price,
    discount: item.productId?.discount,
    description: item.productId?.description,
    image: item.productId?.image,
    quantity: item.quantity,
    productId: item.productId?._id,
  }));

  return (
    <div className="row">
      {error && (
        <Alert
          className="container border col-md-5 mt-1"
          severity="error"
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}
      {success && (
        <Alert
          className="container border col-md-5 mt-1"
          severity="success"
          onClose={() => setSuccess("")}
        >
          {success}
        </Alert>
      )}
      {processedCartItems.length > 0 ? (
        <>
          <div className="col-md-7 ms-3 cart-items-scroll">
            {/* Delivery Location */}
            <Card className="d-flex flex-row shadow-sm mb-3 col-md-8 mt-5 justify-content-between w-100">
              <CardContent>
                <Typography variant="body1">Deliver to: Delhi, India</Typography>
              </CardContent>
              <Button variant="outlined" className="m-2">
                Change
              </Button>
            </Card>

            {/* Cart Items */}
            {processedCartItems.map((item) => (
              <CartItemCard
                key={item._id}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}

            {/* Place Order Button */}
            <div className="cart-place-order-footer">
              <Button
                className="btn place-order-button"
                variant="contained"
                onClick={placeOrder}
              >
                Place Order
              </Button>
            </div>
          </div>

          {/* Price Summary */}
          <div className="col-md-4 mt-5 cart-price-fixed">
            <CartPriceCard cartItems={processedCartItems} />
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CartPage;
