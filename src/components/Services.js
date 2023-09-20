import React from "react";
import Web from "./Menu/Assets/Web.png";
import seo from "./Menu/Assets/seo.png";
import erp from "./Menu/Assets/erp.png";
import writer from "./Menu/Assets/writer.png";
import actor from "./Menu/Assets/actor.png";
import "bootstrap/dist/css/bootstrap.css";
import Radio from "./Menu/Assets/Radio.png";
import server from "./Menu/Assets/server.png";
import adwords from "./Menu/Assets/adwords.png";
import sheild from "./Menu/Assets/shield.png";
import development from "./Menu/Assets/development.png";
import sma from "./Menu/Assets/sma.png";
import elearning from "./Menu/Assets/elearning.png";
import { Container, Row, Col } from "react-bootstrap";
import "./Services.css";

function Services() {
  return (
    <Container>
        <Row>
          <br />
          <h6 className="h6">What we do</h6>
        </Row>
      <Row>
        <h2 className="h1">SERVICES WE PROVIDE</h2>
      </Row>
      <Row>
        <Col className="col col-12 md-12 sm-12 xl-12 xxl-12 xs-12 lg-12 ">  
          <Row>
            <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <div className="box">
                <img src={Web} alt="#" height=" 100px" />
                <h5>Web Development</h5>
                <p className="paragraph">
                  We do Web engineering, Web design, Web content development,
                  client liaison, client-side/ server-side scripting, Web server
                  and network ,security configuration, and e- commerce
                  development.
                  <br />
                  <a href="/">+ Read more</a>
                </p>
              </div>
            </Col>
            <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <div className="box">
                <img src={seo} className="wd" alt="#" height="100 px" />
                <h5>Digital Marketing</h5>
                <p className="paragraph">
                  We enable you to have a cost effective yet strong mode of
                  reaching out to your target audience in a short span of time
                  with the use of our best Digital Marketing service enable
                  fully event driven approach.
                  <br />
                  <a href="/">+ Read more</a>
                </p>
              </div>
            </Col>
            <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <div className="box">
                <img src={erp} className="wd" alt="#" height="100 px" />
                <h5>Odoo ERP Implementation </h5>
                <p className="paragraph">
                  Hassle free implementation of users friendly Odoo platforms as
                  per your business requirements following the best without
                  disrupting the functionality of the Odoo platform.
                  <br />
                  <a href="/">+ Read more</a>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="col col-12 md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <div className="box">
                <img src={writer} alt="#" height=" 100px" />
                <h5>Content Generation & Marketing</h5>
                <p className="paragraph">
                  Content marketing is the creation of content with the goal of
                  both attracting new prospects and nurturing them into leads.
                  We help you to attract, educate, inform and encourage a
                  prospect to move them closer to becoming a customer.
                  <br />
                  <a href="/">+ Read more</a>
                </p>
              </div>
            </Col>
            <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <div className="box">
                <img src={actor} className="wd" alt="#" height="100 px" />
                <h5>Hire a Celebirity</h5>
                <p className="paragraph">
                  Celebrities enjoy specific public recognition by a large
                  number of certain groups of people. Featuring celebrities in
                  advertising can grab attention immediately and enhance a
                  brand, and for that reason it has always been a high-impact
                  marketing tool.
                  <br />
                  <a href="/">+ Read more</a>
                </p>
              </div>
            </Col>
            <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <div className="box">
                <img src={Radio} className="wd" alt="#" height="100 px" />
                <h5>Odoo ERP Implementation </h5>
                <p className="paragraph">
                  Radio advertising is the promotion of products or services
                  during radio commercials or programs. Radio advertising can be
                  very effective, especially reaching a captive audience. Using
                  this through this you can easily target your costumers.
                  <br />
                  <a href="/">+ Read more</a>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="col col-12 md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
          <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
            <div className="box">
              <img src={elearning} alt="#" height=" 100px" />
              <h5>Moodle LMS development</h5>
              <p className="paragraph">
                We design, develop and implement Moodle which is a free and
                open-source learning management system for blended learning,
                distance education, flipped classroom and other online learning
                schemes in schools, universities, workplaces and other sectors.
                <br />
                <a href="/">+ Read more</a>
              </p>
            </div>
          </Col>
          <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
          <div className="box">
            <img src={sma} className="wd" alt="#" height="100 px" />
            <h5>Social Media Ads</h5>
            <p className="paragraph">
              Social media advertising is a type of digital marketing that
              utilizes social networks to deliver paid ads to your target
              audience. Social media ads are a quick and effective way to
              connect with your consumers and boost your marketing campaigns.
              <br />
              <a href="/">+ Read more</a>
            </p>
          </div>
        </Col>
        <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
          <div className="box">
            <img src={adwords} className="wd" alt="#" height="100 px" />
            <h5>Google Ads </h5>
            <p className="paragraph">
              Google Ads takes advantage of the benefits of online advertising:
              show your ads to the right people, in the right place, and at the
              right time. Google Ads offers several benefits like Targeted
              Ads,Cost effective,Success quantifiable & easy to manage.
              <br />
              <a href="/">+ Read more</a>
            </p>
          </div>
        </Col>
            </Row>  
        </Col>
        <Row>
         <br/> 
        </Row>
        <Col className="col col-12 md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <div className="box">
                <img src={development} alt="#" height=" 100px" />
                <h5>Mobile App Development</h5>
                <p className="paragraph">
                  Get the best Mobile app solutions for your business at
                  meradigi. We design, develop and deploy mobile app at a very
                  fast speed. Our customized service can provide you the Mobile
                  app solutions across platforms and on various frameworks.
                  <br />
                  <a href="/">+ Read more</a>
                </p>
              </div>
            </Col>
            <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <div className="box">
                <img src={server} className="wd" alt="#" height="100 px" />
                <h5>Hosting services</h5>
                <p className="paragraph">
                  Don't let your website's bad speed and hosting issues pull it
                  down. We provide the hosting maintenance services to you so
                  that you can rest peacefully. Let us handle all the hosting
                  issues for you and provide you a seamless experience for your
                  products.
                  <br />
                  <a href="/">+ Read more</a>
                </p>
              </div>
            </Col>
            <Col className="col col-4 md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
              <div className="box">
                <img src={sheild} className="wd" alt="#" height="100 px" />
                <h5>Web app & security </h5>
                <p className="paragraph">
                  A security breach can destroy your business within minutes.
                  don't let it happen. We will provide you free SSL services to
                  secure your website. Pour proxy service can hide your original
                  IP from the outside world thus providing your extra layer of
                  safety.
                  <br />
                  <a href="/"> + Read more</a>
                </p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
