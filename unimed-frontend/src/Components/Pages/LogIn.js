import React, { useState } from "react";
import iconpath1 from "../../assets/icons/user-icon.svg";
import iconpath2 from "../../assets/icons/lock-icon.svg";
import logopath from "../../assets/logo.svg";
import "./auth.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import backIcon from "../../assets/icons2/back-buttons-multimedia-svgrepo-com.svg";

function LogIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const initialFormData = {
    username: "",
    password: "",
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8088/api/v1/user/login",
        formData
      );
      const { token, user } = response.data;
      console.log(formData);

      // Store the token in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("username", formData.username);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("user_Id", response?.data?.user?.id);

      // Clear form fields
      setFormData(initialFormData);
      alert("Successfully Login to the Unimed");
      // Navigate to home page
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({
        username: "Invalid username or password",
        password: "Invalid username or password",
      });
    }
  };

  return (
    <div className="sign-in-page">
      <a href="/logincat" className="back-button">
        <img src={backIcon} alt="Back" />
      </a>
      <div className="sign-in-form">
        <div className="row logo-div">
          <img src={logopath} className="logo-pmt" alt="Logo"></img>
        </div>
        <form onSubmit={handleSubmit} className="form-div">
          <div className="row mt-4">
            <label htmlFor="username" className="sign-in-form-input-02-lable">
              <img
                src={iconpath1}
                alt="User Icon"
                className="input-lable-icon"
              />
              <input
                id="username"
                className="sign-in-form-input-02"
                type="text"
                placeholder="USERNAME"
                value={formData.username}
                onChange={handleChange}
              />
            </label>
            {errors.username && (
              <span className="error-message">{errors.username}</span>
            )}
          </div>
          <div className="row mt-2">
            <label htmlFor="password" className="sign-in-form-input-02-lable">
              <img
                src={iconpath2}
                alt="Password Icon"
                className="input-lable-icon"
              />
              <input
                id="password"
                className="sign-in-form-input-02"
                type="password"
                placeholder="PASSWORD"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>
          <div className="row mt-4 logo-div">
            <button className="signin-button" type="submit">
              Login
            </button>
          </div>
          <div className="row mt-1">
            <div className="col-6 d-flex justify-content-start">
              <p className="sign-in-small-text">Create new account</p>
            </div>
            <div className="col-6 d-flex justify-content-end">
              <p className="sign-in-small-text">Forgot password?</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
