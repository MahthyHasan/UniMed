import React, { useEffect, useState } from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import Card from "../ComponentsDoctorDashboard/Card";
import { Scancard } from "../ComponentsDoctorDashboard/Scancard";
import { Channellingactions } from "../ComponentsDoctorDashboard/Channellingactions";
import { Bookedslots } from "../ComponentsDoctorDashboard/Bookedslots";

export default function Doctordashboard() {
	const [username, setUsername] = useState("");

	useEffect(() => {
		// Retrieve the username from localStorage
		const storedUsername = localStorage.getItem("username");
		if (storedUsername) {
			setUsername(storedUsername);
		}
	}, []);

	return (
		<div>
			<Layout>
				<h1>{username}</h1>{" "}
				{/* Replace 'Doctor Name' with the retrieved username */}
				<Card />
				<Scancard />
				<Channellingactions />
				<Bookedslots />
			</Layout>
		</div>
	);
}
