import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Loginpage from "./Pages/Loginpage";
import Signuppage from "./Pages/Signuppage";
import Grocery from "./Components/Grocery";
import Mobile from "./Components/Mobile";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/Mobile" element={<Mobile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
