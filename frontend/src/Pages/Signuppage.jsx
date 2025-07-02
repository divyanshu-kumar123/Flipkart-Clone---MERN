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
            className="mt-1"
            id="standard-basic"
            label="Enter Name"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <TextField
          className="mt-3"
            id="standard-basic"
            label="Enter Email"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <TextField
            className="mt-3"
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
              Terms of Use
            </a>
            and
            <a
              className="text-primary"
              href="https://www.flipkart.com/pages/privacypolicy"
            >
              Privacy Policy.
            </a>
          </p>
          <Button
            variant="contained"
            sx={{ width: "100%", backgroundColor: "#FB641B", height: "3rem" }}
          >
            Login
          </Button>
          <Link to='/login'>
          <Button
          className="mt-4 text-primary fw-bold"
            variant="contained"
            sx={{ width: "100%", backgroundColor: "white", height: "3rem" }}
          >
            Existing User? Login
          </Button>
          </Link>
       
        </div>
      </div>
    );
  }

function Signuppage() {
  return (
<div className="d-flex justify-content-center mt-3">
      <BoxModal title={"Looks like you're new here!"} 
      desc={"Sign up with your email to get started"}
      component={<Comp />} />
    </div>
  )
}

export default Signuppage