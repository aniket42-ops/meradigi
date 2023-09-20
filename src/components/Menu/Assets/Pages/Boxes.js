import React from "react";
import "./Boxes.css";
import { Row, Col } from "react-bootstrap";
import about from "./about-us_img-1.png";
import first from "./1.png";
import second from "./2.png";
import third from "./3.png";
import four from "./4.png";

const Boxes = () => {
  return (
    <>
      <div className="contain">
        <div class="boxes1">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            How to build my own website and app
          </h3>
          <p className="we">
            During the consultation, we will listen to your requirements and ask
            questions to get a better understanding of what you are looking for.
            We will then analyze your needs and suggest custom design and
            development that may meet your criteria.
          </p>
        </div>
        <div class="boxes2">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            Is there any existing product for my need
          </h3>
          <p className="we">
            We understand that finding the right product can be overwhelming and
            time-consuming. That's why we offer our expertise to help you save
            time and effort.
          </p>
        </div>
        <div class="boxes3">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            How to setup company infrastructure
          </h3>
          <p className="we">
            Our experts will advise you on the best practices for setting up
            your company's IT systems, network, security, and other
            infrastructure components.
          </p>
        </div>
        <div class="boxes4">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            Payroll services
          </h3>
          <p className="we">
            Managing payroll can be time-consuming and complex. Our team can
            help you simplify the process by providing payroll services that
            meet your specific needs.
          </p>
        </div>
      </div>
      <br />
      <div className="contain">
        <div class="boxes1">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            Which technology is the best for me
          </h3>
          <p className="we">
            Our goal is to provide you with the best possible service and help
            you find the technology that meets your needs.
          </p>
        </div>

        <div class="boxes2">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            How to find the best developers for my company
          </h3>
          <p className="we">
            With our platform, you get access to the best freelancers who have
            proven their expertise through our rigorous vetting process, so you
            don't have to worry about low-quality work ever again.
          </p>
        </div>
        <div class="boxes3">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            Queries related to legal and Finance
          </h3>
          <p className="we">
            We will provide guidance on various legal and financial matters,
            including taxes, contracts, compliance, and more.
          </p>
        </div>
        <div class="boxes4">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            HR services
          </h3>
          <p className="we">
            Your employees are valuable assets to your business, and managing
            them effectively is essential for success.
          </p>
        </div>
      </div>
      <br />
      <br />
      <h4 className="succeed">What's More? We Can Help You Succeed.</h4>
      <br></br>
      <div className="contain">
        <div className="boxes5">
          <h3 className="advices">
            <img src={first} alt=""/><br/>
            Great advices </h3>
          <p className="get">
            Get Ahead Of The Competition With Our Expert Advice
          </p>
        </div>
        <div className="boxes6">
          <h3 className="advices">
          <img src={second} alt=""/><br/>
            Extreme security </h3>
          <p className="get">
            We Protect Your Business with Extreme Security Measures
          </p>
        </div>
        <div className="boxes7">
          <h3 className="advices">
            <img src={third} alt=""/><br/>
          Notification alert </h3>
          <p className="get">
            Stay Connected and Informed with Our Notification Alerts
          </p>
        </div>
        <div className="boxes8">
          <h3 className="advices">
          <img src={four} alt=""/><br/>
            Regular analytics </h3>
          <p className="get">
            Get Access To Day To Day Work Report and Stay Current
          </p>
        </div>
      </div>
      <Row>
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <img src={about} alt="" className="about-us" />
            </Col>
            <Col className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <h3 className="your">
                Your one stop solution 
                </h3>
               <h2 className="free"> We Provide FREE Consultation Services On
                Various Platform </h2>
                <p className="needs">We understand that every business has unique
                needs and challenges. That's why we offer a free consultation
                service to help you identify opportunities for growth and
                improvement. Our team of experts will work with you to
                understand your business goals, review your current website, and
                make recommendations for improvement.</p>
              
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Boxes;
