import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Layout from "../../../layout/DoctorLayout/DoctorLayouts";
import UserProfileCard from "../../ComponenetsAdminDashboard/UserProfileCard";
import "./listAllDoctorsPage.css"

function ListAllDoctorsPage() {
	const [doctors, setDoctors] = useState([]);
	const [search, setSearch] = useState("");
	const [filterDoctors, setFilterDoctors] = useState([]);

	useEffect(() => {
		// Fetch the doctors data from the backend
		axios
			.get("http://localhost:8088/api/v1/doctor/getAll")
			.then((response) => {
				setDoctors(response.data);
				setFilterDoctors(response.data); // Initialize filtered doctors with all doctors
			})
			.catch((error) => {
				console.error("There was an error fetching the doctors data!", error);
			});
	}, []);

	useEffect(() => {
		// Filter doctors based on search term
		const filtered = doctors.filter((doctor) =>
			doctor.first_name && doctor.first_name.toLowerCase().includes(search.toLowerCase())
		);
		setFilterDoctors(filtered);
	}, [search, doctors]);

	return (
		<Layout>
			<div className="list-All-Doctors-admin-page">
				<Form>
					<InputGroup className="mt-3">
						{/* onChange for search */}
						<Form.Control
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search doctors by name"
						/>
					</InputGroup>
				</Form>
				<div className="row">
					{filterDoctors.map((doctor, index) => (
						<div className="col-4 mt-3" key={doctor._id}>
							<UserProfileCard name={doctor.first_name} userId={doctor._id} />
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
}

export default ListAllDoctorsPage;
