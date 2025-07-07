import React from "react";
import {
  Card,
  CardContent,
  Typography,
 Divider,
  Box,
} from "@mui/material";

function CartPriceCard({cartItems}) {
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalDiscount = cartItems.reduce(
      (acc, item) => acc + (item.price * item.discount / 100) * item.quantity,
      0
    );
    const deliveryCharge = totalPrice - totalDiscount > 500 ? 0 : 40;
    const totalAmount = totalPrice - totalDiscount + deliveryCharge;
  return (
    <div>
      <Card className="shadow-sm" sx={{ minHeight: "300px", width: "100%" }}>
        <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          className="border-bottom fw-bold pb-1 opacity-75 mt-3"
        >
          PRICE DETAILS
        </Typography>
        <Box className="d-flex justify-content-between mb-2 mt-4">
          <Typography>Price ({cartItems.length} items)</Typography>
          <Typography>₹{totalPrice.toFixed(2)}</Typography>
        </Box>
        <Box className="d-flex justify-content-between mb-2">
          <Typography>Discount</Typography>
          <Typography className="text-success">-₹{totalDiscount.toFixed(2)}</Typography>
        </Box>
        <Box className="d-flex justify-content-between mb-2">
          <Typography>Delivery Charges</Typography>
          <Typography color={deliveryCharge === 0 ? 'green' : 'text.primary'}>
            {deliveryCharge === 0 ? 'Free' : `₹${deliveryCharge.toFixed(2)}`}
          </Typography>
        </Box>
        <Divider className="my-2" />
        <Box className="d-flex justify-content-between mb-2">
          <Typography variant="subtitle1" className="fw-bold">
            Total Amount
          </Typography>
          <Typography variant="subtitle1" className="fw-bold">
            ₹{totalAmount.toFixed(2)}
          </Typography>
        </Box>
        <Divider className="my-2" />
        <Typography variant="body2" className="text-success mt-2">
          You will save ₹{totalDiscount.toFixed(2)} on this order.
        </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CartPriceCard;
