import React from "react";
import { Typography } from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { Link } from "react-router-dom";

function AvailableOffer() {
  return (
    <>
      <Typography
        variant="body1"
        sx={{ fontSize: "0.8rem", paddingTop: "10px", fontWeight: "600" }}
      >
        Available Offer
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
        <LoyaltyIcon sx={{ color: "green" }} />
        Bank Offer 5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per
        statement quarter{" "}
        <Link to="" className="text-primary fw-semibold">
          T&C
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
        <LoyaltyIcon sx={{ color: "green" }} />
        Bank Offer5% cashback on Axis Bank Flipkart Debit Card up to ₹750
        <Link to="" className="text-primary fw-semibold">
          T&C
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
        <LoyaltyIcon sx={{ color: "green" }} />
        Bank Offer10% off up to ₹1,250 on BOBCARD EMI Transactions of 6 months
        and above tenures, Min TxnValue: ₹7,500
        <Link to="" className="text-primary fw-semibold">
          T&C
        </Link>
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "0.8rem" }}>
        <LoyaltyIcon sx={{ color: "green" }} />
        Special PriceGet extra ₹1300 off (price inclusive of cashback/coupon)
        <Link to="" className="text-primary fw-semibold">
          T&C
        </Link>
      </Typography>
    </>
  );
}

export default AvailableOffer;
