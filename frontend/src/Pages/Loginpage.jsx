import React, { useState } from "react";
import "../css/Loginpage.css";
import BoxModal from "../Components/BoxModal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import api from "../api.js"; 

function Comp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      const res = await api.post("/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/"); 
    } catch (err) {
      const msg = err.response?.data?.message || "Login failed";
      setError(msg);
    }
  };

  return (
    <div className="pt-5 comp">
      <form onSubmit={handleLogin}>
        <div>
          {error && (
            <Alert severity="error" onClose={() => setError("")}>
              {error}
            </Alert>
          )}

          <TextField
            label="Enter Email"
            type="email"
            variant="standard"
            sx={{ width: "100%" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className="mt-4"
            label="Enter Password"
            type="password"
            variant="standard"
            sx={{ width: "100%" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="tnc-para mt-4">
            By continuing, you agree to Flipkart's{" "}
            <a
              className="text-primary"
              href="https://www.flipkart.com/pages/terms"
            >
              Terms of Use
            </a>{" "}
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
            type="submit"
            sx={{ width: "100%", backgroundColor: "#FB641B", height: "3rem" }}
          >
            Login
          </Button>
        </div>
      </form>

      <div className="bottom">
        <center className="pb-4">
          <Link to="/signup" className="text-primary">
            New to Flipkart? Sign up
          </Link>
        </center>
      </div>
    </div>
  );
}

function Loginpage() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <BoxModal
        title="Login"
        desc="Get access to your Orders, Wishlist and Recommendations"
        component={<Comp />}
      />
    </div>
  );
}

export default Loginpage;
