import React from "react";
import backIcon from "../../../../assets/icons2/back-buttons-multimedia-svgrepo-com.svg";
import styled from "styled-components";


const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-left: 20px;
  padding-top: 10px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 0.875rem;

    img {
      margin-right: 0.5rem;
      width: 25px;
      height: 25px;
    }
  }
`;

export const Backbutton = () => {
  return (
    <BackButtonWrapper>
      <a href="/dashboard">
        <img src={backIcon} alt="Back" />
        Back
      </a>
    </BackButtonWrapper>
  );
};
