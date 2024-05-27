import React from 'react'

import "./usercards.css"

function UserCards({icon,text, cssclass}) {
  return (
    <div className={cssclass}>
        <img src={icon} alt={title} className="icon" />
        <p className='text'>{text}</p>      
    </div>
  )
}

export default UserCards
