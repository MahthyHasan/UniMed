import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import iconpath1 from "../../../assets/icons/user-icon.svg";
import iconpath2 from "../../../assets/icons/lock-icon.svg";
import logopath from "../../../assets/logo.png";
import backIcon from "../../../assets/icons2/back-buttons-multimedia-svgrepo-com.svg";
import tickIcon from "../../../assets/Login-icons/tick.svg";
import "./commonLogin.css";
import NavBar from "../../Pages/Home/navbar";
import Footer from "../../Pages/Home/footer";

function CommonLogin() {
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const [errors, setErrors] = useState({
		username: "",
		password: "",
	});

	const [alertVisible, setAlertVisible] = useState(false);
	const [alertMessage, setAlertMessage] = useState("");

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

			// Show success alert
			setAlertMessage("Successfully logged in to Unimed");
			setAlertVisible(true);

			// Automatically dismiss the alert after 3 seconds and navigate to home page
			setTimeout(() => {
				setAlertVisible(false);
				navigate("/PatientDashboard");
			}, 3000);
		} catch (error) {
			console.error("Login failed:", error);
			setErrors({
				username: "Invalid username or password",
				password: "Invalid username or password",
			});
		}
	};
	return (
        <>
        <NavBar />
        <div className="sign-in-page-user">
			{alertVisible && (
				<div className="alert alert-success" role="alert">
					<p className="alert-message">{alertMessage}</p>
					<img src={tickIcon} alt="User Icon" className="alert-icon" />
				</div>
			)}
			<a href="/logincat" className="back-button">
				<img src={backIcon} alt="Back" />
			</a>

			<div className="sign-in-form-user">
				<div className="row logo-div-user">
					<img src={logopath} className="logo-pmt-user" alt="Logo" />
				</div>
				<form onSubmit={handleSubmit} className="form-div-user">
					<div className="row mt-4">
						<label
							htmlFor="username"
							className="justify-content-center align-items-center sign-in-form-input-02-lable-user">
							<img
								src={iconpath1}
								alt="User Icon"
								className="input-lable-icon-user"
							/>
							<input
								id="username"
								className="sign-in-form-input-02-user"
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
						<label
							htmlFor="password"
							className="sign-in-form-input-02-lable-user">
							<img
								src={iconpath2}
								alt="Password Icon"
								className="input-lable-icon-user"
							/>
							<input
								id="password"
								className="sign-in-form-input-02-user"
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
					<div className="row mt-4 logo-div-user">
						<button className="signin-button-user" type="submit">
							Login
						</button>
					</div>
					<div className="row mt-1">
						<div className="col-6 d-flex justify-content-start"></div>
						<div className="col-6 d-flex justify-content-end">
							<p className="sign-in-small-text-user">Forgot password?</p>
						</div>
					</div>
				</form>
			</div>
		</div>
        <Footer />        
        </>		
	);
}

export default CommonLogin;
