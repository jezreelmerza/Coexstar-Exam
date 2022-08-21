import React, { useState } from "react";
import Signup from "./Signup.js";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../App.css";

function Successful() {
  return (
    <div className="signup-page">
      <div className="signup-intro">
        <h1 className="signup-title">
          Successfuly signed up. Kindly click <Link to="/">here</Link>
        </h1>
      </div>
    </div>
  );
}

export default Successful;
