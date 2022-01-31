import React, { useState } from 'react';
import './login.css';
import amalitech from '../../amalitech.png';

const Login = () => {
  const initialValue = {
    username: '',
    password: '',
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [inputErrors, setInputErrors] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setInputErrors(validateInput(inputValues));
      // setSubmit(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  const validateInput = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username is required';
    }
    //lastname
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 4) {
      errors.password = 'Password length must be more than 4 characters';
    } else if (values.password.length > 10) {
      errors.password = 'Password length cannot exceed 10 characters';
    }

    return errors;
  };
  return (
    <div className='landing-page'>
    <div className="login-page container">
      <div className="row logo-banner">
        <img src={amalitech} alt="company logo" />
        <h1>
          Welcome to <strong>i</strong>Payroll
        </h1>
        <i className="far fa-user"></i>
      </div>
      <br></br>
      <div className="row form-div">
        <form onSubmit={handleSubmit} className="form">
         
            <div className='wrapper'>
          <p>{inputErrors.username}</p>
          <label htmlFor="username">User Name</label>
          <input
            name="username"
            id="username"
            type="text"
            placeholder="Enter User Name"
            value={inputValues.username}
            onChange={handleChange}
            className="username"
          />
          </div>
          <div className='wrapper'>
          <p>{inputErrors.password}</p>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter Password"
            value={inputValues.password}
            onChange={handleChange}
            className="password"
          />
          </div>
          <button>LOGIN</button>
        </form>
      </div>
    </div>
    <div className='curve-container'>
      <div className='first'></div>
      <div className='second'></div>
      <div className='third'></div>
      <div className='fourth'></div>
      <div className='fifth'></div>
      <div className='six'></div>
      <div className='seven'></div>
      <div className='eigth'></div>
      <div className='nine'></div>
      <div className='ten'></div>
    </div>
    <div className='border'>
      <p><strong>i</strong>Payroll is an automated Payroll Management System with a user-friendly GUI based software which facilitates productivity.
      It is the go-to application for any small-medium scale organisation.
      <br></br>
      This software simplifies the entire management of employees, replacing manual, error-prone and time consuming management. </p>
    </div>
    </div>
  );
};

export default Login;
