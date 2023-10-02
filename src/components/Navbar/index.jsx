import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; // Import Link
import AboutUs from "../../pages/About";
import Home from "../../pages/Home";
import Products from "../../pages/Products";

const MyNavbar = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> {/* Link to the Home component */}
            </li>
            <li>
              <Link to="/about">About Us</Link> {/* Link to the AboutUs component */}
            </li>
            <li>
              <Link to="/products">Products</Link> {/* Link to the Products component */}
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default MyNavbar;
