import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "../../../../Css/Patient/PersonalDetails.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function PersonalDetails() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const onSubmit = data => {
        axios.post('http://localhost:8088/personaldetails', data)
            .then(response => {
                console.log(response.data);
                setShowSuccessMessage(true); // Show success message on submission
                reset(); // Reset form fields
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
            });
    };

    function createFormGroup(labelText, inputType, inputName, placeholder, additionalText = "") {
        return (
            <div className="form-group row">
                <label className="col-md-4 control-label">{labelText}</label>
                <div className="col-md-8 inputGroupContainer">
                    <div className="input-group">
                        <span className="input-group-addon">
                            <i className={`glyphicon glyphicon-${inputName}`}></i>
                        </span>
                        <input
                            name={inputName}
                            placeholder={placeholder}
                            className="form-control"
                            type={inputType}
                            {...register(inputName, {
                                required: `Please supply your ${labelText.toLowerCase()}`,
                                minLength: inputName === 'name' ? { value: 2, message: "Name must be at least 2 characters" } : null,
                            })}
                        />
                        {additionalText && <span className="input-group-addon">{additionalText}</span>}
                    </div>
                    {errors[inputName] && <span className="text-danger">{errors[inputName].message}</span>}
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <form className="well form-horizontal" id="personal_details_form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Personal Details</legend>
                    {createFormGroup('Full Name', 'text', 'name', 'Enter your full name')}
                    {createFormGroup('NIC Number', 'text', 'nic', 'Enter your NIC number')}
                    {createFormGroup('Enrollment Number', 'text', 'enrollmentNumber', 'Enter your enrollment number')}
                    {createFormGroup('Email', 'email', 'email', 'Enter your email')}
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
                    {createFormGroup('Age', 'number', 'age', 'Enter your age')}
                    {createFormGroup('Height', 'number', 'height', 'Enter your height', 'cm')}
                    {createFormGroup('Weight', 'number', 'weight', 'Enter your weight', 'kg')}
                    <div className="form-group row">
                        <label className="col-md-4 control-label">Blood Group</label>
                        <div className="col-md-8">
                            <select name="blood_group" className="form-control" {...register('bloodGroup', { required: 'Please select your blood group' })}>
                                <option value="">Select your blood group</option>
                                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodGroup => (
                                    <option key={bloodGroup} value={bloodGroup}>{bloodGroup}</option>
                                ))}
                            </select>
                            {errors.bloodGroup && <span className="text-danger">{errors.bloodGroup.message}</span>}
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-md-8 col-md-offset-4">
                            <button type="submit" className="btn btn-success">
                                Save <span className="glyphicon glyphicon-send"></span>
                            </button>
                        </div>
                    </div>
                </fieldset>
            </form>
            {showSuccessMessage && (
                <div id="success_message" className="alert alert-success text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#5cb85c', color: 'white', zIndex: '1000' }}>
                    Success! Your personal details have been saved.
                    <button type="button" className="close" onClick={() => setShowSuccessMessage(false)}>
                        <span>&times;</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default PersonalDetails;
