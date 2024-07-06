import React from "react";
import styled from "styled-components";

const AllergiesContainer = styled.div`
  display: flex;
  align-items: center;
  color: #800000;
  font-weight: 600; // Set text color to black
  .allergiesection {
    margin-right: 0.5rem;
  }
  .allergieitems {
    color: #800000;
    font-weight: 600; // Set color of the allergy items to black
  }
`;

export default function Allergies({ item1 }) {
  return (
    <AllergiesContainer>
      Allergies:{" "}
      <span className="ms-1 allergieitems">
        {item1}
      </span>
    </AllergiesContainer>
  );
}
