import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import "./Moodle.css";
import bg1 from "./moodle.gif";
import { Row, Col, Button } from "react-bootstrap";
import moodle from "./wdg7dlqmfhg-600x900.jpg";
import LMS from "./LMS";
import about6 from "./e0591b82-image6.png";
import happy from "./Happy-students-or-pupils-watching-study-webinar-scaled-600x380.jpg";
const Moodle = () => {
  return (
    <>
      <Navbar />
      <img src={bg1} alt="web development" className="background1" />
      <h1 className="moodle">Moodle development and implementation</h1>
      <p className="best">
        Our best-in-class Business solution, To le you to grow business higher!
      </p>
      <br />
      <br />
      <Row>
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col
              className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6"
              style={{ marginLeft: "40px" }}
            >
              <h2 style={{ fontSize: "48px",marginLeft: "40px"  }}>
                <b>Moodle Development</b>{" "}
              </h2>
              <p className="We">
                We have a group of professional MOODLE builders having core
                understanding and significant trip in MOODLE development. As a
                MOODLE improvement company, we have assembled extremely good
                options corresponding to the customer’s particulars. MOODLE
                route customization is our strength, no longer simply the net
                however we have additionally tailor-made customized plugins or
                modules as per your enterprise specifications, alongside with
                the sturdy cell presence. We make certain to grant whole help to
                the customers with the aid of having fluent conversation at some
                point of the challenge and through rendering put up guide
                services.
              </p>
              <hr style={{ width: "47%" }} color="#097AFC" />
              <Button className="free1">Free consultation</Button>
              <br />
              <h5 className="Speak">
                Speak to us to see if it's a fit for you
              </h5>
              📞+91 96500 31626
            </Col>
            <Col>
              <img src={moodle} alt="" className="mod" />
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <LMS />
      <br />
      <br />
      <Row>
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <img src={about6} alt="" height="491px" width="491px" />
            </Col>
            <Col>
              <h4 className="Meradigi">— MERADIGI</h4>
              <h3 className="Moodle">
                Moodle Development as per Business need
              </h3>
              <p className="focus">
                We focus on give up to give up Moodle improvement answers and
                feature information in coping with agencies from diverse
                sectors. While turning in answers, we make sure adherence to the
                stern requirements of shipping even as preserving the most
                suitable degrees of quality. Partnering with us as your Moodle
                improvement company, you could create a extensive variety of
                sports with utmost self assurance and professionalism.
              </p>
              <p className="academy">
                ✔️Academic Organizations
                <br />
                ✔️Corporate Sectors
                <br />
                ✔️Public Sectors
                <br /> ✔️Ecommerce
                <br /> ✔️School, Colleges & Institutions
                <br /> ✔️Online Tutorials
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <p className="buildp">
        <h3 className="build">
          Build your personalised Online Learning System{" "}
        </h3>
        <p className="many">
          Many School’s,Educational Institutes, Corporates and Govt Sector need
          to transfer an on-line coaching structures to their employees and
          students because of advancement in Technology and we have to keep
          updated so through LMS they can easily build their custom course and
          They can deliver by LMS . With LMS development, that is the proper
          time to recall constructing powerful on-line guides which might be
          characteristic rich, gives extra manipulate and facilitates to live
          interactive
        </p>
        <br/>
        <Button className="need">Need consultation</Button>
        <br/>
        <br/>
      </p>
      <Row>
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col
              className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6"
              style={{ marginLeft: "40px" }}
            >
              <h2 style={{ fontSize: "48px",marginLeft:"40px" }}>
                <b>
                  Bringing Innovations to the
                  Learning Technology
                </b>{" "}
              </h2>
              <p className="We">
                We at <b>Meradigi</b> have a pro technical group imparting absolutely
                customized, robust, speedy and secured e-mastering control
                gadget to our worldwide clients. LMS builders in India in truth
                assist groups to deal with the schooling wishes and meet the
                enterprise dreams with the aid of using integrating all
                schooling capabilities which might be unfold over the
                organization. It is our in depth studies method that allows us
                to contain problematic and powerful capabilities that resource
                the mastering control answers.<br/> <br/>
                We have the know-how to tailor
                the answers to fit your enterprise procedures or even set new
                requirements with the aid of using imparting quite customizable
                modules with inside the LMS. Our maximum precedence is to hold
                patron relationships and so we make certain to deal with your
                maximum complicated schooling wishes and offer first-rate price
                for money. With us, it is straightforward to create first-rate
                mastering guides that your college students will enjoy.
              </p>
            </Col>
            <Col>
              <img src={happy} alt=""  />
            </Col>
          </Row>
        </Col>
      </Row>

      <Footer />
    </>
  );
};

export default Moodle;
