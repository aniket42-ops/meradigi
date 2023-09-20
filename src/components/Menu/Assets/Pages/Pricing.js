import React from "react";
import Navbar from "../../../Navbar";
//import MainComponent from "../../../MainComponent";
//import Bg from "./Bg.jpg";
import { Row } from "react-bootstrap";
import "./Pricing.css";
import Footer from "../../../Footer";
import Tabs from "./Tabs";

const Pricing = () => {
  return (
    <>
      <Navbar />
        <Row className="bg">
          <Row>
            <p className="p1">PRICING PLANS</p>
          </Row>
          <Row>
            <p className="p2">No Hidden Charges! Choose Your Plan.</p>
          </Row>
          <Row>
            <p className="p3">Choose your plan</p>
          </Row>
        </Row>
      <Tabs/>
      <Footer/>
    </>
  );
};

export default Pricing;
