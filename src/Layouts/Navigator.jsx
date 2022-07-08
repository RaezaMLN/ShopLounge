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
import Login from "./Login";
import Regist from "./Regist";
import About from "./About";

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
          <Route path="login" exact element={<Login />} />
          <Route path="regist" exact element={<Regist />} />
          <Route path="about" exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
