import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./Home";
import ShoppingCart from "./ShoppingCart";
import ShopGrid from "./ShopGrid";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import OrderCompleted from "./OrderCompleted";
import Login from "./Login";
import ShopList from "./ShopList";
import ProductDetail from "./ProductDetail"
import Regist from "./Regist";
import About from "./About";
import NotFound from "./NotFound";
import SingleBlog from "./SingleBlog";
import Faq from "./Faq";
import ContactUs from "./ContactUs";

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
          <Route path="product-detail" exact element={<ProductDetail />} />
          <Route path="regist" exact element={<Regist />} />
          <Route path="about" exact element={<About />} />
          <Route path="not-found" exact element={<NotFound />} />
          <Route path="singleBlog" exact element={<SingleBlog />} />
          <Route path="faq" exact element={<Faq />} />
          <Route path="contact-us" exact element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
