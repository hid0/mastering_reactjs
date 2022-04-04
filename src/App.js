import "./App.css";
import React from "react";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";

function App() {
  return (
    <div className="App">
      {/* navigation */}
      <ul className="menu">
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/member" activeClassName="active">
            Member
          </NavLink>
        </li>
        <li>
          <NavLink to="/category" activeClassName="active">
            Category
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/member" element={<Navigate to="/" replace />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </div>
  );
}

export default App;
