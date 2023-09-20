import React from "react";
import "./Footer.css";
import logo from "./logo.png";

function Footer() {
  return (
    <div className="main-footer">
 
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <p className="list-unstyled">
              <img src={logo} alt="#" height="80px" />

              <li>
                Meradigi bring Digital Technology to your doorstep. We offer
                pre-designed digital products to our customers and also design
                the products of their choice.
                <br></br>
                <br></br>
                We are just a call away.
              </li>
            </p>
          </div>
          {/* Column2 */}
          <div className="col">
            <p className="list-unstyled">
              <li className="services">Our Services </li>
              <li><a href="www.google.com" style={{textDecoration:"none", color:"black"}}>WEB DEVELOPMENT</a></li>
              <li>DIGITAL MARKETING</li>
              <li>ERP IMPLEMENTATION</li>
              <li>DIGITAL MARKETING</li>
              <li>APP DEVELOPMENT</li>  
              <li>HIRE A DEVELOPER</li>
            </p>
          </div>
          {/* Column3 */}
          <div className="col">
            <p className="list-unstyled">
              <li className="services">COMPANY </li>
              <li>
                <a href="/" className="anchor">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="/" className="anchor">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="/" className="anchor">
                  REFUND POLICY
                </a>
              </li>
              <li>
                <a href="/" className="anchor">
                  TERMS & CONDITION'S
                </a>
              </li>
              <li>
                <a href="/" className="anchor">
                  SUPPORT TICKET
                </a>
              </li>
            </p>
          </div>
          {/* Column4 */}
          <div className="col">
            <p className="list-unstyled">
              <li className="services" style={{}}>RESOURCES</li>
              <li>
                <a href="/" className="anchor">
                  BLOG
                </a>
              </li>
              <a href="/" className="anchor">
                IT CONSULTING
              </a>
            </p>
          </div>
        </div>
       
        <div className="footerrow">
          <h6 className="col-sm">
            &copy;{new Date().getFullYear()} Meradigi. All rights reserved
            <br></br>
            Made with ❤ by Meradigi
          </h6>
        </div>
    </div>
  );
}

export default Footer;
