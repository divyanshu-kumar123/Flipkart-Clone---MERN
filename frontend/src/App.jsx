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
import SpecificProductPage from "./Pages/SpecificProductPage";
import CartPage from "./Pages/CartPage";
import OrderPage from "./Pages/OrderPage";
import RecentOrdersPage from "./Pages/RecentOrdersPage";
import OrderDetailsPage from "./Pages/OrderDetailsPage";
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
          <Route path="/cart" element={<CartPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/orders" element={<RecentOrdersPage />} />
          <Route path="/orders/:orderId" element={<OrderDetailsPage />} />
          <Route path="/category/mobiles" element={<CategoryPage category="mobile" banner={mobileBanner} />} />
          <Route path="/category/fashion" element={<CategoryPage category="fashion" />} />
          <Route path="/category/electronics" element={<CategoryPage category="electronics" />} />
          <Route path="/category/homeNFurniture" element={<CategoryPage category="homeNFurniture" />} />
          <Route path="/category/appliance" element={<CategoryPage category="appliance" />} />
          <Route path="/category/toy" element={<CategoryPage category="toys" />} />
          <Route path="/products/:id" element={<SpecificProductPage />} />
 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
