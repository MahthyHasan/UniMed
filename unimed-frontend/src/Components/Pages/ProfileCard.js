import React from "react";
import styled from "styled-components";

const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%; // Reduced width for the profile box
  height: 130px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 10px 20px;
  margin-top: 9px;
`;

const ProfileIcon = styled.div`
  margin-right: 16px;

  img {
    width: 80px;
    height: 80px;
  }
`;

const ProfileInfo = styled.div`
  h5 {
    margin-bottom: 8px;
    color: #000;
    font-weight: 500;

    span {
      font-weight: 500;
      color: #000;
    }
  }

  p {
    margin-bottom: 0;
    color: #333;

    span {
      font-weight: normal;
      color: #666;
    }
  }
`;

const ProfileCard = ({ profileImage, studentName, studentId }) => {
  return (
    <ProfileCardContainer>
      <ProfileIcon>
        <img src={profileImage} alt="Profile" />
      </ProfileIcon>
      <ProfileInfo>
        <h5>
          Student ID: <span>{studentId}</span>
        </h5>
        <p>
          Student Name: <span>{studentName}</span>
        </p>
      </ProfileInfo>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
