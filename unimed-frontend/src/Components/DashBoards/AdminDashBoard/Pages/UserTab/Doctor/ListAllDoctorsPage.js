import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AdminLayout from "../../../../layout/AdminLayout/AdminLayout";
import UserProfileCard from "../../../ComponenetsAdminDashboard/UserProfileCard";
import "./listAllDoctorsPage.css";
import { Button } from "react-bootstrap";
import CreateProfile from "../../../ComponenetsAdminDashboard/CreateProfile";

function ListAllDoctorsPage() {
	const [doctors, setDoctors] = useState([]);
	const [search, setSearch] = useState("");
	const [filterDoctors, setFilterDoctors] = useState([]);
	const [modalShow, setModalShow] = useState(false);

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
		const filtered = doctors.filter(
			(doctor) =>
				doctor.first_name &&
				doctor.first_name.toLowerCase().includes(search.toLowerCase())
		);
		setFilterDoctors(filtered);
	}, [search, doctors]);

	return (
		<AdminLayout>
			<div className="list-All-Doctors-admin-page">
				<Form>
					<InputGroup className="mt-3 input-group-for-admin-searchbar">
						{/* onChange for search */}
						<Form.Control
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search doctors by name"
						/>
					</InputGroup>
				</Form>
				<div className="row">
					{filterDoctors.map((doctor) => (
						<div className="col-4 mt-3" key={doctor._id}>
							<UserProfileCard 
								name={doctor.first_name} 
								userId={doctor._id}
								profileLink={`/showDoctorProfilePage/${doctor._id}`} // Pass profileLink prop
							/>
						</div>
					))}
				</div>
				<div className="row">
					<Button className="addProfileButton" onClick={() => setModalShow(true)}>
						<p className="mt-1">Add Profile</p>
					</Button>
				</div>
				<CreateProfile
					show={modalShow}
					onHide={() => setModalShow(false)}
					apiSaveLink = "http://localhost:8088/api/v1/doctor/save"
				/>
			</div>
		</AdminLayout>
	);
}

export default ListAllDoctorsPage;
