import React from "react";

import "./usercards.css";

function UserCards({ icon, text, cssclass, iconcc }) {
  return (
    <div className={cssclass}>
      <img src={icon} alt="icon" className={iconcc} />
      <p className="text">{text}</p>
    </div>
  );
}

export default UserCards;
