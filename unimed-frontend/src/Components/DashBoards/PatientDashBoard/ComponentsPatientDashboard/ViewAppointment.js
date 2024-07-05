import React from 'react';
import moment from 'moment';

const ViewAppointment = ({ appointment }) => {
    if (!appointment) {
        return <div>Select an appointment to view details.</div>;
    }

    let startTime = moment.unix(appointment.startTime).format('MMMM Do, YYYY (hh:mm a)');
    let endTime = moment.unix(appointment.endTime).format('MMMM Do, YYYY (hh:mm a)');
    let name = appointment.name;
    let phone = appointment.phone;

    return (
        <div className="modal fade" id="view-appointment-model" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">View Appointment</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label>Starting Time</label>
                                        <input readOnly type="text" className="form-control" value={startTime} />
                                    </div>
                                    <div className="form-group">
                                        <label>Ending Time</label>
                                        <input readOnly type="text" className="form-control" value={endTime} />
                                    </div>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input readOnly type="text" className="form-control" value={name} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input readOnly type="text" className="form-control" value={phone} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAppointment;
