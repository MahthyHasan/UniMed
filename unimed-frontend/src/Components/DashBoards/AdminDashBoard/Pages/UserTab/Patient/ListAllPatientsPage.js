import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import AdminLayout from "../../../../layout/AdminLayout/AdminLayout";
import UserProfileCard from "../../../ComponenetsAdminDashboard/UserProfileCard";
import "./listAllpatientPage.css";
import { Button } from "react-bootstrap";
import CreateUserProfile from "../../../ComponenetsAdminDashboard/CreateUserProfile";

function ListAllPatientsPage() {
    const [user, setUser] = useState([]);
	const [search, setSearch] = useState("");
	const [filteruser, setFilterUser] = useState([]);
	const [modalShow, setModalShow] = useState(false);

	useEffect(() => {
		// Fetch the user data from the backend
		axios
			.get("http://localhost:8088/api/v1/user/getAll")
			.then((response) => {
				setUser(response.data);
				setFilterUser(response.data); // Initialize filtered user with all user
			})
			.catch((error) => {
				console.error("There was an error fetching the user data!", error);
			});
	}, []);

	useEffect(() => {
		// Filter user based on search term
		const filtered = user.filter(
			(user) =>
				user.firstName &&
				user.firstName.toLowerCase().includes(search.toLowerCase())
		);
		setFilterUser(filtered);
	}, [search, user]);
  return (
    <div>
        <AdminLayout>
			<div className="list-All-users-admin-page">
				<Form>
					<InputGroup className="mt-3 input-group-for-admin-searchbar">
						{/* onChange for search */}
						<Form.Control
							onChange={(e) => setSearch(e.target.value)}
							placeholder="Search users by name"
						/>
					</InputGroup>
				</Form>
				<div className="row">
					{filteruser.map((user) => (
						<div className="col-4 mt-3" key={user.id}>
							<UserProfileCard 
								name={user.firstName} 
								userId={user.id}
								profileLink={`/showPatientProfilePage/${user.id}`} // Pass profileLink prop
							/>
						</div>
					))}
				</div>
				<div className="row">
					<Button className="addProfileButton" onClick={() => setModalShow(true)}>
						<p className="mt-1">Add Profile</p>
					</Button>
				</div>
				<CreateUserProfile
				show={modalShow}
				onHide={() => setModalShow(false)}
				apiSaveLink = "http://localhost:8088/api/v1/user/savebyadmin"
				navigationLink = "/listAllPatients"
				/>				
			</div>
		</AdminLayout>
      
    </div>
  )
}

export default ListAllPatientsPage
