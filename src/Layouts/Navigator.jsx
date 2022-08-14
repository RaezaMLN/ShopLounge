import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import ProductDetail from "./ProductDetail";
import Shipping from "./Shipping";
import About from "./About";
import NotFound from "./NotFound";
import SingleBlog from "./SingleBlog";
import Faq from "./Faq";
import ContactUs from "./ContactUs";
import BlogPage from "./BlogPage";

function Redirect() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const loginData = localStorage.getItem("token");
    // const userData = localStorage.getItem("userData");

    
    if (!loginData) {
      if (
        location.pathname !== "/login" &&
        location.pathname !== "/" &&
        location.pathname !== "/about" &&
        location.pathname !== "/*" &&
        location.pathname !== "/singleBlog" &&
        location.pathname !== "/blogPage" &&
        location.pathname !== "/faq" &&
        location.pathname !== "/contact-us"
      ) {
        navigate("/login");
      }
    } else {
      // if (location.pathname == "/dashboard")
      // true && false = false
      // true || false = true
      if (location.pathname === "/login") {
        navigate("/");
      }

      // navigate("/");
    }

    // if (navigate(location.pathname)) {
    //   navigate("/login");
    // }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="shopping-cart" exact element={<ShoppingCart />} />
      <Route path="shop-grid" exact element={<ShopGrid />} />
      <Route path="order-completed" exact element={<OrderCompleted />} />
      <Route path="login" exact element={<Login />} />
      <Route path="shop-list" exact element={<ShopList />} />
      <Route path="product-detail/:id" exact element={<ProductDetail />} />
      <Route path="shipping" exact element={<Shipping />} />
      <Route path="about" exact element={<About />} />
      <Route path="*" exact element={<NotFound />} />
      <Route path="singleBlog" exact element={<SingleBlog />} />
      <Route path="blogPage" exact element={<BlogPage />} />
      <Route path="faq" exact element={<Faq />} />
      <Route path="contact-us" exact element={<ContactUs />} />
    </Routes>
  );
}

export default function Navigator() {
  return (
    <div>
      <Router>
        <Header />
        {/* <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="shopping-cart" exact element={<ShoppingCart />} />
          <Route path="shop-grid" exact element={<ShopGrid />} />
          <Route path="order-completed" exact element={<OrderCompleted />} />
          <Route path="login" exact element={<Login />} />
          <Route path="shop-list" exact element={<ShopList />} />
          <Route path="product-detail" exact element={<ProductDetail />} />
          <Route path="regist" exact element={<Regist />} />
          <Route path="about" exact element={<About />} />
          <Route path="*" exact element={<NotFound />} />
          <Route path="singleBlog" exact element={<SingleBlog />} />
          <Route path="faq" exact element={<Faq />} />
          <Route path="contact-us" exact element={<ContactUs />} />
        </Routes> */}
        <Redirect />
        <Footer />
      </Router>
    </div>
  );
}
