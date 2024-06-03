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
		<div>
			<div><Link to="/adminSelectUsers"><p className="topNavigation">users</p></Link></div>
			<div className="user-selection-div-for-admin-page">
			<div className="col">
				<div className="row">
					<Link to="/listAllDoctors" className="card-link">						
							<UserCards text="Doctor" icon={doctorIcon} cssclass="user-cards-admin-dashboard-doctor" iconcc="icon" />						
					</Link>
				</div>
				<div className="row mt-2">
					<Link to="/pharmacistAllProfiles" className="card-link">						
							<UserCards text="Pharmacist" icon={pharmesistIcon} cssclass="user-cards-admin-dashboard-pharmacist" iconcc="icon" />						
					</Link>
				</div>
				<div className="row mt-2">
					<Link to="/patientAllProfiles" className="card-link" >						
							<UserCards text="Patient" icon={patientIcon} cssclass="user-cards-admin-dashboard-patient" iconcc="icon2" />						
					</Link>
				</div>
				<div className="row mt-2">
					<Link to="/adminAllProfiles" className="card-link">						
							<UserCards text="Admin" icon={adminIcon} cssclass="user-cards-admin-dashboard-admin" iconcc="icon" />						
					</Link>
				</div>
			</div>
		</div>
		</div>
		
	);
}

export default UserSelection;
