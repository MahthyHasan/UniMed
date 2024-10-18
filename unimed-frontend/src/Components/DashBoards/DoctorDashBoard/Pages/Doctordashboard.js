import React, { useState } from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import Card from "../ComponentsDoctorDashboard/Card";
import { ScancardQr } from "../ComponentsDoctorDashboard/ScancardQr";
import { Bookedslots } from "../ComponentsDoctorDashboard/Bookedslots";
import QRCodeScanner from "../ComponentsDoctorDashboard/QRCodeScanner";
import Channellingactions from "../ComponentsDoctorDashboard/Channellingactions";
import { Table, Container, Button } from "react-bootstrap";
import styled from "styled-components";

export default function Doctordashboard() {
	const [showQrDiv, setShowQrDiv] = useState(false);
	const PageContainer = styled(Container)`
		margin-top: 20px;
		padding: 20px;
		background-color: #ffffff;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	`;

	const handleScancardClick = () => {
		setShowQrDiv(true);
	};

	return (
		<Layout>
			<PageContainer>
			<div className="container">
				<div className="row justify-content-center">
					<Card />
				</div>
				{!showQrDiv ? (
					<div className="row justify-content-center">
						<div className="col-12 col-md-6">
							<div className="p-3" onClick={handleScancardClick}>
								<ScancardQr />
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div className="p-3">
								<Channellingactions />
							</div>
						</div>
					</div>
				) : (
					<div className="row justify-content-center">
						<div className="col-12 col-md-6">
							<div className="p-3">
								<ScancardQr />
							</div>
						</div>
						<div className="col-12 col-md-6">
							<div>
								<QRCodeScanner setShowQrDiv={setShowQrDiv} />
							</div>
						</div>
					</div>
				)}
				<div className="row justify-content-center">
					<Bookedslots />
				</div>
			</div>
			</PageContainer>			
		</Layout>
	);
}
