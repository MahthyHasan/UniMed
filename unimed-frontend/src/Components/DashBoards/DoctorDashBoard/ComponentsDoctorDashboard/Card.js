import React from "react";
import patient from "../../../../assets/icons/patient.svg";
import totalpatient from "../../../../assets/icons/totalpatient.svg";
import hours from "../../../../assets/icons/hours.svg";
import TopInfoCards from "./TopInfoCards";

export const Card = () => {
  return (
    <>
    <div class="col-12 col-md-4 sm">
            <div class="p-3 mx-auto">
              <TopInfoCards
                cardCategoryStyle = 'cardRemaining'
                cardTitle = 'Remaining Patients'
                cardIconPath={patient}
                cardData ='10'
              />
            </div>
        </div>
        <div class="col-12 col-md-4 sm">
            <div class="p-3 mx-auto">
            <TopInfoCards
                cardCategoryStyle = 'cardTotalPatient'
                cardTitle = 'Total Patients'
                cardIconPath={totalpatient}
                cardData ='20'
              />
            </div>
        </div>
        <div class="col-12 col-md-4 sm">
            <div class="p-3 mx-auto">
            <TopInfoCards
                cardCategoryStyle = 'cardChanelledHours'
                cardTitle = 'Chanelled Time'
                cardIconPath={hours}
                cardData ='3:32:54 Hrs'
              />
            </div>
        </div>    
    </>
  );
};

export default Card;
