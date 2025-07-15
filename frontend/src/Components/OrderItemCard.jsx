import React from "react";
import { Box, Typography } from "@mui/material";

function OrderItemCard({ item }) {
  const product = item.productId;

  return (
    <Box
      className="d-flex flex-row mb-3 mt-3 align-items-center"
      style={{ borderBottom: "1px solid #e0e0e0", paddingBottom: "1rem" }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{ width: "100px", height: "100px", objectFit: "contain", marginRight: "1rem" }}
      />
      <Box>
        <Typography variant="subtitle1" className="fw-bold">
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Box className="d-flex align-items-center mt-1">
          <Typography variant="body1" className="fw-bold text-primary me-2">
            ₹{item.price.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Qty: {item.quantity}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default OrderItemCard;
