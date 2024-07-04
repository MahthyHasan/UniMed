import React, { useState } from "react";
import PharmacistLayout from "../../layout/PharmacistLayout/PharmacistLayout";
import Card from "../ComponentsPharmacistDashboard/Card";
import { ScancardQr } from "../ComponentsPharmacistDashboard/ScancardQr";
import QrcodeScannerForBooking from "../ComponentsPharmacistDashboard/QrcodeScannerForBooking";
import { ScancardQr2 } from "../ComponentsPharmacistDashboard/ScancardQr2";


function ClinicForPharmacist() {
    const [showQrDiv, setShowQrDiv] = useState(false);

	const handleScancardClick = () => {
		setShowQrDiv(true);
	};
    
  return (
    <PharmacistLayout>
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
								<ScancardQr2 />
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
								<QrcodeScannerForBooking setShowQrDiv={setShowQrDiv} />
							</div>
						</div>
					</div>
				)}				
			</div>
        
    </PharmacistLayout>
  )
}

export default ClinicForPharmacist
