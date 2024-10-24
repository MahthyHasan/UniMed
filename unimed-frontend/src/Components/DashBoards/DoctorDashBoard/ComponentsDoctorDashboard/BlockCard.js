import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "react-bootstrap";
import axios from "axios";

function BlockCard({ title, subTopic, subject, date, id, onDelete }) {
	const [showModal, setShowModal] = useState(false);

	const handleDeleteClick = () => {
		setShowModal(true);
	};

	const handleClose = () => setShowModal(false);

	const confirmDelete = async () => {
		try {
			// Call the API to delete the blog post by ID
			await axios.delete(`http://localhost:8088/api/v1/Blog/${id}`);
			onDelete(id); // Call the onDelete function to update the parent state
			setShowModal(false);
		} catch (error) {
			console.error("Error deleting blog news: ", error);
			alert("Failed to delete blog news.");
		}
	};

	return (
		<>
			<Card sx={{ minWidth: 275 }} className="mt-2 mb-2">
				<CardContent>
					{/* Display the date */}
					<Typography
						gutterBottom
						sx={{ color: "text.secondary", fontSize: 14 }}>
						{date}
					</Typography>

					{/* Display the title */}
					<Typography variant="h5" component="div">
						{title}
					</Typography>

					{/* Display the subTopic */}
					<Typography sx={{ color: "text.secondary", mb: 1.5 }}>
						{subTopic}
					</Typography>

					{/* Display the subject */}
					<Typography variant="body2">
						{subject}
						<br />
					</Typography>
				</CardContent>

				<CardActions>
					<Button size="small" variant="danger" onClick={handleDeleteClick}>
						Delete
					</Button>
				</CardActions>
			</Card>

			{/* Bootstrap Modal for delete confirmation */}
			<Modal show={showModal} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title style={{ color: "black" }}>
						Delete Confirmation
					</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ color: "black" }}>
					Are you sure you want to delete this blog post?
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant="danger"
						style={{ color: "red" }}
						onClick={confirmDelete}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default BlockCard;
