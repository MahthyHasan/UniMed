import React, { useState, useEffect } from "react";
import axios from "axios";
import patient from "../../../../assets/icons/patient.svg";
import totalpatient from "../../../../assets/icons/totalpatient.svg";
import hours from "../../../../assets/icons/hours.svg";
import TopInfoCards from "./TopInfoCards";

const Card = () => {
  const [checkedInCount, setCheckedInCount] = useState(0);
  const [checkedOutCount, setCheckedOutCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const checkedInResponse = await axios.get(`http://localhost:8088/api/v1/booking/countByStatus?status=checked_in`);
        const checkedOutResponse = await axios.get(`http://localhost:8088/api/v1/booking/countByStatus?status=consulted`);
        setCheckedInCount(checkedInResponse.data);
        setCheckedOutCount(checkedOutResponse.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <>
      <div className="col-12 col-md-4 sm">
        <div className="p-3 mx-auto">
          <TopInfoCards
            cardCategoryStyle="cardRemaining"
            cardTitle="Remaining Patients"
            cardIconPath={patient}
            cardData={checkedInCount}
            titleStyle={{ color: "black" }}
          />
        </div>
      </div>
      <div className="col-12 col-md-4 sm">
        <div className="p-3 mx-auto">
          <TopInfoCards
            cardCategoryStyle="cardTotalPatient"
            cardTitle="Total Patients"
            cardIconPath={totalpatient}
            cardData={checkedOutCount}
            titleStyle={{ color: "black" }}
          />
        </div>
      </div>
      <div className="col-12 col-md-4 sm">
        <div className="p-3 mx-auto">
          <TopInfoCards
            cardCategoryStyle="cardChanelledHours"
            cardTitle="Chanelled Time"
            cardIconPath={hours}
            cardData="3:32:54 Hrs"
            titleStyle={{ color: "black" }}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
