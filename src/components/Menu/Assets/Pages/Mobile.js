import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import bg from "./mobile-app-devp.gif";
import "./Mobile.css";
import layout from "./landing-app-layout-vector-600x474.png";
import { Row, Col, Container, Button } from "react-bootstrap";
import Android from "./Android.png";
import ios from "./ios.png";
import hybrid from "./Hybrid.png";
import web from "./web.png";
import ecom from "./E-com.png";
import custom from "./Custom.png";
import Mobile from "./mobile-scaled.jpg.webp";
import edit from "./edit.png";
import cloud from "./cloud.png";
import diamond from "./diamond.png";
import snap from "./Snap.png";
import snap1 from "./snap1.png";
import FAQS from "./FAQS";

const mobile = () => {
  return (
    <>
      <Navbar />
      <img src={bg} alt="" className="background1" />
      <p className="odoo">
        Mobile App <br />
        development <br />
        services
      </p>
      <Container>
        <Row>
          <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
            <Row>
              <Col
                className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6"
                style={{ marginLeft: "40px" }}
              >
                <h3 className="for"> # Amazing feature for</h3>
                <h2 className="mobile">Mobile App for your Business</h2>
                <p className="elevate">
                  <b>
                    Elevate Your Business with Advanced Mobile App Development
                  </b>
                </p>
                <br />
                <p>
                  Welcome to{" "}
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "#e22658" }}
                  >
                    Meradigi
                  </a>
                  , we provide full-cycle mobile app development services,
                  android application development services, ios app development
                  services, which include planning, developing, integrating, and
                  managing.
                  <br /> We offer end-to-end mobile application development
                  solutions across many sectors like healthcare app development,
                  ecommerce app development, grocery app development, enterprise
                  web application development, whether it be a customer-oriented
                  or enterprise-level application.
                  <br /> We are using latest technology like, mobile app
                  development with react native. We have best team for ios app
                  developer, java app developer which provides best android
                  application development services. <br />
                  Create an easy-to-use app for tablets, smartphones, or both to
                  accelerate the growth of your company. By creating B2B, B2C,
                  and C2C applications, we assist you in streamlining the
                  difficulties of doing business.
                </p>
              </Col>
              <Col>
                <img src={layout} alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
        <h3
          style={{
            color: "#000000",
            margin: "0px 0px 17px 0px",
            fontFamily: "Poppins Sans-serif",
            fontSize: "29px",
            fontWeight: "500",
            marginLeft: "35%",
            paddingTop: "5%",
          }}
        >
          Our Mobile{" "}
          <i
            style={{
              fontFamily: "Playfair Display",
              fontSize: "36px",
              fontWeight: "700",
              color: "#fa346e",
            }}
          >
            App
          </i>{" "}
          Development Services
        </h3>
        <br />
        <h3
          style={{
            color: "#111633",
            fontFamily: "Open Sans Sans-serif",
            fontSize: "20px",
            fontWeight: "700",
            marginLeft: "40%",
            lineHeight: "20px",
          }}
        >
          Best Application Development Company
        </h3>
        <br />
        <Row>
          <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
            <Row>
              <Col className="col-md-4 col-sm-4 col-xl-4 col-xxl-4 col-xs-4 col-lg-4">
                <div className="android">
                  <center>
                    <img src={Android} alt=""></img>
                    <p>
                      Android Mobile App Development <br />
                      <br />
                      With strong, feature-rich, UI/UX-friendly mobile apps,
                      target the sizable Android app market. Utilize our Android
                      app development services in India and the experience of
                      top-tier app developers to increase your company's revenue
                      with effective apps.
                    </p>
                    <br />
                  </center>
                </div>
              </Col>
              <Col>
                <div className="android">
                  <center>
                    <img src={ios} alt=""></img>
                    <p>
                      iOS App Development Services
                      <br />
                      <br /> Reach the top prospects with a scalable, reliable,
                      and complete iOS app created by our knowledgeable and
                      experienced staff. As the top mobile app development
                      company in Gurgaon, we have ten years of experience and a
                      successful line of the portfolio in designing iOS apps.
                    </p>
                  </center>
                </div>
              </Col>
              <Col>
                <div className="android">
                  <center>
                    <img src={hybrid} alt=""></img>
                    <p>
                      Hybrid App Development <br />
                      <br />
                      Make your digital business more accessible to customers of
                      diverse OS systems' apps. Our team of specialists uses the
                      React Native technology to build cross-platform
                      applications. Services for developing applications for iOS
                      and Android are the two main factors enhancing reach and
                      profitability.
                    </p>
                  </center>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="android">
                  <center>
                    <img src={web} alt=""></img>
                    <p>
                      Progressive Web App <br />
                      <br />
                      Consider using the progressive web app development trend
                      to stay on top. Here, we utilise the advantages of
                      Progressive Web Apps to provide a smooth experience across
                      various mobile devices (PWAs). When building mobile and
                      web apps that are focused on achieving results, our app
                      developers combine the best features.
                    </p>
                  </center>
                </div>
              </Col>
              <Col>
                <div className="android">
                  <center>
                    <img src={ecom} alt=""></img>
                    <p>
                      E-commerce App Development
                      <br />
                      <br /> With mobile commerce that is focused on outcomes,
                      take your online retail business to the next level. By
                      extending your digital footprints through high-performing
                      apps made to meet particular needs, we increase your
                      sales. Increase your reach to current clients and smoothly
                      ramp up your company's return on investment.
                    </p>
                  </center>
                </div>
              </Col>
              <Col>
                <div className="android">
                  <center>
                    <img src={custom} alt=""></img>
                    <p>
                      Custom App Development
                      <br />
                      <br />
                      Get Ready with your Requirement & <br />
                      <Button>Contact Us</Button>
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </p>
                  </center>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <h4 className="how">
        How It's <span className="work">Work?</span>
      </h4>
      <Row style={{ marginBottom: "10%" }}>
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <img src={Mobile} alt="" className="mobil" />
            </Col>
            <Col>
              <img
                src={edit}
                alt=""
                style={{ display: "inline-block" }}
                className="edit"
              />
              <h3 style={{ display: "inline-block" }}>Requirement Analysis</h3>
              <p style={{ marginLeft: "84px" }}>
                As a leading provider of mobile app development services,
                Meradigi has extensive experience in conducting requirement
                analysis for our clients. We take a structured approach to
                requirement gathering, involving both our development and
                project management teams in order to ensure that all
                stakeholders have a clear understanding of the project
                requirements.
              </p>
              <img src={cloud} alt="" style={{ display: "inline-block" }} />
              <h3 style={{ display: "inline-block" }}>Building</h3>
              <p style={{ marginLeft: "84px" }}>
                No matter what your specific app development needs are, we can
                help you create a stunning and highly functional mobile
                application that will exceed your expectations. We understand
                that the success of your business depends on the quality of your
                mobile app, which is why we always strive to deliver the best
                possible product to our clients.
              </p>
              <img src={diamond} alt="" style={{ display: "inline-block" }} />
              <h3 style={{ display: "inline-block" }}>Enjoy this app</h3>
              <p style={{ marginLeft: "84px" }}>
                Whether you're a busy student, working professional or busy
                parent, Enjoy This App can help you get organized and achieve
                your goals. Give it a try today!
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <img src={snap} alt="" style={{ marginBottom: "10%" }} />

      <h5 className="special">
        Our Special <span className="features">Features</span>
      </h5>
      <p className="river">
        <center>
          A small river named Duden flows by their place and supplies it with
          the
          <br /> necessary regelialia. It is a paradise
        </center>
      </p>
      <Row>
        <Col classname="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col className="md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <img src={snap1} alt=""/>
            </Col>
          </Row>
        </Col>
      </Row>
      <FAQS/>
   <Footer />
    </>
  );
};
export default mobile;
