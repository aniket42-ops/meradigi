import React from "react";
import "./Web.css";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import { Row, Col, Button} from "react-bootstrap";
import clock from "./Clip_distance_education_by_Icons8.gif";
import bg from "./video_bg.gif";
import Box1 from "./Box1";
import Box2 from "./Box2";
 import FAQ1 from "./FAQ";

const Web = () => {
  return (
    <>
      <Navbar /> 
     <img src={bg} alt="web development" className="bg"/>
      <h1 className="web">Web Development Services</h1>
      <p className="best">
        Our best-in-class Business solution, To let you to grow business higher!
      </p>

      <Row>
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <img src={clock} alt="" className="clock" />
            </Col>
            <Col>
              <h2 className="website"> Website For Business </h2>
              <p className="more">
                More than a portfolio or showcase of your wares and services, a
                truly focussed business website should be your highest
                performing sales person. They're your virtual shopfront,
                customer support and sales team rolled into one. Done right, a
                business website builds rapport and trust with potential
                customers before they even get on the phone—or gets straight to
                making the sale.
              </p>
              <hr style={{ width: "47%", color: "#097AFC",paddingTop:"2px", paddingBottom:"2px",display: "flex"}}></hr>
              <Button className="free1">Free consultation</Button>
              <br/>
              <h5 className="Speak">Speak to us to see if it's a fit for you</h5>
              📞+91 96500 31626 
            </Col>
          </Row>
        </Col>
      </Row>
      <br/>
      <Box1/>
      <br/> 
      <br/>
      <Box2/>
      <br/> 
      <br/>
      <FAQ1/>
      <Footer />
    </>
  );
};

export default Web;
