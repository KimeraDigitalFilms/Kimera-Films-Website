import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cursor from "./components/Cursor/Cursor";

function App() {
  return (
    <Router>
      <Cursor/>
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
