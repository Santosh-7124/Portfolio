import React from "react";
import SocialMedia from "./SocialMedia";

function Contact() {
  return (
    <section className="contact" id="Contact">
      <form method="POST">
        <input type="text" name="Name" placeholder="Your name *" required />
        <input type="email" name="Email" placeholder="Email *" required />
        <input type="tel" name="Phone Number" placeholder="Phone number" />
        <textarea name="Message" placeholder="How can I help?"></textarea>
        <div className="form-buttons">
          <button type="submit">Get In Touch</button>
          <SocialMedia />
        </div>
      </form>
      <div className="contact-info">
        <div className="contact-info-heading">
          <h2>
            Let's <span>talk</span> for Something special
          </h2>
          <p>
            I seek to push the limits of creativity to create high-engaging,
            user-friendly, and memorable interactive experiences.
          </p>
        </div>
        <div className="contact-info-heading">
          <a
            href="https://mail.google.com/mail/?view=cm&to=sunny962002@gmail.com"
            target="_blank"
          >
            sunny962002@gmail.com
          </a>
          <a href="tel:+919347744815">+91 934 77 44 815</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
