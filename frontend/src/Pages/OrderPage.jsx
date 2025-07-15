import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Collapse,
  Radio,
  RadioGroup,
  FormControlLabel,
  Divider,
  Alert,
} from "@mui/material";
import CartItemCard from "../Components/CartItemCard";
import CartPriceCard from "../Components/CartPriceCard";
import { useLocation } from "react-router-dom";
import api from "../api";

const dummyLocations = [
  "123 MG Road, Delhi - 110001",
  "456 Park Street, Kolkata - 700016",
  "789 Marine Drive, Mumbai - 400020",
];

function OrderPage() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [expandedCard, setExpandedCard] = useState("location");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const location = useLocation();
  const order = location.state?.order || { items: [] };
  const [orderItems, setOrderItems] = useState(order.items);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setExpandedCard("summary");
  };

  const handleQuantityChange = (productId, action) => {
    const updated = orderItems.map((item) =>
      item.productId === productId
        ? {
            ...item,
            quantity:
              action === "increase"
                ? item.quantity + 1
                : Math.max(item.quantity - 1, 1),
          }
        : item
    );
    setOrderItems(updated);
  };

  const handleRemove = (productId) => {
    const updated = orderItems.filter((item) => item.productId !== productId);
    setOrderItems(updated);
  };

  const handleConfirmOrder = () => {
    if (orderItems.length === 0) return;
    setExpandedCard("payment");
  };

  const handlePlaceOrder = async () => {
    try {
      //if ordered directly from the product page
      if (order.from?.toLowerCase() === "product") {
        const { productId } = orderItems[0];
        const quantity = orderItems[0]?.quantity || 1;
        await api.post(`/orders/product/${productId}`, { quantity });
      } else {
        //if ordered from cart
        await api.post("/orders/");
      }
  
      setSuccess("Order placed successfully");
      navigate("/");
    } catch (error) {
      console.error("Order placement failed:", error);
      setError(error.response?.data?.message || "Failed to place the order. Please try again.");
    }
  };
  
  return (
    <div className="row justify-content-center mt-3">
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
      <div className="col-md-7 ms-3 mt-5">
        {/* Location Card */}
        <Card className="shadow-sm mb-3">
          <CardContent sx={{padding : '0 !important'}}>
            <Typography variant="h6" className="mb-2 text-secondary fw-bold fs-6  " sx={expandedCard === "location" ?{backgroundColor :  "#2874f0",  color : "white !important", padding:'0.7rem'} : {padding:'0.7rem', paddingBottom : '0'}}>
              1. Select Delivery Location
            </Typography>
            <Collapse in={expandedCard === "location"}>
              {dummyLocations.map((loc, idx) => (
                <Box
                  key={idx}
                  className="border rounded p-2 d-flex justify-content-between align-items-center mb-2"
                >
                  <Typography>{loc}</Typography>
                  <Button
                    variant="contained"
                    onClick={() => handleLocationSelect(loc)}
                    sx={{backgroundColor : "#fb641b",  padding : "0.5rem 3rem", borderRadius : 0}}
                  >
                    Deliver Here
                  </Button>
                </Box>
              ))}
              <Button className="mt-2" disabled>
                + Add New Location
              </Button>
            </Collapse>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card className="shadow-sm mb-3">
          <CardContent sx={{padding : '0 !important'}}>
            <Typography variant="h6" className="mb-2 text-secondary fw-bold fs-6" sx={expandedCard === "summary" ?{backgroundColor :  "#2874f0",  color : "white !important", padding:'0.7rem'} : {padding:'0.7rem', paddingBottom : '0'}}>
              2. Order Summary
            </Typography>
            <Collapse in={expandedCard === "summary"}>
              {orderItems.length === 0 && (
                <Alert severity="info">No items to show.</Alert>
              )}
              {orderItems.map((item) => (
                <CartItemCard
                  key={item._id}
                  item={item}
                  onQuantityChange={handleQuantityChange}
                  onRemove={handleRemove}
                />
              ))}
              {orderItems.length > 0 && (
                <>
                  <div className="text-end mt-3">
                    <Button
                      variant="contained"
                      onClick={handleConfirmOrder}
                      disabled={orderItems.length === 0}
                      sx={{backgroundColor : "#fb641b",  padding : "0.5rem 3rem", borderRadius : 0}}
                    >
                      Continue
                    </Button>
                  </div>
                </>
              )}
            </Collapse>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card className="shadow-sm mb-3">
          <CardContent sx={{padding :'0 !important'}}>
            <Typography variant="h6" className="mb-2 text-secondary fw-bold fs-6" sx={expandedCard === "payment" ?{backgroundColor :  "#2874f0",  color : "white !important", padding:'0.7rem'} : {padding:'0.7rem', paddingBottom : '0'}}>
              3. Payment Method
            </Typography>
            <Collapse in={expandedCard === "payment"}>
              <RadioGroup
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Cash on Delivery"
                  className="ms-5"
                />
              </RadioGroup>
              <Divider className="my-3" />
              <div className="text-end mt-3 m-3">
              <Button
                variant="contained"
                disabled={!paymentMethod}
                onClick={handlePlaceOrder}
                sx={{backgroundColor : "#fb641b",  padding : "0.5rem 3rem", borderRadius : 0}}
              >
                Place Order
              </Button>
              </div>
            </Collapse>
          </CardContent>
        </Card>
      </div>

      {/* Price Summary */}
      <div className="col-md-4 mt-5 cart-price-fixed">
        <CartPriceCard cartItems={orderItems} />
      </div>
    </div>
  );
}

export default OrderPage;
