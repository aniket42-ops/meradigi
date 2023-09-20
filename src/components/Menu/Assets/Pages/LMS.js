import React from "react";
import { Col, Row } from "react-bootstrap";
import "./LMS.css";
import consult from "./consultant.png";
import lms from "./online-lesson.png";
import file from "./file-sharing.png";
import booking from "./booking.png";

const LMS = () => {
  return (
    <>
      <Row
        style={{
          backgroundColor: "transparent",
          backgroundImage:
            "linear-gradient(-130deg, #EEF3FF54 0%, #EEF3FF 100%)",
        }}
      >
        <Col className="col col-md-12 col-sm-12 col-xl-12 col-xxl-12 col-xs-12 col-lg-12">
          <Row>
            <Col className="col col-md-4 col-sm-4 col-xl-4 col-xxl-4 col-xs-4 col-lg-4">
              <p className="do">WHAT WE DO</p>
              <h1 className="our1">Our Moodle Development Includes</h1>
              <p className="we1">
                <b>
                  The best services we provide for our clients include our
                  integrity to work for them and the dedication we show towards
                  our individual projects.
                </b>
              </p>
            </Col>
            <Col className="col col-md-8 col-sm-8 col-xl-8 col-xxl-8 col-xs-8 col-lg-8">
              <Row>
                <Col>
                  <img src={consult} alt="consultant" className="consult" />
                  <br />
                  <p className="consultation">
                    <b>Consultation Services</b>
                  </p>
                  <br />
                  <p className="we2">
                    <b>
                      We are pioneers in offering the most trusted lms
                      consulting services to clients from different industry
                      verticals.
                    </b>
                  </p>
                </Col>
                <Col>
                  <img src={lms} alt="lms" className="consult" />
                  <br />
                  <p className="consultation">
                    <b>LMS Customization</b>
                  </p>
                  <br />
                  <p className="we2">
                    <b>
                      Our expert and custom designed Moodle issues are rather
                      appealing and flawlessly designed to make sure ease of use
                      and that it meets precise enterprise goals.
                    </b>
                  </p>
                </Col>
              </Row>
              <Row style={{ marginTop: "120px" ,marginBottom:"120px"}}>
                <Col>
                  <img src={file} alt="file" className="consult" />
                  <br />
                  <p className="consultation">
                    <b>LMS Migration & Integration</b>
                  </p>
                  <br />
                  <p className="we2">
                    <b>
                      With us, you could transfer to Moodle out of your present
                      LMS and integration of any plugin is simpler, faster and
                      easier.
                    </b>
                  </p>
                </Col>
                <Col>
                  <img src={booking} alt="booking" className="consult" />
                  <br />
                  <p className="consultation">
                    <b>LMS Mobile App Development</b>
                  </p>
                  <br />
                  <p className="we2">
                    <b>
                    For cloud infrastructure, we have a highly trained team to automate your business development with AI.
                    </b>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default LMS;
