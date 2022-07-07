import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
// import Login from "./Login";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import ShopeGrid from "./ShopGrid";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OrderCompleted from "./OrderCompleted";

export default function Navigator() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="shopping-cart" exact element={<ShoppingCart />} />
          <Route path="shope-grid" exact element={<ShopeGrid />} />
          <Route path="order-completed" exact element={<OrderCompleted />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
