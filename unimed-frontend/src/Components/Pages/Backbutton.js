import React from 'react'
import backIcon from "../../assets/icons2/back-buttons-multimedia-svgrepo-com.svg";

export const Backbutton = () => {
  return (
    <div>
         <div className="row align-items-center">
        <div className="col-md-6 col-md-6-left">
          <div className="container2 mb-4">
            <div className="d-flex align-items-center">
              <a
                href="/dashboard"
                className="back-button text-decoration-none fs-6 d-flex align-items-center"
              >
                <img src={backIcon} alt="Back" />
                
              </a>
            </div>
    </div>
    </div>
    </div>
    </div>
    
  );
};
