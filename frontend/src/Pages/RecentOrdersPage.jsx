import React, { useEffect, useState } from "react";
import { Typography, Alert } from "@mui/material";
import OrderCard from "../Components/OrderCard";
import api from "../api";
import { useNavigate } from "react-router-dom";

function RecentOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/orders") 
      .then((res) => {
        console.log(orders);
        setOrders(res.data.data)})
      .catch((e) =>
        setError(e.response?.data?.message || "Failed to fetch orders")
      );
  }, []);

  return (
    <div className="container mt-5">
      <Typography variant="h5" className="fw-bold mb-4">
        My Orders
      </Typography>

      {error && (
        <Alert severity="error" className="mb-3">
          {error}
        </Alert>
      )}

      {orders.length === 0 ? (
        <Alert severity="info">No orders placed yet.</Alert>
      ) : (
        orders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
            onClick={() => navigate(`/orders/${order._id}`, { state: { order } })}
          />
        ))
      )}
    </div>
  );
}

export default RecentOrdersPage;
