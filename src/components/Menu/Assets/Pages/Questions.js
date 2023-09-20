import React from "react";
import "./Question.css";

const faqs= document.querySelectorAll(".faq");

    faqs.forEach((faq)=>{
        faq.addEventListener("click",()=>{
            faq.classList.toggle("active");
        });
    });

const Question = () => {
  return (
    <>
      <section>
        <h2 className="title">FREQUENTLY ASKED QUESTIONS</h2>
        <div className="faq">
          <div className="question">
            <h3>+What are the benefits of using Odoo ERP for my business??</h3>
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
              Odoo ERP provides numerous benefits for businesses, including
              all-in-one solutions, cost-effectiveness, customization,
              user-friendliness, scalability, improved efficiency, better
              decision-making, increased collaboration, mobile access, and
              community support. Schedule a call with our experts to know more
              about Odoo ERP.
            </p>
          </div>
          <div className="question">
            <h3>+What is the implementation process for Odoo ERP?</h3>
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
              The implementation process for Odoo ERP typically follows these
              steps: discovery, planning, configuration, data migration,
              testing, training, go-live, and support. You can find more details
              about each phase on our website.
            </p>
          </div>
          <div className="question">
            <h3>+How long does it take to implement Odoo ERP?</h3>
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
              The implementation time for Odoo ERP varies depending on the
              implementation’s complexity, the organization’s size, and the
              client’s specific requirements. Typically, it can take between 2-6
              months for a standard implementation. We can provide a more
              accurate estimate after we understand your specific needs.
            </p>
          </div>
          <div className="question">
            <h3>+How much does Odoo ERP implementation cost?</h3>
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
              The cost of implementing Odoo ERP depends on the complexity of the
              implementation, the number of users, the modules required, and the
              customization needs. We provide a customized quote for each client
              based on their specific needs.
            </p>
          </div>
          <div className="question">
            <h3>+Can you customize Odoo ERP to fit our business needs?</h3>
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
              Yes, we can customize Odoo ERP to fit your specific business
              needs. Our experienced team of developers and consultants will
              work with you to understand your requirements and customize the
              system accordingly.
            </p>
          </div>
          <div className="question">
            <h3>
              +Can you migrate our data from our current system to Odoo ERP?
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
              Yes, we can migrate your data from your current system to Odoo
              ERP. Our team has experience in data migration from various
              systems, and we will ensure that your data is securely migrated to
              the new system.
            </p>
          </div>
          <div className="question">
            <h3>
              +What kind of training and support do you provide after
              implementation?
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
              We provide comprehensive training to ensure that your team is
              comfortable using the system. We also provide ongoing support to
              address any issues that arise after implementation.
            </p>
          </div>
          <div className="question">
            <h3>+Can Odoo ERP integrate with other software we use?</h3>
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
              Yes, Odoo ERP can integrate with other software you use, including
              accounting software, CRMs, e-commerce platforms, and more. Our
              team can help you integrate Odoo ERP with your existing software.
            </p>
          </div>
          <div className="question">
            <h3>
              +What kind of experience do you have with Odoo ERP implementation?
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
              We have extensive experience in implementing Odoo ERP for
              organizations of all sizes and industries. Our team has
              successfully completed numerous Odoo ERP implementations, and we
              have a track record of delivering high-quality solutions to our
              clients. You can read more about our experience on our website. If
              you have any other questions or would like to discuss your Odoo
              ERP implementation needs, please don't hesitate to contact us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Question;
