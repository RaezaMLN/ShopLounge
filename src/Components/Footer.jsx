import React from "react";

import Input from "./Input";
import Button from "./Button";

export default function Footer(){
  return(
    <footer style={{backgroundColor:"#EEEFFB"}}>
        <div className="container py-5 d-flex gap-5">
            <div>
                <h1 className="josefin text-dark fw-bold" style={{fontSize:"38px"}}>Hekto</h1>
                <div className="d-flex gap-2 my-4">
                    <Input inpType="text" inpPlaceholder="Enter Email Address" />
                    <Button btnClass="clr2bg color-white border-0 rounded" btnStyle={{height:"2.3rem"}} btnTitle="Sign Up"/>
                </div>
                <p className="color-wildBlueYonder lato">Contact Info <br /> 17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div>
                <h5 className="mb-4 josefin text-dark fw-bold" style={{fontSize:"22px"}}>Catagories</h5>
                <p className="color-wildBlueYonder lato">Laptops & Computers</p>
                <p className="color-wildBlueYonder lato">Cameras & Photography</p>
                <p className="color-wildBlueYonder lato">Smart Phones & Tablets</p>
                <p className="color-wildBlueYonder lato">Video Games & Consoles</p>
                <p className="color-wildBlueYonder lato">Waterproof Headphones</p>
            </div>
            <div>
                <h5 className="mb-4 josefin text-dark fw-bold" style={{fontSize:"22px"}}>Customer Care</h5>
                <p className="color-wildBlueYonder lato">My Account</p>
                <p className="color-wildBlueYonder lato">Discount</p>
                <p className="color-wildBlueYonder lato">Returns</p>
                <p className="color-wildBlueYonder lato">Orders History</p>
                <p className="color-wildBlueYonder lato">Order Tracking</p>
            </div>
            <div>
                <h5 className="mb-4 josefin text-dark fw-bold" style={{fontSize:"22px"}}>Pages</h5>
                <p className="color-wildBlueYonder lato">Blog</p>
                <p className="color-wildBlueYonder lato">Browse the Shop</p>
                <p className="color-wildBlueYonder lato">Category</p>
                <p className="color-wildBlueYonder lato">Pre-Built Pages</p>
                <p className="color-wildBlueYonder lato">Visual Composer Elements</p>
                <p className="color-wildBlueYonder lato">WooCommerce Pages</p>

            </div>
        </div>

    </footer>
   
  )
}