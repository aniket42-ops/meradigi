import React from "react";
import "./Client.css";
import { Col, Row } from "react-bootstrap";

const Client = () => {
  return (
    <>
      <h3 className="says"> Clients Says</h3>
      <h4 className="testimonials"> Testimonials</h4>
      <Row>
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <h5 className="our"> About our client</h5>
            </Col>
            <Col>
              <div class="hwrap">
                <div class="hmove">
                  <div class="hslide">
                    <p>
                      ⭐⭐⭐⭐⭐
                      <br />
                      "Working with Meradigi was a game-changer for our
                      business. Their web development team was able to create a
                      stunning website that perfectly captured our brand
                      identity and helped us stand out in a crowded market. They
                      were always available to answer our questions and made the
                      entire process stress-free. I would recommend them to
                      anyone looking for a top-notch web development team."
                      <br />
                    </p>
                    <p className="sarah">
                      Sarah Johnson
                      <br />
                      Marketing Manager
                    </p>
                  </div>
                  <div class="hslide">
                    <p>
                      ⭐⭐⭐⭐⭐
                      <br />
                      "I cannot speak highly enough of the ERP development
                      services provided by Meradigi. The team was knowledgeable,
                      efficient, and truly invested in the success of our
                      business. Thanks to their expertise, we were able to
                      streamline our operations and save valuable time and
                      resources. I would definitely work with them again in the
                      future."
                    </p>
                    <p className="sarah">
                      Amelia Mia
                      <br />
                      Wordpress Dev.
                    </p>
                  </div>
                  <div class="hslide">
                    <p>
                      ⭐⭐⭐⭐⭐
                      <br />
                      "I am incredibly impressed with the web development
                      services provided by [Your Company Name]. The team was
                      professional, responsive, and delivered results beyond my
                      expectations. I highly recommend them to anyone looking
                      for high-quality web development services."
                    </p>
                    <p className="sarah">
                        Jane Doe
                      <br />
                      CEO
                    </p>
                  </div>
                  <div class="hslide">
                    <p>
                      ⭐⭐⭐⭐⭐
                      <br />
                      "I cannot speak highly enough of the ERP development
                      services provided by Meradigi. The team was knowledgeable,
                      efficient, and truly invested in the success of our
                      business. Thanks to their expertise, we were able to
                      streamline our operations and save valuable time and
                      resources. I would definitely work with them again in the
                      future."
                    </p>
                    <p className="sarah">
                      John Smith
                      <br />
                      CFO
                    </p>
                  </div>
                  <div class="hslide">
                    <p>
                      ⭐⭐⭐⭐⭐
                      <br />
                      "We had the pleasure of working with Meradigi on a web
                      development project and could not be happier with the
                      results. Their team was creative, professional, and easy
                      to work with. They were able to bring our vision to life
                      and deliver a website that truly stands out. We would
                      definitely work with them again in the future."
                    </p>
                    <p className="sarah">
                        Lisa Brown
                      <br />
                      
                    </p>
                  </div>
                  <div class="hslide">
                    <p>
                      ⭐⭐⭐⭐⭐
                      <br />
                      The ERP implementation services provided by Meradigi were
                      simply outstanding. They took the time to understand our
                      unique needs and delivered a solution that exceeded our
                      expectations. Their team was always available to address
                      our concerns and provide training and support when needed.
                      I would highly recommend them to anyone looking for ERP
                      implementation services."
                    </p>
                    <p className="sarah">
                      Tom Davis
                      <br />
                      IT Manager    
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Client;
