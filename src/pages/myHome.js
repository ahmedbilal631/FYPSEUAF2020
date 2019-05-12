import React, { Component } from "react";
import MyNavBar from "../components/myNavBar";
import MyHeader from "../components/myHeader";
import Slider from "../components/mySlider";
import Footer from "../components/myFooter";

class MyHome extends Component {
  render() {
    return (
      <div>
        <MyNavBar />
        <MyHeader />
        <Slider />
        <Footer />
      </div>
    );
  }
}
export default MyHome;
