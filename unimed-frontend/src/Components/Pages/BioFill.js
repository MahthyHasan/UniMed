import React, { useState } from "react";
import iconpath2 from "../../assets/icons/lock-icon.svg";
import logopath from "../../assets/logo.png";
import "./auth.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "./Home/navbar";
import Footer from "./Home/footer";

function BioFill() {
    const [formData, setFormData] = useState({
        nic: "",
        regNo: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        bloodGroup: "",
        allergies: "",
        phoneNo: "",
        bioalert:"true"
    });

    const [errors, setErrors] = useState({
        nic: "",
        regNo: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        bloodGroup: "",
        allergies: "",
        phoneNo: ""
    });

    const initialFormData = {
        nic: "",
        regNo: "",
        age: "",
        gender: "",
        height: "",
        weight: "",
        bloodGroup: "",
        allergies: "",
        phoneNo: "",
        bioalert:"true"
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

        // Validate all fields
        Object.keys(formData).forEach((field) => {
            if (!formData[field].trim()) {
                newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
                hasErrors = true;
            } else {
                newErrors[field] = "";
            }
        });

        if (hasErrors) {
            setErrors(newErrors);
        } else {
            const userId = localStorage.getItem("user_Id");
            try {
                axios
                    .put(`http://localhost:8088/api/v1/user/save/bio/${userId}`, formData)
                    .then(() => {
                        setFormData(initialFormData);
                        navigate("/patientDashboard");
                    })
                    .catch((error) => {
                        if (error.response && error.response.data) {
                            alert(`Bio data save failed: ${error.response.data}`);
                        } else {
                            alert("Bio data save failed!");
                        }
                    });
            } catch (err) {
                alert("Bio data save failed");
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
                        <div className="row mt-2">
                            <div className="col-6">
                                <label htmlFor="nic" className="sign-in-form-input-lable2">
                                    <input
                                        id="nic"
                                        className="sign-in-form-input"
                                        type="text"
                                        placeholder="Enter NIC"
                                        value={formData.nic}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.nic && (
                                    <p className="error-message" style={{ color: "red" }}>
                                        {errors.nic}
                                    </p>
                                )}
                            </div>
                            <div className="col-6">
                                <label htmlFor="regNo" className="sign-in-form-input-lable2">
                                    <input
                                        id="regNo"
                                        className="sign-in-form-input"
                                        type="text"
                                        placeholder="Enter Registration Number"
                                        value={formData.regNo}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.regNo && (
                                    <p className="error-message" style={{ color: "red" }}>
                                        {errors.regNo}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6">
                                <label htmlFor="age" className="sign-in-form-input-lable2">
                                    <input
                                        id="age"
                                        className="sign-in-form-input"
                                        type="text"
                                        placeholder="Enter Age"
                                        value={formData.age}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.age && (
                                    <p className="error-message" style={{ color: "red" }}>
                                        {errors.age}
                                    </p>
                                )}
                            </div>
                            <div className="col-6">
                                <label htmlFor="gender" className="sign-in-form-input-lable2">
                                    <input
                                        id="gender"
                                        className="sign-in-form-input"
                                        type="text"
                                        placeholder="Enter Gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.gender && (
                                    <p className="error-message" style={{ color: "red" }}>
                                        {errors.gender}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6">
                                <label htmlFor="height" className="sign-in-form-input-lable2">
                                    <input
                                        id="height"
                                        className="sign-in-form-input"
                                        type="text"
                                        placeholder="Enter Height"
                                        value={formData.height}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.height && (
                                    <p className="error-message" style={{ color: "red" }}>
                                        {errors.height}
                                    </p>
                                )}
                            </div>
                            <div className="col-6">
                                <label htmlFor="weight" className="sign-in-form-input-lable2">
                                    <input
                                        id="weight"
                                        className="sign-in-form-input"
                                        type="text"
                                        placeholder="Enter Weight"
                                        value={formData.weight}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.weight && (
                                    <p className="error-message" style={{ color: "red" }}>
                                        {errors.weight}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-6">
                                <label htmlFor="bloodGroup" className="sign-in-form-input-lable2">
                                    <input
                                        id="bloodGroup"
                                        className="sign-in-form-input"
                                        type="text"
                                        placeholder="Enter Blood Group"
                                        value={formData.bloodGroup}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.bloodGroup && (
                                    <p className="error-message" style={{ color: "red" }}>
                                        {errors.bloodGroup}
                                    </p>
                                )}
                            </div>
                            <div className="col-6">
                                <label htmlFor="allergies" className="sign-in-form-input-lable2">
                                    <input
                                        id="allergies"
                                        className="sign-in-form-input"
                                        type="text"
                                        placeholder="Enter Allergies"
                                        value={formData.allergies}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.allergies && (
                                    <p className="error-message" style={{ color: "red" }}>
                                        {errors.allergies}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <label htmlFor="phoneNo" className="sign-in-form-input-lable2">
                                    <input
                                        id="phoneNo"
                                        className="sign-in-form-input"
                                        type="text"
                                        placeholder="Enter Phone Number"
                                        value={formData.phoneNo}
                                        onChange={handleChange}
                                    />
                                </label>
                                {errors.phoneNo && (
                                    <p className="error-message" style={{ color: "red" }}>
                                        {errors.phoneNo}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="d-flex justify-content-center mt-4 createButtonDiv">
                            <button type="submit" className="createAccountButton">
                                Save Bio Data
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="footerForCreateAccount">
                <Footer />
            </div>
        </>
    );
}

export default BioFill;
