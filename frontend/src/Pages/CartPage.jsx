import React, { useEffect, useState } from "react";
import CartItemCard from "../Components/CartItemCard";
import CartPriceCard from "../Components/CartPriceCard";
import api from "../api";
import "../css/CartPage.css";
import EmptyCart from "../Components/EmptyCart";
import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [refreshCart, setRefreshCart] = useState(false)

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

  const handleQuantityChange = (id, newQty) => {
    
  };

  //to remove any item
  const handleRemove = async (id) => {
    await api
      .delete(`/cart/${id}`)
      .then(() => {
        setSuccess("Item removed");
        setRefreshCart(prev => !prev);
      })
      .catch((e) => {
        setError(
          e.response?.data?.message || "Error: Unable to remove"
        );
      });
  };

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
      {cartItems.length > 0 ? (
        <>
          <div className="col-md-7 ms-3 mt-5 cart-items-scroll">
            {cartItems.map((item) => (
              <CartItemCard
                key={item._id}
                item={{
                  _id: item._id,
                  title: item.productId?.title,
                  price: item.productId?.price,
                  discount: item.productId?.discount,
                  description: item.productId?.description,
                  image: item.productId?.image,
                  quantity: item.quantity,
                  productId: item.productId._id,
                }}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              />
            ))}
            <div className="cart-place-order-footer">
              <Button
                className="btn place-order-button"
                variant="filled"
                onClick={() => console.log("Order placed!")}
              >
                Place Order
              </Button>
            </div>
          </div>

          <div className="col-md-4 mt-5 cart-price-fixed">
            <CartPriceCard
              cartItems={cartItems.map((item) => ({
                _id: item._id,
                price: item.productId?.price || 0,
                discount: item.productId?.discount || 0,
                quantity: item.quantity,
              }))}
            />
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default CartPage;
