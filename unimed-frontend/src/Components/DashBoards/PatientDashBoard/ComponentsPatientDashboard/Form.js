import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import "../../../../Css/Patient/Form.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {
    const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm();
    const [minDate, setMinDate] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        setMinDate(formattedDate);
        setValue('datetime', formattedDate); // Set default date to today
    }, [setValue]);

    const onSubmit = data => {
        console.log(data);
        setShowSuccessMessage(true); // Update the state to show the success message
        reset(); // Reset the form data upon successful submission
    };

    function createFormGroup(labelText, inputType, inputName, placeholder, iconClass) {
        return (
            <div className="form-group row">
                <label className="col-md-4 control-label">{labelText}</label>
                <div className="col-md-8 inputGroupContainer">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className={iconClass}></i>
                        </span>
                        <input
                            name={inputName}
                            placeholder={placeholder}
                            className="form-control"
                            type={inputType}
                            min={inputType === 'datetime-local' ? minDate : undefined} // Set minimum date for date input
                            {...register(inputName, {
                                required: `Please supply your ${labelText.toLowerCase()}`,
                                minLength: inputName === 'name' ? { value: 2, message: "Name must be at least 2 characters" } : null,
                            })}
                        />
                    </div>
                    {errors[inputName] && <span className="text-danger">{errors[inputName].message}</span>}
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <form className="well form-horizontal" id="appointment_form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Confirm Your Appointment</legend>
                    {createFormGroup('Name', 'text', 'name', 'Enter your full name', 'glyphicon glyphicon-user')}
                    {createFormGroup('Enrollment Number', 'text', 'enrollment_number', 'Enter your enrollment number', 'glyphicon glyphicon-list-alt')}
                    <div className="form-group row">
                        <label className="col-md-4 control-label">Gender</label>
                        <div className="col-md-8">
                            {['Male', 'Female'].map(gender => (
                                <div className="radio" key={gender}>
                                    <label>
                                        <input type="radio" name="gender" value={gender.toLowerCase()} {...register('gender', { required: 'Please select your gender' })} />
                                        {' ' + gender}
                                    </label>
                                </div>
                            ))}
                            {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
                        </div>
                    </div>
                    {createFormGroup('Pick Date and Time', 'datetime-local', 'datetime', 'Select date and time', 'glyphicon glyphicon-calendar')}
                    <div className="form-group row">
                        <label className="col-md-4 control-label">Services</label>
                        <div className="col-md-8">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name="general_checkup" {...register('general_checkup')} />
                                    General Checkup
                                </label>
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" name="medical_report" {...register('medical_report')} />
                                    Request Medical Report
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-8 col-md-offset-4"> {/* Ensure buttons are aligned horizontally */}
                            <button type="submit" className="btn btn-success">
                                Confirm Appointment <span className="glyphicon glyphicon-send"></span>
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
            {showSuccessMessage && (
                <div id="success_message" className="alert alert-success text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#5cb85c', color: 'white', zIndex: '1000' }}>
                    Success! Your appointment has been confirmed.
                </div>
            )}
        </div>
    );
}

export default Form;
