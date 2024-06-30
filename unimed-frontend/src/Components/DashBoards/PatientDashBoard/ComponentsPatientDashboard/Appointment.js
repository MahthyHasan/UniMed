import React, { useState } from 'react';
import "../../../../Css/Patient/Appointment.css"; // Assuming this is where your CSS file is located

function Appointment() {
    // Example state for availability status (true for available, false for unavailable)
    const [isAvailable, setIsAvailable] = useState(true);

    return (
        <div className="appointment-card-small">
            <h2>Appointment Details</h2>
            <p><strong>Date:</strong> July 15, 2024</p>
            <p><strong>Time:</strong> 10:00 AM</p>
        </div>
    );
}

export default Appointment;
