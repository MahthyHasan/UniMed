import React from "react";
import patient from "../../../../assets/icons/patient.svg";
import totalpatient from "../../../../assets/icons/totalpatient.svg";
import hours from "../../../../assets/icons/hours.svg";
import TopInfoCards from "./TopInfoCards";

export const Card = () => {
  const textColor = "black"; // Example color: red
  const fontSize = { title: "1.5rem", text: "1.3rem" }; // Example sizes

  return (
    <div className="row">
      <div className="col-12 col-md-4">
        <div className="p-3 mx-auto">
          <TopInfoCards
            cardCategoryStyle="cardRemaining"
            cardTitle="Remaining Patients"
            cardIconPath={patient}
            cardData="10"
            textColor={textColor}
            fontSize={fontSize}
          />
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="p-3 mx-auto">
          <TopInfoCards
            cardCategoryStyle="cardTotalPatient"
            cardTitle="Total Patients"
            cardIconPath={totalpatient}
            cardData="20"
            textColor={textColor}
            fontSize={fontSize}
          />
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="p-3 mx-auto">
          <TopInfoCards
            cardCategoryStyle="cardChanelledHours"
            cardTitle="Chanelled Time"
            cardIconPath={hours}
            cardData="3:32:54 Hrs"
            textColor={textColor}
            fontSize={fontSize}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
