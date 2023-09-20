import React from "react";
import "./Question.css";

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

const FAQS = () => {
  return (
    <>
      <section>
        <h6>FREQUENTLY ASKED QUESTIONS</h6>
        <br />
        <h6>APPLICATION DEVELOPMENT SERVICES</h6>
        <div className="faq">
          <div className="question">
            <h3>
              +How do you ensure that the app meets a client's specific needs
              and goals?
            </h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="black"
                stroke-width="4"
                stroke-Linecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Our mobile app development process includes discovery, design,
              development, testing, and launch. We work closely with our clients
              to ensure that their app meets their specific needs and goals.
            </p>
          </div>
          <div className="question">
            <h3>+What platforms do you develop mobile apps for?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="black"
                stroke-width="4"
                stroke-Linecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              We develop mobile apps for both iOS and Android platforms, as well
              as hybrid and cross-platform solutions.
            </p>
          </div>
          <div className="question">
            <h3>+Can you help us with app store submission and marketing?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="black"
                stroke-width="4"
                stroke-Linecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Yes, we can assist with app store submission and marketing to help
              increase the visibility and downloads of your app.
            </p>
          </div>
          <div className="question">
            <h3>
              +Can you provide ongoing maintenance and support for our app?
            </h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="black"
                stroke-width="4"
                stroke-Linecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Yes, we offer ongoing maintenance and support to ensure that your
              app stays up-to-date and runs smoothly.
            </p>
          </div>
          <div className="question">
            <h3>+How long does it take to develop a mobile app?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="black"
                stroke-width="4"
                stroke-Linecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              The time it takes to develop a mobile app depends on the
              complexity of the app and the features required. We provide
              estimated timelines for each project after we understand our
              client’s goals and needs.
            </p>
          </div>
          <div className="question">
            <h3>+ Can you create custom designs for our mobile app?</h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="black"
                stroke-width="4"
                stroke-Linecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Yes, we can create custom designs for your mobile app that align
              with your brand and style.
            </p>
          </div>
          <div className="question">
            <h3>
              + What kind of security measures do you take for mobile app
              development?
            </h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="black"
                stroke-width="4"
                stroke-Linecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              We take security seriously and implement industry best practices
              for user data protection, encryption, and secure communication.
            </p>
          </div>
          <div className="question">
            <h3>
              + Can you integrate third-party services with our mobile app?
            </h3>
            <svg width="15" height="10" viewBox="0 0 42 25">
              <path
                d="M3 3L21 21L39 3"
                stroke="black"
                stroke-width="4"
                stroke-Linecap="round"
              />
            </svg>
          </div>
          <div className="answer">
            <p>
              Yes, we can integrate third-party services with your mobile app,
              such as payment gateways, social media platforms, and analytics
              tools.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default FAQS;
