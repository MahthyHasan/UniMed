import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
// import { deleteAppointment, viewAppointment } from '../ComponentsPatientDashboard/AppointmentsActions'; // Updated import path
import ViewAppointment from './ViewAppointment';
const myStyles = {
    fontSize: '15px',
    textAlign: 'center',
    color: "#669509",
    backgroundColor: "red"
}

class AppointmentList extends Component {
    onDeleteAppointment = (appointmentId) => {
        this.props.deleteAppointment(appointmentId);
    }

    onViewAppointment = (appointment) => {
        this.props.viewAppointment(appointment);
    }

    renderAppointment = (appointment) => {
        let startTime = moment.unix(appointment.startTime).format('MMMM Do, YYYY (hh:mm a)');
        let endTime = moment.unix(appointment.endTime).format('MMMM Do, YYYY (hh:mm a)');
        let name = appointment.name;
        let phone = appointment.phone;
        return (
            <div style={myStyles}>
                <li key={appointment.id} className="list-group-item">
                    <strong>Starting Time: </strong>
                    <span>{startTime}</span>
                    <span> - </span>
                    <strong>Ending Time: </strong>
                    <span>{endTime}</span>
                    <span>{'\n'} </span>
                    <strong>Name: </strong>
                    <span>{name}</span>
                    <span> </span>
                    <strong>Phone: </strong>
                    <span>{phone}</span>
                    <button onClick={() => this.onDeleteAppointment(appointment.id)} className="btn btn-sm btn-warning float-right">Delete</button>
                    <button onClick={() => this.onViewAppointment(appointment)} className="btn btn-sm btn-info float-right">View</button>
                </li>
            </div>
        );
    }

    render() {
        return (
            <ul className="list-group">
                {this.props.appointments.map(this.renderAppointment)}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appointments: state.appointments.items
    }
};

export default connect(mapStateToProps, {
    ViewAppointment
})(AppointmentList);
