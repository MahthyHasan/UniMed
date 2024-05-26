import React from "react";
import pause from "../../../../assets/icons/pause.svg";
import continueicon from "../../../../assets/icons/continueicon.svg";

export const Channellingactions = () => {
  return (
    <div className="channelling-container">
      <div className="channelling-card1">
        <div className="channel-text">Pause Channelling</div>
        <div className="channel-container">
          <img src={pause} className="input-label-icon" />
        </div>
      </div>
      <div className="channelling-card2">
        <div className="channel-text">Continue Channelling</div>
        <div className="channel-container">
          <img src={continueicon} className="input-label-icon" />
        </div>
      </div>
    </div>
  );
};

export default Channellingactions;
