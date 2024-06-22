import React, { useState } from "react";
import "./ContactUs.css";
import axios from "axios";
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data being submitted:", formData); // Log the form data
    try {
      const response = await axios.post(
        "http://localhost:8088/contactus",
        formData
      );
      console.log("Form submitted successfully:", response.data);
      alert("Form successfully submitted. Thank you!");
    } catch (error) {
      console.error("There was an error submitting the form:", error.message);
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
        alert("Error: " + error.response.data.message);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("Error: No response received from the server.");
      } else {
        console.error("Error setting up the request:", error.message);
        alert("Error: " + error.message);
      }
    }
  };

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
        <form onSubmit={onSubmit}>
          <h1 className="sub-heading">Need Support!</h1>
          <input
            type="text"
            className="input"
            id="name"
            placeholder="your name"
            value={formData.name}
            onChange={onInputChange}
          />
          <input
            type="email"
            className="input"
            id="email"
            placeholder="your email"
            value={formData.email}
            onChange={onInputChange}
          />

          <textarea
            className="input"
            cols="30"
            rows="5"
            id="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={onInputChange}
          ></textarea>
          <button type="submit" className="input submit">
            Send Message
          </button>
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
