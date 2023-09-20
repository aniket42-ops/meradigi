import React from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Footer";
import "./Odoo.css";
import bg1 from "./odoo-1.gif";
import { Row, Col, Button, Container } from "react-bootstrap";
import odoo from "./odoo.jpg";
import oddo from "./pngegg-600x500.png";
import Tab from "./Tab";
import Question from "./Questions";
// import "bootstrap/dist/css/bootstrap.min.css";

const Odoo = () => {
  /* var triggerEl = document.querySelector('#myTab a[href="#profile"]')
    bootstrap.Tab.getInstance(triggerEl).show() // Select tab by name */
  return (
    <>
      <Navbar />
      <Row>
        <img src={bg1} alt="" className="background1" />
        <h1 className="odoo">Odoo ERP Implementation</h1>
        <p className="class">
            Our best-in-class Business solution, To let you to grow business higher!
        </p>
      </Row>
      <br />
      <br />
      <Row>
        <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
          <Row>
            <Col
              className="md-6 sm-6 xl-6 xxl-6 xs-6 lg-6"
              style={{ marginLeft: "40px" }}
            >
              <h2 style={{ fontSize: "48px", marginLeft: "40px" }}>
                <b>Odoo ERP Implementation</b>{" "}
              </h2>
              <p className="We">
                Odoo Implementation is the service of implementing the Odoo
                modules (formerly known as OpenERP and before that, TinyERP) and
                Odoo Apps , which is a suite of open-source enterprise
                management applications. Targeting companies of all sizes, the
                application suite includes odoo modules and Odoo Apps like
                Sales-Purchase Management, Accounting, Bills of materials,
                Warehouses Management and almost all running operations.
                <br />
                <br />
                Odoo ERP Implementation is no doubt the best complete
                open-source ERP implementation software services available in
                the market today. With more than 2 million users already using
                the services and 3000 Odoo Apps and various different Odoo
                Modules it has been as rightly being said the fastest growing
                ERP software. Odoo’s amazing 3000 apps serves all your business
                purposes. We provide seamless customizations, custom development
                as well as integration to various popular business services with
                odoo.
              </p>
              <hr style={{ width: "47%" }} color="#097AFC" />
              <Button className="free1">Free consultation</Button>
              <br />
              <h5 className="Speak">
                Speak to us to see if it's a fit for you
              </h5>
              📞<b>+91 96500 31626</b>
            </Col>
            <Col>
              <img src={odoo} alt="" className="mod" />
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <center>
            <h3 className="offer">
            <b>SERVICES WE OFFER</b>
            </h3>
            <p className="borde"> —🔷—</p>
            <br />
        </center>
      </Row>
      <br />
      <br />
      <Row style={{ display: "flex", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }}>
      <Container>
        <Row>
          <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
            <Row>
              <Col className="md-4 sm-4 xl-4 xxl-4 xs-4 lg-4">
                <p className="CRM">
                  <p className="crm">CRM</p>
                  Track your leads, schedule meetings, convert to opportunities;
                  quote your customers in short automate your lead handling
                  process with this customizable CRM Module.
                </p>
              </Col>
              <Col>
                <p className="CRM">
                  <p className="crm">Sales Management</p>
                  Maintain Customer data, manage sales from leads to
                  opportunity, from scheduling client meetings to receiving
                  reminders, issuing Sales Quotation to generating Sales Order.
                </p>
              </Col>
              <Col>
                <p className="CRM">
                  <p className="crm">Invoicing</p>
                  Create Invoices automatically from sales order, email invoices
                  to clients in one click, register client payments integration
                  with financial accounting, and generate sales reports.
                </p>
              </Col>
              <Col>
                <p className="CRM">
                  <p className="crm">Recruitment Management </p>
                  Customize your Recruitment Process, publish job offers
                  maintain vacancies and job applications, define your own
                  stages and interviewers, Index resumes, track applicants.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="CRM">
                  <p className="crm"> Event Marketing </p>
                  Create Events, Organize Events, Manage Seminars, Webinars,
                  Book seminar or club, Sell tickets on your website, and
                  Promote Events with Mass Mailing.
                </p>
              </Col>
              <Col>
                <p className="CRM">
                  <p className="crm">Manufacturing Apps </p>
                  Track Work Orders, manage Manufacturing Order, define Raw
                  Materials for your finalized products, manage & schedule Bills
                  of Materials with Calendar Integration.
                </p>
              </Col>
              <Col>
                <p className="CRM">
                  <p className="crm">Warehouse Management</p>
                  Generate Multiple Warehouses, multiple Locations; Maintain
                  Stock at Multiple Locations, full Inventory traceability,
                  Internal Stock Movement.
                </p>
              </Col>
              <Col>
                <p className="CRM">
                  <p className="crm">Project Management</p>
                  Create Project Team, assign Work Tasks , customize Project
                  Milestones , maintain Task Status, Invoice staff working hours
                  , Internal Chats, Calendar Integration.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </Row>
      <br />
      <br />
      <Row>
            <Col>
              <img
                src={oddo}
                alt=""
                style={{ marginLeft: "140px" }}
                width="580px"
                height="483px"
              />
            </Col>
            <Col>
              <p className="erp">Why Odoo ERP?</p>
              <p className="an">
                Odoo ERP is an incorporated and complete set-up of business the
                board applications and modules. It can consistently oversee
                bookkeeping, charging, HR, finance, and client relationship.
                This large number of modules really assist you with maintaining
                your business easily too to helpfully convey your
                administrations more. In light of everything, Odoo has every one
                of the functionalities, elements, and qualities that an oversaw
                administrations area needs. Execution of Odoo ERP brings about
                better efficiency, quality as well as administration
                consistency. Get a savvy and financial plan well disposed ERP
                framework to further develop your business execution..
              </p>
              <Button className="let">Lets Start</Button>
            </Col>
      </Row>
      <br />
      <br />
      <center style={{fontFamily: "Ubuntu Sans-serif",
    fontSize: "38px",
    fontWeight: "500"}}>Odoo ERP in Various Industries</center>
      <br></br>
      <br/>
      
      <Row>
        <Tab />
      </Row>
      <br />
      <br />
      <Row>
        <Question/>
      </Row>
      <Footer />
    </>
  );
};
export default Odoo;
