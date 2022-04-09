import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Category from "./pages/Category";
import { Switch, NavLink, Route, Redirect } from "react-router-dom";
import Post from "./pages/Post";
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
      {/* use react router dom v6 */}
      {/* <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/member" element={<Navigate to="/" replace />} />
        <Route path="/category" element={<Category />} />
      </Routes> */}
      <div className="main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          {/* <Route path="/member">
            <Redirect to="/" />
          </Route>
          <Route path="/category">
            <Category />
          </Route> */}
        </Switch>
      </div>
    </div>
  );
}

export default App;
