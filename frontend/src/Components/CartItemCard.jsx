import React from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton, Button, Box } from '@mui/material';
import { Add, Remove, Delete } from '@mui/icons-material';

function CartItemCard({ item, onQuantityChange, onRemove }) {
  const discountedPrice = item.price - (item.price * item.discount) / 100;

  return (
    <Card className="d-flex flex-row p-3 shadow-sm mb-3">
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        sx={{ width: 120, height: 120, objectFit: 'contain', mr: 2 }}
      />
      <CardContent className="flex-grow-1">
        <Typography variant="h6">{item.title}</Typography>
        <Typography variant="body2" color="text.secondary" className="mb-2">
          {item.description}
        </Typography>

        <Box className="d-flex align-items-center mb-2">
          <Typography variant="body1" color="primary" className="me-2 fw-bold">
            ₹{discountedPrice.toFixed(2)}
          </Typography>
          <Typography variant="body2" className="text-decoration-line-through me-2 text-muted">
            ₹{item.price}
          </Typography>
          <Typography variant="body2" className="text-success fw-semibold">
            {item.discount}% off
          </Typography>
        </Box>

        <Box className="d-flex align-items-center">
          <IconButton
            size="small"
            onClick={() => onQuantityChange(item._id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <Remove />
          </IconButton>
          <span className="mx-2">{item.quantity}</span>
          <IconButton size="small" onClick={() => onQuantityChange(item._id, item.quantity + 1)}>
            <Add />
          </IconButton>

          <Button
            variant="text"
            color="error"
            startIcon={<Delete />}
            className="ms-3"
            onClick={() => onRemove(item.productId)}
          >
            Remove
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CartItemCard;
