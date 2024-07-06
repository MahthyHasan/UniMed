import React from "react";
import styled from "styled-components";

const LastDiagnosisContainer = styled.div`
	margin-bottom: 2rem;
	margin-top: 2rem;

	h4 {
		font-weight: 1550;
		margin-bottom: 1.5rem;
		color: #000;
		font-size: 4rem;
	}

	.last-diagnosis-box {
		flex: 1 1 30%;
		background-color: #d9d9d9;
		border: 1px solid #d9d9d9;
		border-radius: 8px;
		padding: 1.5rem;
	}

	h5 {
		font-weight: 1500;
		color: #333;
		font-size: 3rem;
	}
	p {
		color: #333;
	}

	ul {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-left: 0; /* Remove default padding */
		list-style-type: none; /* Remove default list style */
	}

	li {
		font-size: 2rem;
	}

	.issueButton {
		background-color: #18cdca;
		color: #ffff;
		border: none;
		padding: 10px 20px;
		font-size: 16px;
		border-radius: 8px;
		cursor: pointer;
	}

	.button-container {
		display: flex;
		justify-content: flex-end;
		width: 100%;
		margin-top: 1rem;
	}
`;

function formatMedicineString(medicineString) {
	const [name, dosage, duration] = medicineString.split(" ");
	return `${name} ${dosage}mg ${duration}Days`;
}

function IssuedPrescription({ record, onIssue }) {
	return (
		<LastDiagnosisContainer>
			<h4>Prescription</h4>
			<div className="d-flex flex-wrap justify-content-between gap-3">
				<div className="last-diagnosis-box">
					<h5 className="mb-2">Prescribed Medicine</h5>
					<ul className="justify-content-center mb-0">
						{record.priscripedMedicines.map((medicine, index) => (
							<li key={index}>
								<p>{formatMedicineString(medicine)}</p>
							</li>
						))}
					</ul>
					<div className="button-container">
						<button className="issueButton" onClick={onIssue}>
							Issued
						</button>
					</div>
				</div>
			</div>
		</LastDiagnosisContainer>
	);
}

export default IssuedPrescription;
