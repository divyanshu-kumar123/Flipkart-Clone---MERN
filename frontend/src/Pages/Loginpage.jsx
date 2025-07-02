import React from "react";
import "../css/Loginpage.css";
import BoxModal from "../Components/BoxModal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom'

function Comp() {
  return (
    <div className="pt-5 comp">
      <div>
        <TextField
          id="standard-basic"
          label="Enter Email"
          variant="standard"
          sx={{ width: "100%" }}
        />
        <TextField
          className="mt-4"
          id="standard-basic"
          label="Enter Password"
          variant="standard"
          sx={{ width: "100%" }}
        />
        <p className="tnc-para mt-4">
          By continuing, you agree to Flipkart's
          <a
            className="text-primary"
            href="https://www.flipkart.com/pages/terms"
          >
            {" "}
            Terms of Use{" "}
          </a>
          and{" "}
          <a
            className="text-primary"
            href="https://www.flipkart.com/pages/privacypolicy"
          >
            Privacy Policy
          </a>
          .
        </p>
        <Button
          variant="contained"
          sx={{ width: "100%", backgroundColor: "#FB641B", height: "3rem" }}
        >
          Login
        </Button>
      </div>
      <div className="bottom">
        <center className="pb-4">
        <Link to="/signup" className="text-primary">New to flipkart? Sign up</Link>
        </center>
      </div>
    </div>
  );
}

function Loginpage() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <BoxModal component={<Comp />} />
    </div>
  );
}

export default Loginpage;
