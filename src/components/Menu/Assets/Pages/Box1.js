import React from "react";
import blog from "./blog.png";
import cms from "./cms.png";
import bus from "./corporation.png";
import ecom from "./ecommerce.png";
import land from "./landing-pages.png";
import UI from "./web-design.png";
import learn from "./video-tutorials.png";
import sketch from "./sketch.png";
import "./Box1.css";

const Box1 = () => {
  return (
    <>
      <div className="flwx">
        <div className="Box">
          <img src={blog} alt="" className="img" />
          <p className="text">
            Blogging Site <br />
          </p>
          <p className="text1"> Website for blogging</p>
        </div>
        <div className="Box">
          <img src={cms} alt="" className="img" />
          <p className="text">
            CMS Development <br />
          </p>
          <p className="text1">
            WordPress development company
            <br />
            Drupal development company
          </p>
        </div>
        <div className="Box">
          <img src={bus} alt="" className="img" />
          <p className="text">
            Business/Corporate <br />
          </p>
          <p className="text1">
            Website for small business
            <br />
            Website for healtcare
            <br />
            Website for realstate
          </p>
        </div>
        <div className="Box">
          <img src={ecom} alt="" className="img" />
          <p className="text">
            eCommerce Website <br />
          </p>
          <p className="text1">
            eCommerce Website Designing 
            <br/>
            Shopify website designer
          </p>
        </div>
      </div>
      <br/>
      <div className="flwx1">
      <div className="Box">
          <img src={land} alt="" className="img" />
          <p className="text">
            Landing Page <br />
          </p>
          <p className="text1">
            One page website        
          </p>
        </div>
        <div className="Box">
          <img src={UI} alt="" className="img" />
          <p className="text">
           UI/UX Design
          </p>
         
        </div>
        <div className="Box">
          <img src={learn} alt="" className="img" />
          <p className="text">
            E-learning portals
            <br />
          </p>
          <p className="text1">
            Education portal Site        
          </p>
        </div>
        <div className="Box">
          <img src={sketch} alt="" className="img" />
          <p className="text">
            Custom Website<br />
          </p>
          <p className="text1">
           Custom Website Development      
          </p>
        </div>
      </div>
    </>
  );
};
export default Box1;
