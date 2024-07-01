import React, { useState } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import "./ContactUs.css";
import  footer from "./footer.js";
import { BsGeoAlt, BsEnvelope, BsPhone } from "react-icons/bs";
import NavBar from "./navbar";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState({
    show: false,
    variant: "",
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

      setAlert({
        show: true,
        variant: "success",
        message: "Successfully submitted. Thank you!",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("There was an error submitting the form:", error.message);
      if (error.response) {
        console.error("Server responded with an error:", error.response.data);
        setAlert({
          show: true,
          variant: "danger",
          message: error.response.data.message || "An error occurred.",
        });
      } else if (error.request) {
        console.error("No response received:", error.request);
        setAlert({
          show: true,
          variant: "danger",
          message: "No response received from the server.",
        });
      } else {
        console.error("Error setting up the request:", error.message);
        setAlert({
          show: true,
          variant: "danger",
          message: error.message,
        });
      }
    }
  };

  return (
    <>
      <NavBar />
      <section className="contact-form">
        <h1 className="heading" style={{ color: "#18cdca" }}>
          Get In Touch!
        </h1>
        <p className="para">
          At our university's medical center, we are committed to providing
          exceptional healthcare services. Our dedicated team of professionals
          is here to support you with comprehensive medical care and innovative
          treatment options.
        </p>

        <div className="contactForm">
          {alert.show && (
            <Alert
              variant={alert.variant}
              onClose={() => setAlert({ ...alert, show: false })}
              dismissible
            >
              {alert.message}
            </Alert>
          )}
          <form onSubmit={onSubmit}>
            <h1 className="sub-heading" style={{ color: "#18cdca" }}>
              Need Support!
            </h1>
            <input
              type="text"
              className="input"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={onInputChange}
              required
            />
            <input
              type="email"
              className="input"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={onInputChange}
              required
            />

            <textarea
              className="input"
              cols="30"
              rows="5"
              id="message"
              placeholder="Your Message..."
              value={formData.message}
              onChange={onInputChange}
              required
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
      </section>
      <footer />
    </>
  );
};

export default ContactUs;
