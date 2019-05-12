import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class MyNavBar extends Component {
  render() {
    return (
      <Router>
        <div className="container ">
          <nav className="navbar myNavCss navbar-expand-lg fixed-top navbar-light text-Dark bg-light">
            <Link className="navbar-brand" to="/">
              Logo
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item navBtn active">
                  <Link className="nav-link" to="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item navBtn active">
                  <Link className="nav-link" to="#">
                    About
                  </Link>
                </li>
                <li className="nav-item navBtn active">
                  <Link className="nav-link" to="#">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </Router>
    );
  }
}
export default MyNavBar;
