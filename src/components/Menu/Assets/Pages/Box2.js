import React from "react";
import "./Box2.css";
import { Row, Col, Button } from "react-bootstrap";
import about from "./pkrnxegurgm-1-600x750.jpg"

const Box2 = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        OUR <i style={{ color: "#0492FF" }}>Web Development</i> SERVICES INCLUDE
      </h1>
      <Row className="bg">
        <br />
        <Col>
          <div className="flx">
            <div className="Box3">
              <h3>Responsive Design</h3>
            </div>
            <div className="Box4">
              <h3>Graphics Designing</h3>
            </div>
            <div className="Box5">
              <h3>Website content strategy</h3>
            </div>
            <div className="Box6">
              <h3>Support & Maintenence</h3>
            </div>
          </div>
          <br />
          <div className="flexx">
            <div className="Box7">
              <h3>User Experience Design</h3>
            </div>
            <div className="Box8">
              <h3>SEO Optimized</h3>
            </div>
            <div className="Box9">
              <h3>Third Party Integration</h3>
            </div>
            <div className="Box10">
              <h3>Custom Design</h3>
            </div>
          </div>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "black" }}>
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <br />
              <br />
              <br />
              <br />
              <h1 style={{ color: "white", marginLeft: "200px" }}>
                CHECK THE FEATURES
              </h1>
              <br />
              <br />
              <br />
              <br />
              <h2 className="you">
                Why do you want a<br />{" "}
                <i style={{ color: "#0492FF" }}>web services development ?</i>
              </h2>
              <h5 style={{ color: "#FFFFFF" ,marginLeft:"100px"}} >
                Having a website makes you look professional and
                <br /> increases trust. Most people don’t trust a business
                without a good website.
                <br/>
                <br /> A clean, modern page that is regularly updated and pops
                up  <br /> in search engines is an instant credibility boost.
                <br/> <br /> You
                  can create a mobile app development for your <br /> business and
                generate more leads and grow you business fast.
              </h5>
              <Button className="lets">Lets Start</Button>
              <br/>
        <br/> 
        <br/>
            </Col>
            <Col>
            <img src={about} alt="" className="about1"/>
            </Col>
          </Row>
        </Col>
        <br/>
        <br/>
      </Row>
    </>
  );
};

export default Box2;
