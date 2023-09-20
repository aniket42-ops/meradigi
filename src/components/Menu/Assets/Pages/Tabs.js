import { useState } from "react";
import "./Tabs.css";
import { Row, Col, Container, Button } from "react-bootstrap";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => 
  {
    setToggleState(index);
  };

  return (
    <div className="container1">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Digital Marketing
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Odoo
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Web Development
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Row>
            <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
              <Row>
                <Col
                  className="md-4 sm-4 xl-4 xxl-4 xs-4 lg-4"
                  style={{
                    borderRadius: 0,
                    boxShadow: "0 0 10px 0 rgba(0,0,0,.09)",
                  }}
                >
                  <p className="basic">BASIC</p>
                  <p style={{ color: "#605E5E" }}>Package</p>
                  <table>
                    <tr>
                      <td>₹9,999 / Month</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>Social Media Marketing</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✓ Facebook Marketing</td>
                    </tr>
                    <tr>
                      <td>✓ Instagram Marketing</td>
                    </tr>
                    <tr>
                      <td>✗ Pinterest Marketing</td>
                    </tr>
                    <tr>
                      <td>✗ LinkedIn Marketing</td>
                    </tr>
                    <tr>
                      <td>✗ Twitter Marketing</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>Video Marketing</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✗ Youtube shorts and videos</td>
                    </tr>
                    <tr>
                      <td>✗ Instagram Reels</td>
                    </tr>
                    <tr>
                      <td>✗ Facebook Reels</td>
                    </tr>
                    <tr>
                      <td>✗ Other Short Video Platform</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>Adwords/PPC</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✓ Google Ads</td>
                    </tr>
                    <tr>
                      <td>✗ BIng Ads</td>
                    </tr>
                    <tr>
                      <td>✗ Facebook Advert</td>
                    </tr>
                    <tr>
                      <td>✗ YouTube Advert</td>
                    </tr>
                    <tr>
                      <td>✗ Twitter Advert</td>
                    </tr>
                    <tr>
                      <td>✗ Ecommerce/Shopping/App Ads</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>SEO and Lead Generation</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✓ **On-Page SEO</td>
                    </tr>
                    <tr>
                      <td>✓ - Website Audit</td>
                    </tr>
                    <tr>
                      <td>✓ - Technical Audit</td>
                    </tr>
                    <tr>
                      <td>✓ - Keyword Research</td>
                    </tr>
                    <tr>
                      <td>✓ - Keyword Target (10)</td>
                    </tr>
                    <tr>
                      <td>- Content Customization</td>
                    </tr>
                    <tr>
                      <td>
                        ✓ On-page Optimization 👇
                        <br />
                        Meta Title and Description
                        <br /> H1-H2 Tag <br />
                        Internal Link Structure <br />
                        Image Alt tag
                        <br /> XML sitemap and submission
                      </td>
                    </tr>
                    <tr>
                      <td>✓ Schema Markup</td>
                    </tr>
                    <tr>
                      <td> ✓ Site speed Optimization  </td>
                    </tr>
                    <tr>
                      <td>✓ Google Analytics Setup</td>
                    </tr>
                    <tr>
                      <td> Tag Manager Setup</td>
                    </tr>
                    <tr>
                      <td>✓ Search Console Setup</td>
                    </tr>
                    <tr>
                      <td>Broken Links Fix</td>
                    </tr>
                    <tr>
                      <td><b><i>Backlink Creation</i></b></td>
                    </tr>
                    <tr>
                      <td>- Local Business Directory (7)</td>
                    </tr>
                    <tr>
                      <td> Competitors Link Submission</td>
                    </tr>
                    <tr>
                      <td>Creating Articles (1)</td>
                    </tr>
                    <tr>
                      <td>Creating Blogs (1)</td>
                    </tr>
                    <tr>
                      <td>- Infographics Creation & Posting (5)</td>
                    </tr>
                    <tr>
                      <td>- Article Submission</td>
                    </tr>
                    <tr>
                      <td>- Blog Submission</td>
                    </tr>
                    <tr>
                      <td>- Social Bookmarking (30)</td>
                    </tr>
                    <tr>
                      <td>- Classified Ads (15)</td>
                    </tr>
                    <tr>
                      <td> - Directory Submission (15)</td>
                    </tr><tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td>- Infographics Submission</td>
                    </tr>
                    <tr>
                      <td>- Other Backlinks Sites (15)</td>
                    </tr>
                 </table>
                </Col>
                <Col style={{
                    borderRadius: 0,
                    boxShadow: "0 0 10px 0 rgba(0,0,0,.09)",marginLeft:"20px"
                  }}>
                  <h2
                    style={{
                      color: "#007DFF",
                      fontFamily: '"Poppins",Sans-serif',
                      fontSize: "31px",
                    }}
                  >
                    {" "}
                    PROFESSIONAL </h2>
                   
                    <p>Package</p>
                 
                  <table>
                    <tr>
                      <td>₹16,999 / Month</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>Social Media Marketing</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✓ Facebook Marketing</td>
                    </tr>
                    <tr>
                      <td>✓ Instagram Marketing</td>
                    </tr>
                    <tr>
                      <td>✗ Pinterest Marketing</td>
                    </tr>
                    <tr>
                      <td>✗ LinkedIn Marketing</td>
                    </tr>
                    <tr>
                      <td>✗ Twitter Marketing</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>Video Marketing</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✗ Youtube shorts and videos</td>
                    </tr>
                    <tr>
                      <td>✗ Instagram Reels</td>
                    </tr>
                    <tr>
                      <td>✗ Facebook Reels</td>
                    </tr>
                    <tr>
                      <td>✗ Other Short Video Platform</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>Adwords/PPC</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✓ Google Ads</td>
                    </tr>
                    <tr>
                      <td>✗ BIng Ads</td>
                    </tr>
                    <tr>
                      <td>✗ Facebook Advert</td>
                    </tr>
                    <tr>
                      <td>✗ YouTube Advert</td>
                    </tr>
                    <tr>
                      <td>✗ Twitter Advert</td>
                    </tr>
                    <tr>
                      <td>✗ Ecommerce/Shopping/App Ads</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>SEO and Lead Generation</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✓ **On-Page SEO</td>
                    </tr>
                    <tr>
                      <td>✓ - Website Audit</td>
                    </tr>
                    <tr>
                      <td>✓ - Technical Audit</td>
                    </tr>
                    <tr>
                      <td>✓ - Keyword Research</td>
                    </tr>
                    <tr>
                      <td>✓ - Keyword Target (10)</td>
                    </tr>
                    <tr>
                      <td>- Content Customization</td>
                    </tr>
                    <tr>
                      <td>
                        ✓ On-page Optimization 👇
                        <br />
                        Meta Title and Description
                        <br /> H1-H2 Tag <br />
                        Internal Link Structure <br />
                        Image Alt tag
                        <br /> XML sitemap and submission
                      </td>
                    </tr>
                    <tr>
                      <td>✓ Schema Markup</td>
                    </tr>
                    <tr>
                      <td> ✓ Site speed Optimization  </td>
                    </tr>
                    <tr>
                      <td>✓ Google Analytics Setup</td>
                    </tr>
                    <tr>
                      <td> Tag Manager Setup</td>
                    </tr>
                    <tr>
                      <td>✓ Search Console Setup</td>
                    </tr>
                    <tr>
                      <td>Broken Links Fix</td>
                    </tr>
                    <tr>
                      <td><b><i>Backlink Creation</i></b></td>
                    </tr>
                    <tr>
                      <td>- Local Business Directory (7)</td>
                    </tr>
                    <tr>
                      <td> Competitors Link Submission</td>
                    </tr>
                    <tr>
                      <td>Creating Articles (1)</td>
                    </tr>
                    <tr>
                      <td>Creating Blogs (1)</td>
                    </tr>
                    <tr>
                      <td>- Infographics Creation & Posting (5)</td>
                    </tr>
                    <tr>
                      <td>- Article Submission</td>
                    </tr>
                    <tr>
                      <td>- Blog Submission</td>
                    </tr>
                    <tr>
                      <td>- Social Bookmarking (30)</td>
                    </tr>
                    <tr>
                      <td>- Classified Ads (15)</td>
                    </tr>
                    <tr>
                      <td> - Directory Submission (15)</td>
                    </tr><tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td>- Infographics Submission</td>
                    </tr>
                    <tr>
                      <td>- Other Backlinks Sites (15)</td>
                    </tr>
                 </table>
                </Col>
                <Col  style={{borderRadius: 0,
                    boxShadow: "0 0 10px 0 rgba(0,0,0,.09)",marginLeft:"20px"}}>
                  <h2
                    style={{
                      color: "#FF8F00",
                      fontFamily: '"Poppins",Sans-serif',
                      fontSize: "31px",
                      
                    }}
                  >
                    {" "}
                    ENTERPRISE
                  </h2>
                  <p>Package</p>
                  <table>
                    <tr>
                      <td>₹24,999 / Month</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>Social Media Marketing</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✓ Facebook Marketing</td>
                    </tr>
                    <tr>
                      <td>✓ Instagram Marketing</td>
                    </tr>
                    <tr>
                      <td>✗ Pinterest Marketing</td>
                    </tr>
                    <tr>
                      <td>✗ LinkedIn Marketing</td>
                    </tr>
                    <tr>
                      <td>✗ Twitter Marketing</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>Video Marketing</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✗ Youtube shorts and videos</td>
                    </tr>
                    <tr>
                      <td>✗ Instagram Reels</td>
                    </tr>
                    <tr>
                      <td>✗ Facebook Reels</td>
                    </tr>
                    <tr>
                      <td>✗ Other Short Video Platform</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>Adwords/PPC</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✓ Google Ads</td>
                    </tr>
                    <tr>
                      <td>✗ BIng Ads</td>
                    </tr>
                    <tr>
                      <td>✗ Facebook Advert</td>
                    </tr>
                    <tr>
                      <td>✗ YouTube Advert</td>
                    </tr>
                    <tr>
                      <td>✗ Twitter Advert</td>
                    </tr>
                    <tr>
                      <td>✗ Ecommerce/Shopping/App Ads</td>
                    </tr>
                    <tr>
                      <td>
                        <b>
                          <i>SEO and Lead Generation</i>
                        </b>
                      </td>
                    </tr>
                    <tr>
                      <td>✓ **On-Page SEO</td>
                    </tr>
                    <tr>
                      <td>✓ - Website Audit</td>
                    </tr>
                    <tr>
                      <td>✓ - Technical Audit</td>
                    </tr>
                    <tr>
                      <td>✓ - Keyword Research</td>
                    </tr>
                    <tr>
                      <td>✓ - Keyword Target (10)</td>
                    </tr>
                    <tr>
                      <td>- Content Customization</td>
                    </tr>
                    <tr>
                      <td>
                        ✓ On-page Optimization 👇
                        <br />
                        Meta Title and Description
                        <br /> H1-H2 Tag <br />
                        Internal Link Structure <br />
                        Image Alt tag
                        <br /> XML sitemap and submission
                      </td>
                    </tr>
                    <tr>
                      <td>✓ Schema Markup</td>
                    </tr>
                    <tr>
                      <td> ✓ Site speed Optimization  </td>
                    </tr>
                    <tr>
                      <td>✓ Google Analytics Setup</td>
                    </tr>
                    <tr>
                      <td> Tag Manager Setup</td>
                    </tr>
                    <tr>
                      <td>✓ Search Console Setup</td>
                    </tr>
                    <tr>
                      <td>Broken Links Fix</td>
                    </tr>
                    <tr>
                      <td><b><i>Backlink Creation</i></b></td>
                    </tr>
                    <tr>
                      <td>- Local Business Directory (7)</td>
                    </tr>
                    <tr>
                      <td> Competitors Link Submission</td>
                    </tr>
                    <tr>
                      <td>Creating Articles (1)</td>
                    </tr>
                    <tr>
                      <td>Creating Blogs (1)</td>
                    </tr>
                    <tr>
                      <td>- Infographics Creation & Posting (5)</td>
                    </tr>
                    <tr>
                      <td>- Article Submission</td>
                    </tr>
                    <tr>
                      <td>- Blog Submission</td>
                    </tr>
                    <tr>
                      <td>- Social Bookmarking (30)</td>
                    </tr>
                    <tr>
                      <td>- Classified Ads (15)</td>
                    </tr>
                    <tr>
                      <td> - Directory Submission (15)</td>
                    </tr><tr>
                      <td></td>
                    </tr>
                    <tr>
                      <td>- Infographics Submission</td>
                    </tr>
                    <tr>
                      <td>- Other Backlinks Sites (15)</td>
                    </tr>
                 </table>
                </Col>
                <br />
              </Row>
            </Col>
          </Row>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
      <div>
        <Container>
          
          <Row>
            <Col className="md-12 sm-12 xl-12 xxl-12 xs-12 lg-12">
              <Row>
                <Col
                  className="md-6 sm-6 xl-6 xl-6 xs-6 lg-6" style={{    backgroundColor: 'transparent',
                    backgroundImage: 'linear-gradient(270deg,#EEFC0754 0%,#FF00AA1C 100%)',}}>
                      <h3>Custom Web Development, Digital Marketing And Odoo Plans</h3>
                      <br/>
                      <p>For Customized Plans Get in touch with Us</p>
                  </Col>
                  <Col assName="md-6 sm-6 xl-6 xl-6 xs-6 lg-6" style={{    backgroundColor: 'transparent',
                    backgroundImage: 'linear-gradient(270deg,#EEFC0754 0%,#FF00AA1C 100%)'    }}>
                  <Button>Contact US</Button>
                  </Col>
                  </Row>
                  </Col>
                  </Row>
         
        </Container>
      </div>
    </div>
  );
}

export default Tabs;
