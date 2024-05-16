// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Ruangguru!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
