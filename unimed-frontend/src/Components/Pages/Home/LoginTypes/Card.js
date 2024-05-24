import React from "react";
import "./card.css";

function Card({ title, description, icon, onClick }) {
  return (
    <div className="cardlp" onClick={onClick}>
      <h3>{title}</h3>
      <img src={icon} alt={title} className="icon" />
      <p>{description}</p>
      <button className="btncrd">Login</button>
    </div>
  );
}

export default Card;
