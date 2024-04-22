import React, { useEffect } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cursor from "./components/Cursor/Cursor";
import './App.css'
function App() {

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
      </Routes>
    </Router>
  );
}

export default App;
