import React from "react";
import patient from "../../../../assets/icons/patient.svg";
import totalpatient from "../../../../assets/icons/totalpatient.svg";
import hours from "../../../../assets/icons/hours.svg";
import CardsOnTop from "./CardsOnTop";

export const Card = () => {
	return (
		<>
			<div class="col-12 col-md-4">
				<div>
					<CardsOnTop
						cardStyle="remainingPatientCards"
						cardTitle="Remaining Patients"
						iconPath={patient}
						cardBody="25"
					/>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div>
					<CardsOnTop
						cardStyle="totalPatientCards"
						cardTitle="total Patients"
						iconPath={totalpatient}
						cardBody="25"
					/>
				</div>
			</div>
			<div class="col-12 col-md-4">
				<div>
					<CardsOnTop
						cardStyle="totalHoursCards"
						cardTitle="Worked Hours"
						iconPath={hours}
						cardBody="2Hours"
					/>
				</div>
			</div>
		</>
	);
};

export default Card;
