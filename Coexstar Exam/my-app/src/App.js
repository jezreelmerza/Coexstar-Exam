import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Signup from "./components/Signup.js";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Successful from "./components/Successful.js";
import { History } from "history";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/successful" element={<Successful />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
