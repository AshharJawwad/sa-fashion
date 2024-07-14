import React from "react";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="top-bar">
        <div className="left">
          <ul className="yourorders">
            <li>
                Your Orders
            </li>
          </ul>
        </div>
        <div className="right">
            <ul className="c-l-r">
                <li>Currency</li>
                <li>Login/Register</li>
            </ul>
        </div>
      </div>
      <div className="middle-bar">
        <p className="nav-logo">
            <span>SA</span>Fashion
        </p>
        <div className="search-box">
            <form action="">
                <input type="text" placeholder="Search by product name" />

            </form>
        </div>
        <div className="w-c">
            <img src={cart_icon} alt="" />
        </div>
      </div>
      <div className="bottom-bar">
        <ul className="nav-links">
            <li>Home</li>
            <li>Store</li>
            <li>Campaign</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
