import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="bg-light">
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col">Hello there</div>
            <div className="col">Hello there</div>
            <div className="col">Join us here</div>
          </div>
        </div>

        <br />
        <br />
        <center>
          <Router>
            <small className="myFontBoldX">&copy;mysoftrack</small>
            <br />
            <small>
              <Link to="#">Terms and Conditions</Link>
              ||
              <Link to="#">Admin</Link>
              ||
              <Link to="#">All rights are reserved</Link>
            </small>
          </Router>
        </center>
        <br />
      </div>
    );
  }
}
export default Footer;
