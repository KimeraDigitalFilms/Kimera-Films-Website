import React, { useState,useEffect } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cursor from "./components/Cursor/Cursor";
import './App.css'
import Projects from "./pages/Projects";
import Services from "./pages/Services";
function App() {
 

  document.body.style.overflowX = "hidden";

  document.body.style.width =
    document.documentElement.clientWidth.toString() + "px";

  function notify() {
    document.body.style.width =
      document.documentElement.clientWidth.toString() + "px";
  }
document.body.style.scrollBehavior='smooth'
  window.addEventListener("resize", notify);

  
  return (
    <Router>
      <Cursor />
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          exact
          path="/projects"
          element={
            <>
              <Projects />
            </>
          }
        />
        <Route
          exact
          path="/services"
          element={
            <>
              <Services/>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
