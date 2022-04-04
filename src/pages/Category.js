import React from "react";
import { Route, Routes, Link } from "react-router-dom";

export default () => (
  <div>
    <h2>Halaman Category</h2>
    <ul>
      <li>
        <Link to="foods">Foods</Link>
      </li>
      <li>
        <Link to="drinks">Drinks</Link>
      </li>
    </ul>
    <hr />
    <Routes>
      <Route path="category/foods">
        List of foods : bakso, sate, soto, dll
      </Route>
      <Route path="category/drinks">
        List of drinks : air mineral, kopi, esteh, es susu, dll
      </Route>
    </Routes>
  </div>
);
