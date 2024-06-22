import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AdminLayout from "../../../../layout/AdminLayout/AdminLayout";
import UserProfileCard from "../../../ComponenetsAdminDashboard/UserProfileCard";
import "./listAllPharmacistPage.css";
import { Button } from "react-bootstrap";
import CreateProfile from "../../../ComponenetsAdminDashboard/CreateProfile";

function ListAllPharmacistPage() {
    const [pharmacist, setPharmacist] = useState([]);
	const [search, setSearch] = useState("");
	const [filterPharmacist, setFilterPharmacist] = useState([]);
	const [modalShow, setModalShow] = React.useState(false);

	useEffect(() => {
		// Fetch the pharmacist data from the backend
		axios
			.get("http://localhost:8088/api/v1/pharmacist/getAll")
			.then((response) => {
				setPharmacist(response.data);
				setFilterPharmacist(response.data); // Initialize filtered pharmacist with all pharmacist
			})
			.catch((error) => {
				console.error("There was an error fetching the pharmacist data!", error);
			});
	}, []);

	useEffect(() => {
		// Filter pharmacist based on search term
		const filtered = pharmacist.filter(
			(pharmacist) =>
				pharmacist.first_name &&
				pharmacist.first_name.toLowerCase().includes(search.toLowerCase())
		);
		setFilterPharmacist(filtered);
	}, [search, pharmacist]);
  return (
    <AdminLayout>
			<div className="list-All-Doctors-admin-page">
				<Form>
					<InputGroup className="mt-3 input-group-for-admin-searchbar">
						{/* onChange for search */}
						<Form.Control
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search pharmacists by name"
						/>
					</InputGroup>
				</Form>
				<div className="row">
					{filterPharmacist.map((pharmacist, index) => (
						<div className="col-4 mt-3" key={pharmacist._id}>
							<UserProfileCard name={pharmacist.first_name} userId={pharmacist._id} profileLink={`/showPharmacistProfilePage/${pharmacist._id}`} />
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
                apiSaveLink = "http://localhost:8088/api/v1/pharmacist/save" 
                navigationLink = "/listAllPharmacist"
				></CreateProfile>
			</div>
		</AdminLayout>
  )
}

export default ListAllPharmacistPage
