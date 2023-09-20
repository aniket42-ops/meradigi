import React from "react";
import Application from "./Application.ico";
import Website from "./Website.ico";
import Ranking from "./Ranking.ico";
import Youtube from "./Youtube.ico";
import Fb from "./Fb.png";
import Insta from "./Insta.png";
import Radio from "./Radio.png";
import Celeb from "./Celeb.png";
import Odoo from "./Odoo.png";
import Moodle from "./Moodle.ico";
import AV from "./AV.ico";
import Product from "./Product.ico";
import Digitalmarketing from "./Digitalmarketing.ico";
import Annual from "./Annual.ico";
import Hosting from "./Hosting.ico";
import Developer from "./Developer.ico";
import { Container, Row, Col } from "react-bootstrap";

// import Navbar from "../../Navbar";
// import Search from "../../Search";
// import Services from "../../Services";
// import Aboutus from "../../Aboutus";
// import Form from "../../Form";
// import Footer from "../../Footer";
function Home() {
  return (
    <>
          {/* <header>
        <Navbar />
      </header>
      <main>
        <Search />
        <Home />
        <Services />
        <Aboutus />
        <Form />
      </main>
      <Footer /> */}
      <Container className="Assets newMarginOne">
        <Row >
          <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
            <Row className="Assets">
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3">
                <Row>
                  <div>                
                      <img
                        src={Application}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning" 
                      />
                  </div>
                </Row>
                <Row>
                  <figcaption className="positioning">Get a mobile app</figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
              <Row>
                  <div>                
                      <img
                        src={Website}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning" 
                      />
                  </div>
                </Row>
                <Row >
                  <figcaption className="positioning">I want a very fast Website</figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
              <Row>
                  <div>                
                      <img
                        src={Ranking}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning" 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>Rank my website on Google</figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
              <Row>
                  <div>                
                      <img
                        src={Youtube}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning" 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>Make me popular on Youtube</figcaption>
                </Row>
              </Col>
            </Row>

            <Row className="Assets">
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3">
              <Row>
                  <div>                
                      <img
                        src={Fb}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning" 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>Make my videos popular  On Facebook</figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
              <Row>
                  <div>                
                      <img
                        src={Insta}
                        alt="#"
                        width="120px"
                        height="80px"
                        className="positioning" 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>Make my videos popular on Instagram</figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
                <Row>
                  <div>                
                      <img
                        src={Radio}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning " 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>Advertise on Radio</figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
              <Row>
                  <div>                
                      <img
                        src={Celeb}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning" 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>Hire a Celebirity </figcaption>
                </Row>
              </Col>
            </Row>

            <Row className="Assets">
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 ">
              <Row>
                  <div>                
                      <img
                        src={Odoo}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning " 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption className="positioning">
                    I want Odoo ERP
                  </figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
              <Row>
                  <div>                
                      <img
                        src={Moodle}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning " 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>I need Moodle LMS </figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
              <Row>
                  <div>                
                      <img
                        src={AV}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning " 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>Add audio/video feature in website </figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
              <Row>
                  <div>                
                      <img
                        src={Product}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning " 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>Make my product famous </figcaption>
                </Row>
              </Col>
            </Row>

            <Row className="Assets">
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3">
              <Row>
                  <div>                
                      <img
                        src={Digitalmarketing}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning" 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>Digital marketing plans </figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
              <Row>
                  <div>                
                      <img
                        src={Annual}
                        alt="#"
                        width="80px"
                        height="80px"
                        className="positioning" 
                      />
                  </div>
                </Row>
                <Row className="positioning">
                  <figcaption>I want an annual maintenence plan</figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
                <div className="positioning">
                  <img
                    src={Hosting}
                    alt="#"
                    height="100px"
                    className="positioning"
                  />
                </div>
                <Row className="positioning">
                  <figcaption>Get a best hosting plan </figcaption>
                </Row>
              </Col>
              <Col className="md-3 sm-3 xl-3 xxl-3 xs-3 lg-3 newImageDimensions">
                <div className="positioning">
                  <img
                    src={Developer}
                    alt="#"
                    height="100px"
                    className="positioning"
                  />
                </div>
                <Row className="positioning">
                  <figcaption>Hire a Developer </figcaption>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      
    </>
  );
}
export default Home;
