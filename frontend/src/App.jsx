import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Loginpage from "./Pages/Loginpage";
import Signuppage from "./Pages/Signuppage";
import Grocery from "./Components/Grocery";
import CategoryPage from "./Pages/CategoryPage";
// import 'bootstrap/dist/css/bootstrap.min.css';
import mobileBanner from './assets/mobileBanner.webp'
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
          <Route path="/category/mobiles" element={<CategoryPage category="mobile" banner={mobileBanner} />} />
          <Route path="/category/fashion" element={<CategoryPage category="fashion" />} />
          <Route path="/category/electronics" element={<CategoryPage category="electronics" />} />
          <Route path="/category/homeNFurniture" element={<CategoryPage category="homeNFurniture" />} />
          <Route path="/category/appliance" element={<CategoryPage category="appliance" />} />
          <Route path="/category/toy" element={<CategoryPage category="toys" />} />
 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
