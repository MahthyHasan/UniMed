import React, { useState } from "react";
import styled from "styled-components";

const StyledH3 = styled.h3`
  color: #000;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 24px;
`;

const StyledH5 = styled.h5`
  color: #000;
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 16px;
`;

const AddDrugButton = styled.button`
  background-color: #6bcb77;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 6px 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

const DrugsPrescription = () => {
  const [currentDrug, setCurrentDrug] = useState({
    drug: "",
    dosage: "",
    days: "",
  });
  const [prescribedDrugs, setPrescribedDrugs] = useState([]);

  const handleAddDrug = () => {
    if (currentDrug.drug && currentDrug.dosage && currentDrug.days) {
      setPrescribedDrugs([...prescribedDrugs, currentDrug]);
      setCurrentDrug({ drug: "", dosage: "", days: "" });
    }
  };

  const handleInputChange = (field, value) => {
    setCurrentDrug({
      ...currentDrug,
      [field]: value,
    });
  };

  const drugOptions = [
    "Paracetamol",
    "Ibuprofen",
    "Amoxicillin",
    "Ciprofloxacin",
  ];
  const dayOptions = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div>
      <StyledH3>Drug Prescription</StyledH3>
      <div className="row">
        <div className="col-md-4">
          <StyledH5>Drugs</StyledH5>
          <div className="form-group">
            <select
              className="form-control custom-select"
              value={currentDrug.drug}
              onChange={(e) => handleInputChange("drug", e.target.value)}
            >
              <option value="">Select Drug</option>
              {drugOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-md-4">
          <StyledH5>Dosage</StyledH5>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Dosage"
              value={currentDrug.dosage}
              onChange={(e) => handleInputChange("dosage", e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-4">
          <StyledH5>No. of Days</StyledH5>
          <div className="form-group">
            <select
              className="form-control custom-select"
              value={currentDrug.days}
              onChange={(e) => handleInputChange("days", e.target.value)}
            >
              <option value="">Select Days</option>
              {dayOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="text-right">
            <AddDrugButton onClick={handleAddDrug}>Add Drug</AddDrugButton>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default DrugsPrescription;
