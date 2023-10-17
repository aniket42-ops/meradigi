import React from "react";
import "./Box1.css";
import control from "./control.png";
import web from "./browser.png";
import setting from "./setting.png";
const Box1 = () => {
  return (
    <>
      <div className="container">
        <div className="seo_box1">
          <img src={control} alt="" width="55px" />
          <h3>
            <center>On-Page SEO</center>
          </h3>
          <br/>
          <p>
            <center>
              For providing SEO Services, we use the information that we have
              gathered from our SEO Research and Analysis, we are able to look
              at your website. In SEO audit, we make use of industry-leading
              software to identify all the potential issues within the website
              such as Meta Tags, URL Structure, Internal and External Linking,
              etc.
            </center>
          </p>
        </div>
        <div className="seo_box1">
          <img src={web} alt="" width="55px" />
          <h3>
            <center>Off-Page SEO</center>
          </h3>
          <br/>
          <p>
            <center>
              SEO Off-page Optimization Service is concerned with do follow
              links from other websites to your site. These links basically are
              linked juice from higher domain authority & relevant websites act
              as an independent 'vote of confidence' which helps search engines
              trust your website more ultimately improving website position in
              SERPs.
            </center>
          </p>
        </div>
        <div className="seo_box1">
          <img src={setting} alt="" width="55px" />
          <h3>
            <center>Technical SEO</center>
          </h3>
          <br/>
          <p>
            <center>
              Technical SEO is a crucial part of any SEO strategy. It refers to
              all the website and server optimizations that help search engine
              spiders crawl and index your website more effectively. Technical
              SEO is the structure of your website. It is a technical SEO that
              keeps your website together, so you can do on-page and off-page
              SEO on it.
            </center>
          </p>
        </div>
      </div>
    </>
  );
};
export default Box1;
