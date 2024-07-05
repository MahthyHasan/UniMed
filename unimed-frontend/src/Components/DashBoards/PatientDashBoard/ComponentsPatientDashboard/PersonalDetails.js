import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
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

    return (
        <div className="container">
            <form className="well form-horizontal" id="personal_details_form" onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Personal Details</legend>
                    <div className="form-group row">
                        <label className="col-md-4 control-label">NIC</label>
                        <div className="col-md-8 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-credit-card"></i>
                                </span>
                                <input
                                    name="nic"
                                    placeholder="Enter your NIC number"
                                    className="form-control"
                                    type="text"
                                    {...register('nic', {
                                        required: 'Please supply your NIC number',
                                    })}
                                />
                            </div>
                            {errors.nic && <span className="text-danger">{errors.nic.message}</span>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-4 control-label">Age</label>
                        <div className="col-md-8 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input
                                    name="age"
                                    placeholder="Enter your age"
                                    className="form-control"
                                    type="number"
                                    {...register('age', {
                                        required: 'Please supply your age',
                                    })}
                                />
                            </div>
                            {errors.age && <span className="text-danger">{errors.age.message}</span>}
                        </div>
                    </div>

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

                    <div className="form-group row">
                        <label className="col-md-4 control-label">Height (cm)</label>
                        <div className="col-md-8 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input
                                    name="height"
                                    placeholder="Enter your height in cm"
                                    className="form-control"
                                    type="number"
                                    {...register('height', {
                                        required: 'Please supply your height',
                                    })}
                                />
                            </div>
                            {errors.height && <span className="text-danger">{errors.height.message}</span>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-4 control-label">Weight (kg)</label>
                        <div className="col-md-8 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-user"></i>
                                </span>
                                <input
                                    name="weight"
                                    placeholder="Enter your weight in kg"
                                    className="form-control"
                                    type="number"
                                    {...register('weight', {
                                        required: 'Please supply your weight',
                                    })}
                                />
                            </div>
                            {errors.weight && <span className="text-danger">{errors.weight.message}</span>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-4 control-label">Blood Group</label>
                        <div className="col-md-8">
                            <select name="bloodGroup" className="form-control" {...register('bloodGroup', { required: 'Please select your blood group' })}>
                                <option value="">Select your blood group</option>
                                {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(bloodGroup => (
                                    <option key={bloodGroup} value={bloodGroup}>{bloodGroup}</option>
                                ))}
                            </select>
                            {errors.bloodGroup && <span className="text-danger">{errors.bloodGroup.message}</span>}
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-md-4 control-label">Phone Number</label>
                        <div className="col-md-8 inputGroupContainer">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="glyphicon glyphicon-earphone"></i>
                                </span>
                                <input
                                    name="phoneNo"
                                    placeholder="Enter your phone number"
                                    className="form-control"
                                    type="text"
                                    {...register('phoneNo', {
                                        required: 'Please supply your phone number',
                                    })}
                                />
                            </div>
                            {errors.phoneNo && <span className="text-danger">{errors.phoneNo.message}</span>}
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
