import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "../../../../Css/Patient/Appointment.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Appointment() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Demo appointment data
  const appointmentData = {
    date: "July 15, 2024",
    time: "2:30 PM"
  };

  return (
    <div className="appointment-container">
      <Button onClick={handleOpen} variant="contained" color="primary">View Appointment</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className="modal-title">
            Appointment Details
          </Typography>
          <div className="appointment-details">
            <Typography variant="body1" className="appointment-info">
              <span className="info-label">Date:</span> {appointmentData.date}
            </Typography>
            <Typography variant="body1" className="appointment-info">
              <span className="info-label">Time:</span> {appointmentData.time}
            </Typography>
          </div>
          <Button onClick={handleClose} variant="contained" color="secondary" className="close-button">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}