import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeartbeat,
  faAmbulance,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const CardContainer = styled.div`
  background-color: #bbf7f6;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
`;

const TitleText = styled.h3`
  margin-left: 10px;
  font-size: 18px;
  color: #0047ab;
`;

const DataText = styled.p`
  text-align: right;
  font-size: 16px;
  margin: 0;
  color: #0047ab;
`;

const IconWrapper = styled.span`
  color: #ffffff;
  background-color: #18cdca;
  padding: 10px;
  border-radius: 50%;
`;

const AnalysisCards = ({ title, icon, data }) => {
  // Mapping icon name to FontAwesomeIcon
  const iconMap = {
    "total-patients": faUser,
    "common-health-issue": faHeartbeat,
    "emergency-cases": faAmbulance,
    "average-consultation-time": faClock,
  };

  return (
    <CardContainer>
      <CardTitle>
        <IconWrapper>
          <FontAwesomeIcon icon={iconMap[icon]} />
        </IconWrapper>
        <TitleText>{title}</TitleText>
      </CardTitle>
      <DataText>{data}</DataText>
    </CardContainer>
  );
};

AnalysisCards.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOf([
    "total-patients",
    "common-health-issue",
    "emergency-cases",
    "average-consultation-time",
  ]).isRequired,
  data: PropTypes.string.isRequired,
};

export default AnalysisCards;
