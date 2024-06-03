import React from "react";
import profileImage from "../../../../assets/images/doctor.png";
import "./userProfileCard.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UserProfileCard({ name, userId, onViewProfile, profileLink }) {
	return (
		<div className="userProfileCards">
			<div className="row">
				<div className="col-4">
					<img src={profileImage} alt={name} className="userProfileImage" />
				</div>
				<div className="col-8">
					<div className="row">
						<p className="userName">{name}</p>
					</div>
					<div className="row">
						<p className="userId">{userId}</p>
					</div>
					<div className="row mt-4">
						<Link to={profileLink}>
							<Button className="profilecardButton">
								View Profile
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserProfileCard;
