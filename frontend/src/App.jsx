import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
