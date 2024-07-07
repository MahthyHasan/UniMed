import React from "react";
import "./topInfoCards.css";

function TopInfoCards(props) {
  return (
    <div className={props.cardCategoryStyle}>
      <div className="cardTitle" style={props.titleStyle}>
        <p>{props.cardTitle}</p>
      </div>
      <div className="cardIcon">
        <img src={props.cardIconPath} alt="cardIcon" />
      </div>
      <div className="cardData">
        <p>{props.cardData}</p>
      </div>
    </div>
  );
}

export default TopInfoCards;
