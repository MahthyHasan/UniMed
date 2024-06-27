import React from "react";
import { useState } from "react";
import iconpath1 from "../../assets/icons/user-icon.svg";
import iconpath2 from "../../assets/icons/lock-icon.svg";
import iconpath3 from "../../assets/icons/email-icon.svg";
import iconpath4 from "../../assets/icons/name-icon.svg";
import logopath from "../../assets/logo.png";
import "./auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./Home/navbar";
import Footer from "./Home/footer";

function CreateAccount() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    rPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    rPassword: "",
  });

  const initialFormData = {
    email: "",
    username: "",
    first_name: "",
    last_name: "",
    password: "",
    rPassword: "",
  };
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = { ...errors };

    // Validate email
    if (!formData.email || !formData.email.includes("@std.uwu.ac.lk")) {
      newErrors.email = "Please enter a valid email address";
      hasErrors = true;
    } else {
      newErrors.email = "";
    }

    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      hasErrors = true;
    } else {
      newErrors.username = "";
    }

    // Validate first name
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
      hasErrors = true;
    } else {
      newErrors.first_name = "";
    }

    // Validate last name
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
      hasErrors = true;
    } else {
      newErrors.last_name = "";
    }

    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      hasErrors = true;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password should be at least 6 characters";
      hasErrors = true;
    } else {
      newErrors.password = "";
    }

    // Validate re-entered password
    if (!formData.rPassword.trim()) {
      newErrors.rPassword = "Please re-enter your password";
      hasErrors = true;
    } else if (formData.password !== formData.rPassword) {
      newErrors.rPassword = "Passwords do not match";
      hasErrors = true;
    } else {
      newErrors.rPassword = "";
    }

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      try {
        axios
          .post("http://localhost:8088/api/v1/user/save", formData)
          .then(() => {
            setFormData(initialFormData);            
            navigate("/verifyEmail");
          })
          .catch((error) => {
            if (error.response && error.response.data) {
              alert(`Account creation failed: ${error.response.data}`);
            } else {
              alert("Account creation failed!");
            }
          });
      } catch (err) {
        alert("Account creation Failed");
      }
    }
  };

  return (
    <>
    <NavBar />
    <div className="sign-in-page">      
      <div className="create-account-form-new">
        <div className="row logo-div">
          <img src={logopath} className="logo-pmt" alt="Logo"></img>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="row mt-4">
            <div className="col-6">
              <label htmlFor="email" className="sign-in-form-input-lable2">
                <img
                  src={iconpath3}
                  alt="User Icon"
                  className="input-lable-icon2"
                />
                <input
                  id="email"
                  className="sign-in-form-input"
                  type="text"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>
              {errors.email && (
                <p className="error-message" style={{ color: "red" }}>
                  {errors.email}
                </p>
              )}
            </div>
            <div className="col-6">
              <label htmlFor="username" className="sign-in-form-input-lable2">
                <img
                  src={iconpath1}
                  alt="User Icon"
                  className="input-lable-icon2"
                />
                <input
                  id="username"
                  className="sign-in-form-input"
                  type="text"
                  placeholder="USERNAME"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
              {errors.username && (
                <p className="error-message" style={{ color: "red" }}>
                  {errors.username}
                </p>
              )}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <label htmlFor="first_name" className="sign-in-form-input-lable2">
                <img
                  src={iconpath4}
                  alt="User Icon"
                  className="input-lable-icon2"
                />
                <input
                  id="first_name"
                  className="sign-in-form-input"
                  type="text"
                  placeholder="FIRST NAME"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </label>
              {errors.first_name && (
                <p className="error-message" style={{ color: "red" }}>
                  {errors.first_name}
                </p>
              )}
            </div>
            <div className="col-6">
              <label htmlFor="last_name" className="sign-in-form-input-lable2">
                <img
                  src={iconpath4}
                  alt="User Icon"
                  className="input-lable-icon2"
                />
                <input
                  id="last_name"
                  className="sign-in-form-input"
                  type="text"
                  placeholder="LAST NAME"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </label>
              {errors.last_name && (
                <p className="error-message" style={{ color: "red" }}>
                  {errors.last_name}
                </p>
              )}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              <label htmlFor="password" className="sign-in-form-input-lable2">
                <img
                  src={iconpath2}
                  alt="User Icon"
                  className="input-lable-icon2"
                />
                <input
                  id="password"
                  className="sign-in-form-input"
                  type="password"
                  placeholder="PASSWORD"
                  value={formData.password}
                  onChange={handleChange}
                />
              </label>
              {errors.password && (
                <p className="error-message" style={{ color: "red" }}>
                  {errors.password}
                </p>
              )}
            </div>
            <div className="col-6">
              <label htmlFor="rPassword" className="sign-in-form-input-lable2">
                <img
                  src={iconpath2}
                  alt="User Icon"
                  className="input-lable-icon2"
                />
                <input
                  id="rPassword"
                  className="sign-in-form-input"
                  type="password"
                  placeholder="RE-ENTER PASSWORD"
                  value={formData.rPassword}
                  onChange={handleChange}
                />
              </label>
              {errors.rPassword && (
                <p className="error-message" style={{ color: "red" }}>
                  {errors.rPassword}
                </p>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4 createButtonDiv">
            <button type="submit" className="createAccountButton">
              Create Account
            </button>
          </div>
        </form>
        <div className="row mt-2 logo-div">
          <button type="button" className="signinButtonLinkincreateAccount" onClick={() => navigate("/login")}>
            Already Have Account ?
          </button>
        </div>
      </div>
    </div>
    <div className="footerForCreateAccount">
    <Footer />
    </div>    
    </>
    
  );
}

export default CreateAccount;
