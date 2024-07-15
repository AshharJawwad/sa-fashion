import React, { useState } from "react";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import wishlist_icon from "../Assets/wishlist_icon.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menu,setMenu] = useState("Home");

  return (
    // Navigation Bar
    <div className="navbar">
      {/* Top Navigation Bar */}
      <div className="top-bar">
        {/* Top Navigation Items */}
        <div className="left">
          <ul className="yourorders">
            <li>Your Orders</li>
          </ul>
        </div>
        <div className="right">
          <ul className="c-l-r">
            <li>Currency</li>
            <Link style={{ textDecoration: 'none', color: "white" }} to='/login'><li>Loin/Register</li></Link>
          </ul>
        </div>
      </div>
      {/* Middle Navigation Bar */}
      <div className="middle-bar">
        {/* Middle Navigation Items */}
        <h1 className="nav-logo">
          <span>SA</span>Fashion
        </h1>
        {/* Wishlist & Cart Items */}
        <div className="w-c">
          <div>
            <Link style={{ textDecoration: 'none' }} to='/wishlist'><img src={wishlist_icon} alt="" /></Link>
            <div className="wishlist-count">0</div>
            <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="cart-count">0</div>
          </div>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <div className="bottom-bar">
        {/* Bottom Navigation Links */}
        <ul className="nav-links">
          <li onClick={()=>{setMenu("Home")}}>
            <Link style={{ textDecoration: 'none', color: "black" }} to='/'>Home</Link> {menu==="Home"?<hr/>:<></>}
          </li>
          <li onClick={()=>{setMenu("Store")}}> <Link style={{ textDecoration: 'none', color: "black" }} to='/store'>Store</Link> {menu==="Store"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Campaign")}}> <Link style={{ textDecoration: 'none', color: "black" }} to='/campaign'>Campaign</Link> {menu==="Campaign"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Blog")}}> <Link style={{ textDecoration: 'none', color: "black" }} to='/blog'>Blog</Link> {menu==="Blog"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("Contact")}}> <Link style={{ textDecoration: 'none', color: "black" }} to='/contact'>Contact</Link> {menu==="Contact"?<hr/>:<></>}</li>
        </ul>
      </div>
    </div>
  );
};
