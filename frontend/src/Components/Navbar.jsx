import React from "react";
import "../css/Navbar.css";
import flipkartLogo from "../assets/flipkart-logo.svg";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import WaterDamageOutlinedIcon from '@mui/icons-material/WaterDamageOutlined';
import LoginBtn from "./LoginBtn";

function Navbar() {

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // You can call API or update filter state here
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid align-items-center d-flex">
      <div className="collapse navbar-collapse align-items-center d-flex pt-0 pb-0" id="navbarTogglerDemo01">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src={flipkartLogo} alt="flipkart" />
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center flex-row">
          <li className="nav-item ps-1 pe-1 d-flex align-items-center">
            <form className="d-flex" role="search">
              <Searchbar onSearch={handleSearch} />
            </form>
          </li>
          <li className="nav-item ps-3 pe-1 d-flex align-items-center">
            <div className="nav-link-c">
              <Link to="/"> <LoginBtn /> </Link>
            </div>
          </li>
          <li className="nav-item ps-1 pe-1 d-flex align-items-center">
            <div className="nav-link-c">
              <Link to="/"><ShoppingCartCheckoutRoundedIcon /> Cart</Link>
            </div>
          </li>
          <li className="nav-item ps-1 pe-1 d-flex align-items-center">
            <div className="nav-link-c">
              <Link to="/"><WaterDamageOutlinedIcon /> Become a seller</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  );
}

export default Navbar;
