import React from "react";
import "./Form.css";
import { Row, Col, Button } from "react-bootstrap";

function Form() {
  return (
    <Row className="newBackground">
      <Col>
        <Row>
          <Col className="col col-6 md-6 sm-6 xl-6 xxl-6 xs-6 lg-6">
              <h2 className="Title">Are you confused? Need Consultation</h2>
              <h2 className="Title2">Get in touch with Us!</h2>
          </Col>
          <Col className="col col-6 md-6 sm-6 xl-6 xxl-6 xs-6 lg-6 newbox">
            <form>
              <label>First Name </label>
              <input type="text" name="firstname" size="10" />
              <br></br>   <br></br>
              <label>Last Name</label>
              <input type="text" name="lastname" size="10" />
              <br></br>   <br></br>
              <label>Password</label>
              <input type="password" name="password" size="15" />
              <br></br>   <br></br>
              <label>Phone No.</label>
              <input type ="number" /> 
              <br></br>   <br></br>
              <label>Company</label>
              <input type ="text" name ="Company name"/>
              <br></br>   <br></br>
              <label>Industry type</label>
              <select>
                <option value="Architect">- Select -</option>
                <option value="Architect">Agricultre</option>
                <option value="Architect">Architect</option>
                <option value="Architect">Construction</option>
                <option value="Architect">Digital Marketing</option>
                <option value="Architect">E-commerce - Fashion</option>
                <option value="Architect">E-commerce - Cosmetics</option>
                <option value="Architect">E-commerce - Electronics</option>
                <option value="Architect">E-commerce - Food</option>      
                <option value="Architect">E-commerce - Textiles</option>
                <option value="Architect">Education Industry</option>
                <option value="Architect">Education/Edtech</option>
                <option value="Architect">Entertainment - Media House</option>
                <option value="Architect">Entertainment - Music Studio</option>
                <option value="Architect">Entertainment - Production House</option>
                <option value="Architect">Fashion - Designer</option>
                <option value="Architect">Fashion - Trader</option>
                <option value="Architect">Food - Manufacturing</option>
                <option value="Architect">Food - QSR</option>
                <option value="Architect">Food - Restaurant</option>
                <option value="Architect">Food - Trading</option>
                <option value="Architect">Furniture Manufacturer/ Trader</option>
                <option value="Architect">HR and Tools</option>
                <option value="Architect">Healthcare</option>
                <option value="Architect">Hospitality - Events Management</option>
                <option value="Architect">Hospitality - Hospitals</option>
                <option value="Architect">Hospitality - Hotels</option>
                <option value="Architect">Hospitality - Tours & Travels</option>
                <option value="Architect">Interior Designer</option>
                <option value="Architect">Logistics & Freight Forwarding</option>
                <option value="Architect">Manufacturing</option>
                <option value="Architect">Medical Devices</option>
                <option value="Architect">NGO/NPO</option>
                <option value="Architect">Pharma</option>
                <option value="Architect">Professional Services Insurance</option>
                <option value="Architect">Professional Services Mechanical Automation</option>
                <option value="Architect">Professional Services Public Relations</option>
                <option value="Architect">Professional Services R&D</option>
                <option value="Architect">Services Renewable Energy</option>
                <option value="Architect">Professional Services Training</option>
                <option value="Architect">Professional Services - IT</option>
                <option value="Architect">Professional Services - Photogrpaher</option>
                <option value="Architect">Professional Services - Accounts</option>
                <option value="Architect">Professional Services - Digital Marketing Agency</option>
                <option value="Architect">Professional Services - Legal</option>
                <option value="Architect">Professional Services - Videography</option>
                <option value="Architect">Real Estate</option>
                <option value="Architect">Service Provider</option>
                <option value="Architect">Telecommunication</option>
                <option value="Architect">Trader - Electronics</option>
                <option value="Architect">Trading</option>
                <option value="Architect">Other</option>
                 </select>  
                 <br></br>     <br></br>            
                 <label>Services you're looking for</label>
              <select>
                <option value="Architect">- Select -</option>
                <option value="">Web Development</option>
                <option value="">SEO</option>
                <option value="">Digital marketing</option>
                <option value="">Social Media Marketing</option>
                <option value="">Paid Ads</option>
                <option value="">ERP Implementation</option>
                <option value="">Graphics Designing</option>
                <option value="">Other</option>

                </select>
                <br></br>   <br></br>
                <label>Comments</label>
                <input type ="text"/>
                <br></br>   <br></br>
                <Button>Submit</Button>
            </form>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Form;


