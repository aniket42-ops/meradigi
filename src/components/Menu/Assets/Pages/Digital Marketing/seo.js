import React from "react";
import Navbar from "../../../../Navbar";
import Footer from "../../../../Footer";
import { Col, Container, Row } from "react-bootstrap";
import "./seo.css";
import snap from "./snap.png";
import alt from "./3n3or1umnvq-768x576.jpg";
import Box1 from "./Box1";

const seo = () => {
  return (
    <>
      <Navbar />
      <section>
        <Row>
          <Col>
            <img src={snap} alt="" />
          </Col>
        </Row>
      </section>
      <Container>
        <Row>
          <Col className="col col-md-12 col-sm-12 col-xl-12 col-xxl-12 col-xs-12 col-lg-12">
            <Row>
              <Col className="col col-md-6 col-sm-6 col-xl-6 col-xxl-6 col-xs-6 col-lg-6">
                <img src={alt} alt="" className="alt" />
              </Col>
              <Col>
                <p className="Service">#1 SEO Service Provider</p>
                <br />
                <p className="agency">Mera Digi is a leading SEO agency. In our search engine
                optimization services, you get a custom strategy, world-class
                technology, and an elite SEO team. We focus on driving revenue
                for our clients, and we provide all of the services and
                technology your business needs to grow with SEO. Our campaigns
                build a website's relevance and trust with search engines. Every
                task performed has a specific purpose that improves your
                website's ranking.</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
     <h3 className="engine"><center>Search Engine <br></br>Optimization Services</center></h3>
    <Box1></Box1>
    <br/><br/>
      <Footer />
    </>
  );
};
export default seo;
