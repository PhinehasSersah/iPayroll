import React, { useState, useEffect } from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import SearchEmployee from '../../features/searchEmployee/searchEmployee';
import './employee.css';

const Employee = () => {
  const initialValue = {
    fname: '',
    lname: '',
    email: '',
    dob: '',
    startDate: '',
    phoneNum: '',
    dept: '',
    level: '',
    sex: '',
    ssnitNum:''
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [inputErrors, setInputErrors] = useState({});
  
  // const [submit, setSubmit] = useState(false);

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const { name } = event.target;
    // setInputErrors(validateInput(inputValues));
    try {
      await fetch('http://localhost:4000/ipayroll/api/v1/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValues),
      });
      window.location = '/';
      
      // setSubmit(true);
    } catch (err) {
      console.error(err.message);
    }
    setInputValues({ ...initialValue, [name]: '' });
  };

  const validateInput = values => {
    const errors = {};
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const phoneNumberRegex =
      /^\+?\(?(([2][3][3])|[0])?\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{4}?$/;
    const birthdateSplit = values.birthDate.split('-');
    const year = birthdateSplit[0];
    let date = new Date();
    let thisYear = date.getFullYear() - 10;
    let dateFormat = date.toISOString().split('T')[0];
    if (!values.fname) {
      errors.fname = 'Firstname is required';
    }
    //lastname
    if (!values.lname) {
      errors.lname = 'Lastname is required';
    }
    //email
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email format';
    }
    //birthdate
    if (year >= thisYear) {
      errors.dob = 'Birth year must be 10 less years';
    } else if (!values.dob) {
      errors.dob = 'Date of birth is required';
    }
    //joinDate
    if (!values.startDate) {
      errors.startDate = 'Start date is required';
    } else if (values.startDate < dateFormat) {
      errors.startDate = 'Join date cannot be less than today';
    }
    //phoneNumber
    if (!values.phoneNum) {
      errors.phoneNum = 'Phone number is required';
    } else if (!phoneNumberRegex.test(values.phoneNum)) {
      errors.phoneNum = 'Invalid phone number';
    }
    //department
    if (!values.dept) {
      errors.dept = 'Employee department is required';
    }
    //level
    if (!values.level) {
      errors.level = 'Employee level is required';
    }
    // sex
    if (!values.sex) {
      errors.sex = 'Sex is required';
    }
    // ssnit
    if (!values.ssnitNum) {
      errors.ssnitNum= 'SSNIT number is required';
    }
    return errors;
  };
  console.log(inputValues)
  return (
    <div>
      <Header />
    <p>{JSON.stringify(inputValues)}</p>
      <section className="employee">
        <div className="banner-section">
          <h1 className="employee-banner">Employee Information Data</h1>
          <p>{JSON.stringify(inputValues)}</p>
          <hr className="employeehr"></hr>
        </div>

        <div className="employee-information">
          <form className="form" onSubmit={handleSubmit}>
            <h4>Add New Employee</h4>
            <div className="employee-data">
              <div className="info-section">
                <div className="column">
                  <label className="emp-label" htmlFor="firstName">
                    FirstName
                  </label>
                  <p>{inputErrors.fname}</p>
                  <input
                    name="fname"
                    id="firstName"
                    type="text"
                    placeholder="Employee FirstName"
                    value={inputValues.fname}
                    onChange={handleChange}
                    className="inputs"
                  />
                </div>
                <div className="column">
                  <label htmlFor="lastNlnameame"></label>
                  <p>{inputErrors.lname}</p>
                  <input
                    name="lname"
                    id="lastName"
                    type="text"
                    placeholder="Employee Surname"
                    value={inputValues.lname}
                    onChange={handleChange}
                    className="inputs"
                  />
                </div>
              </div>

              <div className="info-section">
                <div className="column">
                  <label htmlFor="email">E-mail</label>
                  <p>{inputErrors.email}</p>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={inputValues.email}
                    onChange={handleChange}
                    className="inputs"
                  />
                </div>
                <div className="column">
                  <label htmlFor="birthDate">Date of Birth</label>
                  <p>{inputErrors.dob}</p>
                  <input
                    name="dob"
                    id="birthDate"
                    type="date"
                    placeholder="Birth Date"
                    value={inputValues.dob}
                    onChange={handleChange}
                    className="inputs"
                  />
                </div>
              </div>
              <div className='column'>
              <label >Sex</label>
              <p className='sex-error'>{inputErrors.sex}</p>
              </div>
              <div className='info-section sex-section'>
              <div className="column">
                  <label className='sex-group' htmlFor="male">Male</label>
                  <input
                    name="sex"
                    id="male"
                    type="radio"
                    value='1'
                    onChange={handleChange}
                    className="sex"
                  />
                </div>
                <div className="column">
                  <label className='sex-group' htmlFor="female">Female</label>
                  <input
                    name="sex"
                    id="female"
                    type="radio"
                    value='2'
                    onChange={handleChange}
                    className="sex"
                  />
                </div>
              </div>
              <div className="info-section">
                <div className="column">
                  <label htmlFor="joinDate">Joining Date</label>
                  <p>{inputErrors.startDate}</p>
                  <input
                    name="startDate"
                    id="joinDate"
                    type="date"
                    placeholder="Joining Date"
                    value={inputValues.startDate}
                    onChange={handleChange}
                    className="inputs"
                  />
                </div>
                <div className="column">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <p>{inputErrors.phoneNum}</p>
                  <input
                    name="phoneNum"
                    id="phoneNumber"
                    type="tel"
                    value={inputValues.phoneNum}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>
              <div className="info-section">
                <div className="column">
                  <label htmlFor="department">Add Department</label>
                  <p>{inputErrors.dept}</p>
                  <select
                    id="department"
                    name="dept"
                    value={inputValues.dept}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Select employee department"
                  >
                    <option value="" hidden>
                      Select Department
                    </option>
                    <option value="Service Center">Service Center</option>
                    <option value="Training Center">Training Center</option>
                    <option value="Operations Department">
                      Operations Department
                    </option>
                  </select>
                </div>
                <div className="column">
                  <label htmlFor="level">Level</label>
                  <p>{inputErrors.level}</p>
                  <select
                    id="level"
                    name="level"
                    value={inputValues.level}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Select employee level"
                  >
                    <option value="" hidden>
                      Set Level
                    </option>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                  </select>
                </div>
              </div>
              <div className='info-section'>
              <div className="column">
                  <label htmlFor="ssnit">SSNIT Number</label>
                  <p>{inputErrors.ssnitNum}</p>
                  <input
                    name="ssnitNum"
                    id="ssnit"
                    type="tel"
                    value={inputValues.ssnitNum}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>
              <div className="btn">
                <button>Submit</button>
              </div>
            </div>
          </form>
          <SearchEmployee />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Employee;
