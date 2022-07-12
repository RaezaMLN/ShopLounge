import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
// import Login from "./Login";
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import ShopGrid from "./ShopGrid";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OrderCompleted from "./OrderCompleted";
import Login from "./Login";
import ShopList from "./ShopList";
import DetailList from "./DetailList";
import Regist from "./Regist";
import About from "./About";
import SingleBlog from "./SingleBlog";

export default function Navigator() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="shopping-cart" exact element={<ShoppingCart />} />
          <Route path="shop-grid" exact element={<ShopGrid />} />
          <Route path="order-completed" exact element={<OrderCompleted />} />
          <Route path="login" exact element={<Login />} />
          <Route path="shop-list" exact element={<ShopList />} />
          <Route path="detail-list" exact element={<DetailList />} />
          <Route path="regist" exact element={<Regist />} />
          <Route path="about" exact element={<About />} />
          <Route path="singleBlog" exact element={<SingleBlog />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
