import React from "react";
import "../assets/styles/Contact.scss";

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it happen!
          </p>
          <p className="email">
            📧 <a href="mailto:kumkumkaushik82@gmail.com">kumkumkaushik82@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
