import React, { useState } from "react";
import { Box, Button,  Paper, Typography } from "@mui/material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import { Link } from "react-router-dom";
import {useAuth} from '../context/AuthContext'



function ProfileBtn({userName = "Demo", isHome}) {

    const [open, setOpen] = useState(false);
    const {logout} = useAuth();

  return (
    <Box
    sx={{ position: "relative", display: "inline-block" }}
    onMouseEnter={() => setOpen(true)}
    onMouseLeave={() => setOpen(false)}
  >
    {/* <Link to=""> */}
    <Button
      variant={open ? "contained" : "text"}
      size="medium"
      sx={{
         color: isHome ? (open ? "white" : "black") : "white",
        height: "3rem",
        width: "7rem",
        borderRadius: "10px",
        transition: "all 0.5s ease-in-out",
      }}
      className="profile-btn"
    >
      <PermIdentityOutlinedIcon className="fs-2 pe-2" /> {userName}
      {!open ? (
        <KeyboardArrowDownOutlinedIcon />
      ) : (
        <KeyboardArrowUpOutlinedIcon />
      )}
    </Button>
    {/* </Link> */}

    {open && (
      <Paper
        elevation={3}
        sx={{
          position: "absolute",
          top: "100%",
          left: 0,
          mt: 1,
          p: 2,
          zIndex: 1000,
          width: "220px",
          backgroundColor: "white",
        }}
      >
      <div className="login-option">
        <p><Link to="/" className="pt-1 pb-1"><PermIdentityOutlinedIcon className="pe-2"/> My profile</Link></p>
        <p><Link to="/" className="pt-1 pb-1"><AddCircleOutlineOutlinedIcon className="pe-2"/>Flipkart Plus Zone</Link></p>
        <p><Link to="/orders" className="pt-1 pb-1"><ViewInArOutlinedIcon className="pe-2"/>Orders</Link></p>
        <p><Link to="/" className="pt-1 pb-1"><i className="fa-regular fa-heart pe-2"></i>Wishlist</Link></p>
        <p><Link to="/" className="pt-1 pb-1"><StarsOutlinedIcon className="pe-2" />Rewards</Link></p>
        <p><Link to="/" className="pt-1 pb-1"><i className="fa-regular fa-credit-card pe-2"></i>Gift cards</Link></p>
        <p><Link to="/" className="pt-1 pb-1"><i className="fa-regular fa-bell pe-2"></i>Notification</Link></p>
    <p className="pt-1 pb-1" onClick={logout}><i className="fa-solid fa-arrow-right-from-bracket pe-2"></i>Logout</p>

      </div>

      </Paper>
    )}
  </Box>
  )
}

export default ProfileBtn