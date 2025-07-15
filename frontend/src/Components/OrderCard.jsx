import React from "react";
import { Card, CardContent, Typography, Chip, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function OrderCard({ order }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/orders/${order._id}`, { state: { order } });
  };

  const firstItem = order.items[0]?.productId;

  return (
    <Card className="shadow-sm mb-3 p-2" onClick={handleClick} style={{ cursor: "pointer" }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="subtitle1" className="fw-bold">
            Order ID: {order._id.slice(-6).toUpperCase()}
          </Typography>
          <Chip
            label={order.status.toUpperCase()}
            color={order.status === "cancelled" ? "error" : "success"}
            size="small"
          />
        </Box>

        <Box display="flex" alignItems="center">
          <img
            src={firstItem?.image}
            alt={firstItem?.title}
            style={{ width: 70, height: 70, objectFit: "contain", marginRight: 16 }}
          />
          <Box>
            <Typography variant="body1" className="fw-bold">
              {firstItem?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {firstItem?.description}
            </Typography>
            <Typography variant="body2" className="text-primary mt-1 fw-bold">
              ₹{order.totalAmount.toFixed(2)}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default OrderCard;
