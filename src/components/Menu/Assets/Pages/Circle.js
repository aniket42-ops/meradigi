import React from "react";
import download from "./download (1).png";
import download1 from "./download.png";
import download2 from "./download (2).png";
import download3 from "./download (3).png";
import "./Circle.css";

const Circle = () => {
  return (
    <>
      <div className="flex">
        <div class="container">
          <img src={download} alt="" className="first1" />
          <div className="centered">
            <p style={{ color: "#58468c" }}>89%</p>
          </div>
          <p style={{ color: "#58468c", marginLeft: "150px" }}>Innovations</p>
          <p style={{ marginLeft: "120px" }}>Creative Innovations For Your Business Growth</p>
        </div>
        <div class="container">
          <img src={download1} alt="" className="first1" />
          <div className="centered1">
            <p style={{ color: "#58468c" }}>90%</p>
          </div>
          <p style={{ color: "#58468c", marginLeft: "150px" }}>Action Plans</p>
          <p style={{ marginLeft: "115px" }}>Offering Customized Action Plans For Any Business </p>
        </div>
        <div class="container">
          <img src={download2} alt="" className="first1" />
          <div className="centered2">
            <p style={{ color: "#58468c" }}>69%</p>
          </div>
          <p style={{ color: "#58468c", marginLeft: "150px" }}>Big projects</p>
          <p style={{ marginLeft: "115px" }}>Scalable Solutions For Big Projects And Business</p>
        </div>
        <div class="container">
          <img src={download3} alt="" className="first1" />
          <div className="centered3">
            <p style={{ color: "#58468c" }}>86%</p>
          </div>
          <p style={{ color: "#58468c", marginLeft: "150px" }}>Great Tests</p>
          <p style={{ marginLeft: "105px" }}>We Believe In Test And Try, Correct And Apply Method.</p>
        </div>
      </div>
      <br/>   
    </>
  );
};
export default Circle;
