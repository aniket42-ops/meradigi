import React from "react";
import building from "./building.jpg";
import { Row, Col } from "react-bootstrap";
import './Aboutus.css';

function Aboutus() {
  return (
    <div>
      
        <Row className="newbg">
          <Col className="col col-12 md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
       
            <Row>
              <Col className="col col-6 md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
                <img src={building} alt="#" height=" 300px" />
              </Col>
              <Col className="col col-6 md-6 sm-6 xl-6 xxl-6 xs-6 lg-6 ">
              <h1 className="p">About Us</h1>
                  <p className="p">
                    Meradigi is a tech-enabled virtual advertising and marketing
                    answers provider, and we create custom techniques for every
                    need of our customers<br/><br/>
                     based on their desires and dreams. Our
                    group is made from award-triumphing marketers, designers,
                    and developers,<br/><br/> and we realize what it takes to get actual
                    consequences online. We additionally maintain the focal
                    point at the metrics that suggest the most,<br/><br/> like leads and
                    sales generated. We realize that hitting those dreams is
                    what move agencies forward, and we accept that our customers' <br/><br/>
                    fulfilment is the pleasant degree of our personal
                    performance.
                  </p>
              </Col>
            </Row>
          </Col>
        </Row>  
    </div>
  );
}

export default Aboutus;
