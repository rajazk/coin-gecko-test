import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./container/home/Main";
import ProductDetail from "./container/details/ProductDetail";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route  path="/details/:id" component={() => <ProductDetail />} />
      </Switch>
    </Router>
  );
}
