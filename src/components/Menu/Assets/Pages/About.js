import React from "react";

//import MainComponent from "../../../MainComponent";
import Navbar from "../../../Navbar";
import { Col, Row } from "react-bootstrap";
import "./About.css";
import About1 from "../../../Menu/Assets/Pages/about.jpg";
import { Container } from "react-bootstrap";
import Footer from "../../../Footer";
import why from "./why-600x400.jpg";
import setting from "./setting-450x450.png";
import link from "./link-450x450.png";
import control from "./control-450x450.png";
import click from "./click.jpg";

const About = () => {
  return (
    <>
      <Navbar />
      <Container className="background">
        <img src={About1} alt="" className="bg1" />
      </Container>
      <br />
      <p>
        <center>
          <b>
            <h4>About Us</h4>
          </b>
        </center>
        <br />
        <center>
          We develop effective content strategies for corporate brands under our
          proven and tested power process of “ROADMAP” strategy. We have a
          proven track record in delivering results based digital marketing
          campaigns.
        </center>
      </p>
      <Container>
        <Row>
          <Col
            className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12"
            style={{
              backgroundColor: "#090909",
              marginTop: "100px",
              transition:
                "background 0.3s,border 0.3s,border-radius 0.3s,box-shadow 0.3s",
              padding: "50px 0 50px 0",
            }}
          >
            <Row>
              <Col classname="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
                <img src={why} alt="" className="why" />
              </Col>
              <Col classname="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
                <p className="para">
                  We're A Leader In Tech-Enabled Digital Marketing Solutions
                  <br />
                  Mera Digi is a tech-enabled digital marketing solutions
                  provider, and we create custom strategies for each of our
                  clients based on their needs and goals. <br />
                  We plan customized campaigns to meet your organizational
                  requirements and campaign goals.<br></br> As a full service
                  digital agency, we deliver solutions across Adwords, Social
                  media marketing, Search engine optimization (SEO), Radio
                  Advertisement, Celebrity Marketing, and Content marketing
                  services
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <h2 style={{ marginTop: "60px", marginBottom: "60px" }}>
        <center>This is Full-Potential Marketing.</center>
      </h2>
      <Container>
        <Row>
          <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
            <Row>
              <Col className="md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
                <img src={setting} alt="" className="setting" />
                <h2 className="center">Services</h2>
                <p className="para1" style={{ marginBottom: "100px" }}>
                  Full Funnel Digital Marketing Services to reach your target
                  audience. We identify gaps in your current marketing strategy,
                  then consult you on what you need & how we'll make it happen -
                  all before the contract is signed.
                </p>
              </Col>
              <Col className="md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
                <img src={link} alt="" className="setting" />
                <h2 className="center"> Technology</h2>
                <p className="para1" style={{ marginBottom: "100px" }}>
                  Get customized reports for each team member involved, benefit
                  from real-time digital strategy shifts fueled by machine
                  learning, and dominate your space with the power of our
                  proprietary technology platform.
                </p>
              </Col>
              <Col className="md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
                <img src={control} alt="" className="setting" />
                <h2 className="center"> Difference</h2>
                <p className="para1" style={{ marginBottom: "100px" }}>
                  We're not just a marketing agency. We're an extension of your
                  team that integrates seamlessly with the other arms of your
                  business, driving profound impact on your bottom line without
                  creating more work.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <div className="Center">
        <img src={click} alt="" className="click" />
        <div class="image-container">
          <div class="text-overlay">
            <p>
              <center>
                <h4>LET'S GET STARTED</h4>
                <br />
                Ready To Make a Real Change? Let's Build this Thing Together!
                
              </center>
            </p>
           <center> <button>CLICK FOR A PROPOSAL</button></center>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
