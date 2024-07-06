import React from "react";

const TopInfoCards = ({
  cardCategoryStyle,
  cardTitle,
  cardIconPath,
  cardData,
  textColor,
  fontSize,
}) => {
  return (
    <div className={`card ${cardCategoryStyle}`} style={{ color: textColor }}>
      <div className="card-body text-center">
        <img
          src={cardIconPath}
          alt={`${cardTitle} icon`}
          className="card-icon mb-3"
        />
        <h5 className="card-title" style={{ fontSize: fontSize.title }}>
          {cardTitle}
        </h5>
        <p className="card-text" style={{ fontSize: fontSize.text }}>
          {cardData}
        </p>
      </div>
    </div>
  );
};

export default TopInfoCards;
