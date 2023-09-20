import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import call from "./Call_to_Actions1.png";
import Search from "../../../Search";
import Box from "./Box";
import Boxes from "./Boxes";
import Circle from "./Circle";
import Client from "./Client";
import bg from "./sof__3bg2.png";

const Sample = () => {
  return (
    <>
      <Navbar />

      <Row
        style={{
          backgroundColor: "#023c5b",
          marginTop: "100px",
        }}
      >
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col classname="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <h1
                style={{
                  color: "#fff",
                  marginLeft: "20px",
                  fontWeight: "500",
                  fontSize: "6.4rem",
                }}
              >
                Unlock the Full Potential of Your Business with Our Free
                Consultation Services
              </h1>
              <p style={{ color: "#fff", marginLeft: "20px" }}>
                Talk to professionals in the field and take advantage of our
                complimentary consultation services{" "}
              </p>
              <br />
              <br />
              <br />
              <p
                style={{
                  color: "#7091a2",
                  fontFamily: "LatoSans-serif",
                  fontSize: "18px",
                  marginLeft: "20px",
                }}
              >
                Let's Connect
              </p>
              <br />
              <br />
              <Button
                style={{
                  marginLeft: "40px",
                  marginBottom: "40px",
                  backgroundColor: "#3497FF",
                  color: "white",
                  width: "100px",
                  padding: "9px 5px 0 5px",
                  // margin: " 0 0 0 0",
                  fontFamily: "Poppins",
                  fontSize: "15px",
                  fontWeight: "500",
                  bordeeRadius: "9px 9px 9px 9px",
                }}
              >
                <p>Book a Free Consultation</p>
              </Button>
            </Col>
            <Col>
              <img src={call} alt="" height="450" width="463" />
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Search />
      <br />
      <Container>
        <Row>
          <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
            <Row>
              <Col className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
                <h1
                  style={{
                    color: "#6a56a6",
                    margin: "15px 0 0 0",
                    fontSize: "28px",
                    lineHeight: "36px",
                  }}
                >
                  During Your Free Consultation, You Can Expect:
                </h1>
              </Col>
              <Col>
                <Box />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <br />
      <Boxes />
      <br />
      <Circle />
      <br />
      <Client />
      <br></br>
      <img src={bg} alt="" height="100px" width="100%" />
      <Row
        style={{
          backgroundColor: "#023c5b",
        }}
      >
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col classname="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <h6
                style={{
                  marginTop: "100px",
                  marginLeft: "40px",
                  marginBottom: "100px",
                  color: "#fff",
                  fontSize: "44px",
                  fontWeight: "300",
                  lineHeight: "54px"
                }}
              >
               READY TO GET STARTED?
               <br/>
               It's fast, free and very easy!
              </h6>
            </Col>
            <Col>
                <Button>BOOK A FREE CONSULTATION</Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Sample;
