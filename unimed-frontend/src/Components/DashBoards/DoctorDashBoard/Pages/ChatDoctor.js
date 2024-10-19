import React, { useState } from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import BlockCard from "../ComponentsDoctorDashboard/BlockCard";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from 'react-bootstrap/Button';
import axios from "axios";  // Import axios for API request

function ChatDoctor() {
	// State variables to hold form input values
	const [title, setTitle] = useState("");
	const [subTopic, setSubTopic] = useState("");
	const [subject, setSubject] = useState("");

	// Function to handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault(); // Prevent page reload on form submit

		// Get the current date and time
		const currentDate = new Date();
		const date = currentDate.toISOString().split('T')[0]; // YYYY-MM-DD format
		const time = currentDate.toLocaleTimeString(); // Get current time in HH:MM:SS format

		// Prepare the data object
		const data = {
			title,
			subTopic,
			subject,
			date,
			time
		};

		// Send the data to the backend using axios
		try {
			const response = await axios.post("http://localhost:8088/api/v1/Blog", data);
			console.log("Response: ", response.data);
			alert("Blog added successfully!");
		} catch (error) {
			console.error("Error posting data: ", error);
			alert("Error adding blog.");
		}
	};

	const PageContainer = styled(Container)`
		margin-top: 20px;
		padding: 20px;
		background-color: #ffffff;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	`;

	return (
		<Layout>
			<PageContainer>
				<div className="row">
					<div className="col-4">
						<BlockCard />
					</div>
					<div className="col-4">
						<BlockCard />
					</div>
					<div className="col-4">
						<BlockCard />
					</div>
				</div>

				{/* Form starts here */}
				<form onSubmit={handleSubmit}>
					<div className="row mt-4">
						<div className="col-5">
							{/* Only one input field per form */}
							<Box
								sx={{ "& > :not(style)": { m: 1 } }}
								noValidate
								autoComplete="off">
								<TextField
									fullWidth
									id="title"
									label="Topic Title"
									variant="standard"
									value={title}
									onChange={(e) => setTitle(e.target.value)} // Update state
									required
								/>
							</Box>
						</div>
						<div className="col-7">
							<Box
								sx={{ "& > :not(style)": { m: 1 } }}
								noValidate
								autoComplete="off">
								<TextField
									fullWidth
									id="subTopic"
									label="Sub Title"
									variant="standard"
									value={subTopic}
									onChange={(e) => setSubTopic(e.target.value)} // Update state
									required
								/>
							</Box>
						</div>
					</div>

					<div className="row mt-4">
						<Box
							sx={{ "& > :not(style)": { m: 1 } }}
							noValidate
							autoComplete="off">
							<TextField
								id="subject"
								label="Subject"
								placeholder="Give Detailed Subject Here"
								multiline
								fullWidth
								value={subject}
								onChange={(e) => setSubject(e.target.value)} // Update state
								required
							/>
						</Box>
					</div>

					<div className="row mt-4">
						<div className="d-flex justify-content-center">
							<Button type="submit" variant="outline-success">
								Add to Community Chat
							</Button>
						</div>
					</div>
				</form>
			</PageContainer>
		</Layout>
	);
}

export default ChatDoctor;
