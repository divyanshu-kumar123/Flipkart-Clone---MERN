import React, { useContext, useEffect, useState } from "react";
import "../css/Navbar.css";
import flipkartLogo from "../assets/flipkart-logo.svg";
import logoBlue from "../assets/logoBluenew.png";
import { Link, useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";
import ShoppingCartCheckoutRoundedIcon from "@mui/icons-material/ShoppingCartCheckoutRounded";
import WaterDamageOutlinedIcon from "@mui/icons-material/WaterDamageOutlined";
import LoginBtn from "./LoginBtn";
import { useAuth } from "../context/AuthContext";
import ProfileBtn from "./ProfileBtn";
import api from "../api.js";
import Alert from "@mui/material/Alert";
import Badge from "@mui/material/Badge";

function Navbar() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  // check if we are on homepage
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (isLoggedIn) {
      api
        .get("/users/profile")
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          const message = err.response?.data?.message || "Error: Login failed";
          setError(message);
        });
    }
  }, [isLoggedIn]);

  //to get the number of item in cart
  useEffect(() => {
    api.get('/cart')
      .then((res) => {
        const cart = res.data.cart || [];
        const total = cart.length;
        setCartCount(total);
      })
      .catch((err) => {
        console.error("Failed to fetch cart:", err);
        setCartCount(0);
      });
  },[location.pathname, isLoggedIn])

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          isHome ? "bg-body-tertiary" : ""
        }`}
        style={{
          backgroundColor: isHome ? "" : "#2874f0",
        }}
      >
        <div className="container-fluid align-items-center d-flex">
          <div
            className="collapse navbar-collapse align-items-center d-flex pt-0 pb-0"
            id="navbarTogglerDemo01"
          >
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img
                src={isHome ? flipkartLogo : logoBlue}
                alt="flipkart"
                style={{ height: "70px", width:'153px' }}
              />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center flex-row">
              <li className="nav-item ps-1 pe-1 d-flex align-items-center">
                <form className="d-flex" role="search">
                  <Searchbar onSearch={handleSearch} />
                </form>
              </li>
              <li className="nav-item ps-2 pe-1 d-flex align-items-center">
                <div
                  className="nav-link-c"
                  style={{ color: isHome ? "" : "white" }}
                >
                  {!isLoggedIn ? (
                    <LoginBtn isHome={isHome}/>
                  ) : (
                    <ProfileBtn userName={user.name} isHome={isHome}/>
                  )}
                </div>
              </li>
              <li className="nav-item ps-0 pe-1 d-flex align-items-center">
                <div
                  className="nav-link-c"
                  style={{ color: isHome ? "" : "white" }}
                >
                  <Link to="/cart" style={{ color: isHome ? "" : "white" }}>
                    <Badge
                      badgeContent={cartCount}
                      color={isHome? 'primary' : "secondary"}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <ShoppingCartCheckoutRoundedIcon />
                    </Badge>
                    Cart
                  </Link>
                </div>
              </li>
              <li className="nav-item ps-1 pe-1 d-flex align-items-center">
                <div
                  className="nav-link-c"
                  style={{ color: isHome ? "" : "white" }}
                >
                  <Link to="/" style={{ color: isHome ? "" : "white" }}>
                    <WaterDamageOutlinedIcon /> Become a seller
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {error && (
        <Alert
          className="container border col-md-5 mt-1"
          severity="error"
          onClose={() => setError("")}
        >
          {error}
        </Alert>
      )}
    </>
  );
}

export default Navbar;
