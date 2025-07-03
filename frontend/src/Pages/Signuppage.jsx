import React, { useEffect, useState } from "react";
import "../css/Loginpage.css";
import BoxModal from "../Components/BoxModal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import api from "../api.js";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

function Comp() {
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("user");
  let [error, setError] = useState("");
  let [success, setSuccess] = useState("");


//Register user
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }
    try {
      const res = await api.post("/users/register", {
        name,
        email,
        password,
        role,
      });
      localStorage.setItem("token", res.data.token);
      setSuccess("Registration successful!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      const message = err.response?.data?.message || "Error : Login failed";
      setError(message);
    }
  };

  //to dismiss the error alert
  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(""), 4000);
      return () => clearTimeout(timeout);
    }
  }, [error]);
  
  return (
    <div className="pt-5 comp">
      <form onSubmit={handleRegister}>
        <div>
          {error && (
            <Alert
              severity="error"
              onClose={() => {
                setError("");
              }}
            >
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" onClose={() => setSuccess("")}>
              {success}
            </Alert>
          )}
          <TextField
            className="mt-1"
            label="Enter Name"
            variant="standard"
            sx={{ width: "100%" }}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            className="mt-3"
            label="Enter Email"
            type="email"
            variant="standard"
            sx={{ width: "100%" }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            className="mt-3"
            label="Enter Password"
            variant="standard"
            type="password"
            sx={{ width: "100%" }}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
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
              Privacy Policy.
            </a>
          </p>
          <Button
            variant="contained"
            sx={{ width: "100%", backgroundColor: "#FB641B", height: "3rem" }}
            type="submit"
          >
            Sign up
          </Button>
          <Link to="/login">
            <Button
              className="mt-4 text-primary fw-bold"
              variant="contained"
              sx={{ width: "100%", backgroundColor: "white", height: "3rem" }}
            >
              Existing User? Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}

function Signuppage() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <BoxModal
        title={"Looks like you're new here!"}
        desc={"Sign up with your email to get started"}
        component={<Comp />}
      />
    </div>
  );
}

export default Signuppage;
