import React, { useState } from "react";
import "./credentialFormRight.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import sPIcon from "../../../../assets/icons2/showpass.svg";

function CredentialFormRight({ userId, username, password, email, onUpdate2 }) {
	const [formData2, setFormData2] = useState({
		username,
		password,
		email,
	});

	const [showPassword, setShowPassword] = useState(false);

	const handleChange2 = (e) => {
		setFormData2({
			...formData2,
			[e.target.name]: e.target.value,
		});
	};

	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit2 = async (e) => {
		e.preventDefault();
		try {
			await axios.put(`http://localhost:8088/api/v1/doctor/${userId}`, {
				username: formData2.username,
				password: formData2.password,
				email: formData2.email,
			});
			onUpdate2();
		} catch (error) {
			console.error("Error updating data:", error);
		}
	};

	return (
		<div className="col-12 credentialFormRight">
			<form onSubmit={handleSubmit2}>
				<div className="row">
					<p className="formTitleCredentialForm">Credential</p>
				</div>
				<div className="row mt-0">
					<p className="rightCredentialFormInputFieldTitle">User Name</p>
					<input
						className="form-control inputTagForCredentialDataRight"
						type="text"
						name="username"
						value={formData2.username}
						onChange={handleChange2}
					/>
				</div>
				<div className="row">
					<p className="rightCredentialFormInputFieldTitle">Password</p>
					<input
						className="form-control inputTagForCredentialDataRight"
						type={showPassword ? "text" : "password"}
						name="password"
						value={formData2.password}
						onChange={handleChange2}
					/>
					<img
						src={sPIcon}
						className={`password-icon ${
							showPassword ? "showPassButtonOpen" : "showPassButtonClose"
						}`}
						onClick={toggleShowPassword}
					/>
					F
				</div>
				<div className="row">
					<p className="rightCredentialFormInputFieldTitle">Recovery Email</p>
					<input
						className="form-control inputTagForCredentialDataRight"
						type="text"
						name="email"
						value={formData2.email}
						onChange={handleChange2}
					/>
				</div>
				<div className="row">
					<Button className="ButtonForRightForm" type="submit">
						Save Changes
					</Button>
				</div>
			</form>
		</div>
	);
}

export default CredentialFormRight;
