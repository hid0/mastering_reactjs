import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";

let match = useRouteMatch();

export default () => (
  <div>
    <h2>Halaman Category</h2>
    <ul>
      <li>
        <Link to={`${match.url}/foods`}>Foods</Link>
      </li>
      <li>
        <Link to={`${match.url}/drinks`}>Drinks</Link>
      </li>
    </ul>
    <hr />
    <Switch>
      <Route path="category/foods">
        List of foods : bakso, sate, soto, dll
      </Route>
      <Route path="category/drinks">
        List of drinks : air mineral, kopi, esteh, es susu, dll
      </Route>
    </Switch>
  </div>
);
