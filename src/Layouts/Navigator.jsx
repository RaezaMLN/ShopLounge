import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
// import Login from "./Login";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import ShopGrid from "./ShopGrid";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import ShopList from "./ShopList";
import DetailList from "./DetailList";

export default function Navigator() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="shopping-cart" exact element={<ShoppingCart />} />
          <Route path="shop-grid" exact element={<ShopGrid />} />


          <Route path="shop-list" exact element={<ShopList />} />
          <Route path="detail-list" exact element={<DetailList />} />
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
