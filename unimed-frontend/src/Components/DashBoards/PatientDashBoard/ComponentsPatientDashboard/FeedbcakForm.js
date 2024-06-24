import React, { useState } from "react";
import axios from "axios";
import "../../../../Css/Patient/Feedback.css";

export default function FeedbackForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = { email, message };

    try {
      const response = await axios.post(
        "http://localhost:8088/addFeedback",
        feedback
      );
      if (response.status === 200) {
        alert("Feedback submitted successfully!");
      } else {
        alert("Failed to submit feedback.");
      }
    } catch (error) {
      console.error("There was an error submitting the feedback!", error);
      alert("There was an error submitting the feedback.");
    }
  };

  return (
    <div className="flex items-center justify-center p-12">
      <div className="form-container">
        <h2 style={{ color: "#2563EB", fontWeight: "bold" }}>Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-3 block text-base font-medium text-blue-600"
            >
              <h5 style={{ color: "#2563EB" }}>Email Address</h5>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              <h5 style={{ color: "#2563EB" }}>Message</h5>
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="form-input message-input"
              required
            />
          </div>
          <div>
            <button type="submit" className="form-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
