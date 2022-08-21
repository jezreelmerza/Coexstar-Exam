import React from "react";
import navLogo from "../img/Logo.JPG";
import AnimShow from "./AnimShow.js";
import AnimHide from "./AnimHide";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "../App.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="logo">
        <a href="#">
          <img src={navLogo} alt="logo" />
        </a>
      </div>
      <div className="navbar">
        <div className="icon-bar" onClick={AnimShow}>
          <i></i>
          <i></i>
          <i></i>
        </div>

        <ul id="nav-lists">
          <li className="close">
            <span onClick={AnimHide}>×</span>
          </li>
          <li className="list">
            <a href="#">Home</a>
          </li>
          <li className="list">
            <a href="#">About</a>
          </li>
          <li className="list">
            <a href="#">Pricing</a>
          </li>
          <li className="list">
            <a href="#">Blogo</a>
          </li>
          <li className="list">
            <a href="#">Page</a>
          </li>
          <li className="list">
            <a href="#">Help</a>
          </li>
          <Link to="/" className="signupBtn">Sign up</Link>

        </ul>
      </div>
    </div>
  );
}


