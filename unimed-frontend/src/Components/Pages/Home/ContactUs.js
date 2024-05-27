import React from "react";
import "./ContactUs.css";

import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";

const ContactUs = () => {
  return (
    <section className="contact-form">
      <h1 className="heading">Get In Touch!</h1>
      <p className="para">
        At our university's medical center, we are committed to providing
        exceptional healthcare services. Our dedicated team of professionals is
        here to support you with comprehensive medical care and innovative
        treatment options.
      </p>

      <div className="contactForm">
        <form action="#">
          <h1 className="sub-heading">Need Support!</h1>
          <input type="text" className="input" placeholder="your name" />
          <input type="text" className="input" placeholder="your email" />
          <input type="text" className="input" placeholder="your Subject" />
          <textarea
            className="input"
            cols="30"
            rows="5"
            placeholder="Your message..."
          ></textarea>
          <input type="submit" className="input submit" value="Send Message" />
        </form>

        <div className="map-container">
          <div className="mapBg"></div>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63313.21215607468!2d81.05359324133163!3d6.988228947404726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae62e3ed1dd0eb9%3A0x7261eb4e22c7a101!2sUva%20Wellassa%20University%20Medical%20Center!5e0!3m2!1sen!2slk!4v1683112929861!5m2!1sen!2slk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="contactMethod">
        <div className="method">
          <BsGeoAlt className="contactIcon" />
          <article className="text">
            <h1 className="sub-heading">Location</h1>
            <p className="para">
              The Medical Center of Uva Wellassa University of Sri Lanka
            </p>
          </article>
        </div>

        <div className="method email-method">
          <BsEnvelope className="contactIcon" />
          <article className="text">
            <h1 className="sub-heading">Email</h1>
            <p className="para">umo@uwu.ac.lk</p>
          </article>
        </div>

        <div className="method">
          <BsPhone className="contactIcon" />
          <article className="text">
            <h1 className="sub-heading">Phone</h1>
            <p className="para">+94 55 2226477</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
