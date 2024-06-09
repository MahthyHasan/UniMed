import React, { useState } from "react";
import Layout from "../../layout/DoctorLayout/DoctorLayouts";
import Card from "../ComponentsDoctorDashboard/Card";
import { ScancardQr } from "../ComponentsDoctorDashboard/ScancardQr";
import { Channellingactions } from "../ComponentsDoctorDashboard/Channellingactions";
import { Bookedslots } from "../ComponentsDoctorDashboard/Bookedslots";
import { QrReader } from "react-qr-reader";
import QRCodeScanner from "../ComponentsDoctorDashboard/QRCodeScanner";


export default function Doctordashboard() {
	const [showAnotherDiv, setShowAnotherDiv] = useState(false);

	const handleScancardClick = () => {
		setShowAnotherDiv(true);
	};

	return (
		<Layout>
			<div className="container">
				<div className="row justify-content-center">
					<Card />
				</div>
				{!showAnotherDiv ? (
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
							<div >
								<QRCodeScanner />
							</div>
						</div>
					</div>
				)}
				<div className="row justify-content-center">
					<Bookedslots />
				</div>
			</div>
		</Layout>
	);
}
