import React, { useEffect } from 'react';
import "../../../../Css/Patient/Form.css";
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-validator/dist/validator.min.js';

function Form() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.jQuery = $;

            // Ensure Bootstrap and Bootstrap Validator are loaded
            window.jQuery('#appointment_form').bootstrapValidator({
                feedbackIcons: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    name: {
                        validators: {
                            stringLength: {
                                min: 2,
                            },
                            notEmpty: {
                                message: 'Please supply your name'
                            }
                        }
                    },
                    enrollment_number: {
                        validators: {
                            notEmpty: {
                                message: 'Please supply your enrollment number'
                            }
                        }
                    },
                    gender: {
                        validators: {
                            notEmpty: {
                                message: 'Please select your gender'
                            }
                        }
                    },
                    datetime: {
                        validators: {
                            notEmpty: {
                                message: 'Please select date and time'
                            }
                        }
                    }
                }
            });
        }
    }, []);

    function createFormGroup(labelText, inputType, inputName, placeholder, iconClass) {
        return (
            <div className="form-group">
                <label className="col-md-4 control-label">{labelText}</label>
                <div className="col-md-4 inputGroupContainer">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className={iconClass}></i>
                        </span>
                        <input
                            name={inputName}
                            placeholder={placeholder}
                            className="form-control"
                            type={inputType}
                        />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <form className="well form-horizontal" id="appointment_form">
                <fieldset>
                    <legend>Confirm Your Appointment</legend>
                    {createFormGroup('Name', 'text', 'name', 'Name', 'glyphicon glyphicon-user')}
                    {createFormGroup('Enrollment Number', 'text', 'enrollment_number', 'Enrollment Number', 'glyphicon glyphicon-list-alt')}
                    <div className="form-group">
                        <label className="col-md-4 control-label">Gender</label>
                        <div className="col-md-4">
                            {['Male', 'Female'].map(gender => (
                                <div className="radio" key={gender}>
                                    <label>
                                        <input type="radio" name="gender" value={gender.toLowerCase()} />
                                        {' ' + gender}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    {createFormGroup('Pick Date and Time', 'datetime-local', 'datetime', 'Pick Date and Time', 'glyphicon glyphicon-calendar')}
                    <div className="form-group">
                        <label className="col-md-4 control-label"></label>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-success">
                                Confirm Appointment <span className="glyphicon glyphicon-send"></span>
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
            <div id="success_message" className="alert alert-success" style={{ display: 'none' }}>
                Success! Your appointment has been confirmed.
            </div>
        </div>
    );
}

export default Form;
