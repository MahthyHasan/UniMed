import React from 'react';
import "../../../../Css/Patient/DocAvailability.css";



const DocAvailability = ({ doctorName, isAvailable }) => {
  return (
    <div className="cardCollection">
      <div className="cardCollectiontextBox">
        <div className="cardCollectiontextContent">
          <p className="cardCollectionh1">{doctorName}</p>
          <span className="availability-status">
            {isAvailable ? (
              <span className="available-text">Available</span>
            ) : (
              <span className="not-available-text">Unavailable</span>
            )}
          </span>
          <span className="cardCollectionspan">
            <label className="cardCollectioncheckbox-container">
              <input
                type="checkbox"
                checked={isAvailable}
                className="cardCollectioncustom-checkbox"
                readOnly
              />
              <span className={`cardCollectioncheckmark ${isAvailable ? 'available' : 'not-available'}`}>
                {isAvailable ? '' : 'X'}
              </span>
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DocAvailability;


