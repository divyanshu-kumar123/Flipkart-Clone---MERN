import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export function AddToCartBtn({ onClick }) {
  return (
    <Button
      sx={{ width: "100%", backgroundColor: "#FF9F00", height: "3rem" }}
      variant="contained" onClick={onClick}
    >
      Add To Cart &nbsp; <i className="fa-solid fa-cart-shopping"></i>
    </Button>
  );
}

export function BuyNowButton({ onClick }) {
  return (
      <Button
        sx={{ width: "100%", backgroundColor: "#FB641B", height: "3rem" }}
        variant="contained"
        onClick={onClick}
      >
        Buy Now &nbsp;<i className="fa-solid fa-bolt"></i>
      </Button>
  );
}
