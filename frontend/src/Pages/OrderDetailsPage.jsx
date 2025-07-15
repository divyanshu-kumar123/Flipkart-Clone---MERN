import React from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Chip,
} from "@mui/material";
import OrderItemCard from "../Components/OrderItemCard"; // ✅ Import the new component

function OrderDetailsPage() {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    return (
      <Typography variant="h6" className="text-center mt-5">
        No order data available.
      </Typography>
    );
  }

  return (
    <div className="container mt-5">
      <Typography variant="h5" className="fw-bold mb-4">
        Order Summary
      </Typography>

      {/* Order Status Card */}
      <Card className="shadow-sm mb-4">
        <CardContent>
          <Box className="d-flex justify-content-between align-items-center">
            <Typography variant="subtitle1" className="fw-bold">
              Order ID: {order._id}
            </Typography>
            <Chip
              label={order.status.toUpperCase()}
              color={order.status === "cancelled" ? "error" : "success"}
              variant="filled"
            />
          </Box>
          <Typography variant="body2" color="text.secondary" className="mt-2">
            Placed on: {new Date(order.createdAt).toLocaleString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Amount: ₹{order.totalAmount.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>

      {/* Items Card */}
      <Card className="shadow-sm mb-4">
        <CardContent>
          <Typography variant="h6" className="mb-3 fw-bold">
            Items in this Order
          </Typography>
          <Divider />
          {order.items.map((item) => (
            <OrderItemCard key={item._id} item={item} />
          ))}
        </CardContent>
      </Card>

      {/* Delivery Address */}
      <Card className="shadow-sm mb-5">
        <CardContent>
          <Typography variant="h6" className="mb-2 fw-bold">
            Delivery Address
          </Typography>
          <Typography variant="body2">
            123 MG Road, Delhi - 110001
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderDetailsPage;
