import React from "react";
import "./Box.css";

const Boxes = () => {
  return (
    <>
      <div className="contain">
        <div class="box1">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            How to start a company
          </h3>
          <p className="with">
            With our comprehensive guide, you'll get all the information you
            need to make the process as easy and stress-free as possible.
          </p>
        </div>
        <div class="box2">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            How to get a domain name
          </h3>
          <p className="with">
            We understand how frustrating this process can be. That's why we
            created a step-by-step guide on how to get a domain name.
          </p>
        </div>
      </div>
      <div className="contain2">
        <br />
        <div class="box3">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            How to register a company
          </h3>
          <p className="with">
            Starting a business can be overwhelming, but our team can guide you
            through the process of registering your company.
          </p>
        </div>
        <div class="box4">
          <h3
            style={{
              color: "#6a56a6",
              fontFamily: "Poppins",
              fontSize: "21px",
              fontWeight: "400",
              lineHeight: "54px",
            }}
          >
            How to get email ids
          </h3>
          <p className="with">
            We can also provide guidance on choosing the right email hosting
            service and configuring your email accounts to work seamlessly with
            your other business tools.
          </p>
        </div>
      </div>
    </>
  );
};

export default Boxes;
