import React from "react";

import Input from "./Input";
import Button from "./Button";

export default function Footer(){
  return(
    <footer style={{backgroundColor:"#EEEFFB"}}>
        <div className="container py-5 d-flex gap-5">
            <div>
                <h1>Hekto</h1>
                <div className="d-flex gap-2 my-4">
                    <Input inpType="text" inpPlaceholder="Enter Email Address" />
                    <Button btnClass="clr2bg color-white border-0 rounded" btnStyle={{height:"2.3rem"}} btnTitle="Sign Up"/>
                </div>
                <p className="color-wildBlueYonder">Contact Info <br /> 17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
            <div>
                <h5 className="mb-4">Catagories</h5>
                <p className="color-wildBlueYonder">Laptops & Computers</p>
                <p className="color-wildBlueYonder">Cameras & Photography</p>
                <p className="color-wildBlueYonder">Smart Phones & Tablets</p>
                <p className="color-wildBlueYonder">Video Games & Consoles</p>
                <p className="color-wildBlueYonder">Waterproof Headphones</p>
            </div>
            <div>
                <h5 className="mb-4">Customer Care</h5>
                <p className="color-wildBlueYonder">My Account</p>
                <p className="color-wildBlueYonder">Discount</p>
                <p className="color-wildBlueYonder">Returns</p>
                <p className="color-wildBlueYonder">Orders History</p>
                <p className="color-wildBlueYonder">Order Tracking</p>
            </div>
            <div>
                <h5 className="mb-4">Pages</h5>
                <p className="color-wildBlueYonder">Blog</p>
                <p className="color-wildBlueYonder">Browse the Shop</p>
                <p className="color-wildBlueYonder">Category</p>
                <p className="color-wildBlueYonder">Pre-Built Pages</p>
                <p className="color-wildBlueYonder">Visual Composer Elements</p>
                <p className="color-wildBlueYonder">WooCommerce Pages</p>

            </div>
        </div>

    </footer>
   
  )
}