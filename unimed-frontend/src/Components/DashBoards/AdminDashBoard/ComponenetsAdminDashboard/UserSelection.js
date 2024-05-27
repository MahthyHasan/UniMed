import React from "react";
import "./userSelection.css";
import UserCards from "./UserCards";
import { Link } from "react-router-dom";
import doctorIcon from "../../../../assets/icons2/doctor-f-svgrepo-com.svg";
import patientIcon from "../../../../assets/icons2/patient-with-injured-bandaged-head-standing-with-saline-via-intravenous-line-svgrepo-com.svg";
import pharmesistIcon from "../../../../assets/icons2/pharmacist-pharmacy-counter-drug-store-svgrepo-com.svg";
import adminIcon from "../../../../assets/icons2/edit-3-svgrepo-com.svg";

function UserSelection() {
	return (
		<div className="user-selection-div-for-admin-page">
			<div className="col">
				<div className="row">
					<Link to="/doctorAllProfiles" className="card-link">
						<UserCards
                        cssclass = "user-cards-admin-dashboard-doctor"
                        text="Doctor"
                        icon={doctorIcon}
                        />
					</Link>
				</div>
                <div className="row mt-2">
					<Link to="/pharmacistAllProfiles" className="card-link">
						<UserCards
                        cssclass = "user-cards-admin-dashboard-pharmacist"
                        text="Pharmacist"
                        icon={pharmesistIcon}
                        />
					</Link>
				</div>
                <div className="row mt-2">
					<Link to="/patientAllProfiles" className="card-link">
						<UserCards
                        cssclass = "user-cards-admin-dashboard-patient"
                        text="Patient"
                        icon={patientIcon}
                        />
					</Link>
				</div>
                <div className="row mt-2">
					<Link to="/adminAllProfiles" className="card-link">
						<UserCards
                        cssclass = "user-cards-admin-dashboard-doctor"
                        text="Admin"
                        icon={adminIcon}
                        />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default UserSelection;
