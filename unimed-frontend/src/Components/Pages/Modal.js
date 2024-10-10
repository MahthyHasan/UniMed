import React, { useState } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";


const Modal = ({ isActive, closeModal }) => {
  return (
    <section className={isActive ? "active" : ""}>
      <span className="overlay" onClick={closeModal}></span>
      <div className="modal-box">
        <FontAwesomeIcon icon={faCircleCheck} />
        <h2>Success!</h2>
        <h3>Check your email to verify your account.</h3>
        <div className="buttons">
          <button className="close-btn" onClick={closeModal}>
            Ok, Close
          </button>
        </div>
      </div>
    </section>
  );
};

export default Modal;
