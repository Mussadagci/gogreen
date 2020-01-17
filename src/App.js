import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" Component={ProductList} />
          <Route path="/details" Component={Details} />
          <Route path="/cart" Component={Cart} />
          <Route Component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
