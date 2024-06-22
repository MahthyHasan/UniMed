import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const EditProfile = (props) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    errors: {},
  });

  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    if (!formData.first_name) {
      errors.first_name = "First name is required!";
    }
    if (!formData.last_name) {
      errors.last_name = "Last name is required!";
    }
    if (!formData.email) {
      errors.email = "Email is required!";
    }
    setFormData((prevState) => ({ ...prevState, errors }));
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = () => {
    console.log("Form is cancelled");
    navigate("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      console.log("Updated successfully");
      alert("Profile updated successfully!");
    } else {
      console.log("Form is invalid");
    }
  };

  return (
    <Modal
      {...props}
      size="ms"
      position="top-right"
      aria-labelledby="contained-modal-title-vcenter"
      dialogClassName="modal-right-top" // Add a custom class for styling
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.type === "Edit" && <div>Edit Profile</div>}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body scrollable>
        <form>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter First Name"
                name="first_name"
                value={formData?.first_name || ""}
                onChange={handleChange}
              />
              {formData?.errors?.first_name && (
                <p style={{ color: "red" }}>{formData?.errors?.first_name}</p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                name="last_name"
                value={formData.last_name || ""}
                onChange={handleChange}
              />
              {formData?.errors?.last_name && (
                <p style={{ color: "red" }}>{formData?.errors?.last_name}</p>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                name="email"
                value={formData.email || ""}
                onChange={handleChange}
              />
              {formData?.errors?.email && (
                <p style={{ color: "red" }}>{formData?.errors?.email}</p>
              )}
            </div>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button type="button" className="btn btn-primary">
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};