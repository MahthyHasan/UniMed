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
		<Layout>
			<div className="container">
				<div className="row">
				<Card />
				</div>				
				<div class="row">
					<div class="col-12 col-md-6">
						<div>
							<Scancard />
						</div>
					</div>
					<div class="col-12 col-md-6">
						<div>
							<Channellingactions />
						</div>
					</div>
				</div>
				<div className="row">
				    <Bookedslots />
				</div>
			</div>			
		</Layout>
	);
}
