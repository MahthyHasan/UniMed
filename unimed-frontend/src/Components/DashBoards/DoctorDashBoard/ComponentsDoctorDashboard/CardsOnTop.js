import React from 'react'
import "./cardsStyles.css";
import patient from "../../../../assets/icons/patient.svg";
import totalpatient from "../../../../assets/icons/totalpatient.svg";
import hours from "../../../../assets/icons/hours.svg";

function CardsOnTop(props) {
  return (
    <div className={props.cardStyle}>
        <div className="cardOnTopTitle">
            <p>{props.cardTitle}</p>            
        </div>
        <div className='cardOnTopIcon'>
            <img src={props.iconPath} className='cardOnTopIconImage' />
        </div>
        <div className='cardOnTopBody'>
            <p className="cardOnTopBodyContent">{props.cardBody}</p>
        </div>
    </div>
  )
}

export default CardsOnTop
