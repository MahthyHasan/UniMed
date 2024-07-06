import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import 'dayschedule-widget/dist/dayschedule-popup.css';
import 'dayschedule-widget/dist/dayschedule-widget.js';

export default class DayScheduleButton extends React.Component {
  handleClick = () => {
    if (window.daySchedule) {
      window.daySchedule.initPopupWidget({ url: 'https://meet.dayschedule.com' });
    } else {
      console.error("daySchedule is not defined");
    }
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className="btn btn-primary btn-lg my-3"
      >
        <FontAwesomeIcon icon={faCalendar} style={{ marginRight: '10px' }} />
        Book an Appointment
      </button>
    );
  }
}