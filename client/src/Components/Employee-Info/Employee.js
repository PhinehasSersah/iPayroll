import React, { useState } from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import './employee.css';

const Employee = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    joinDate: '',
    phoneNumber: '',
    department: '',
    level: '',
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
    try {
      setInputErrors(validateInput(inputValues));
      // setSubmit(true);
    } catch (err) {
      console.error(err.message);
    }
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
    // console.log(dateFormat);
    if (!values.firstName) {
      errors.firstName = 'Firstname is required';
    }
    //lastname
    if (!values.lastName) {
      errors.lastName = 'Lastname is required';
    }
    //email
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'Invalid email format';
    }
    //birthdate
    if (year >= thisYear) {
      errors.birthDate = 'Birth year must be 10 less years';
    } else if (!values.birthDate) {
      errors.birthDate = 'Date of birth is required';
    }
    //joinDate
    if (!values.joinDate) {
      errors.joinDate = 'Start date is required';
    } else if (values.joinDate < dateFormat) {
      errors.joinDate = 'Join date cannot be less than today';
    }
    //phoneNumber
    if (!values.phoneNumber) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!phoneNumberRegex.test(values.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number';
    }
    //department
    if (!values.department) {
      errors.department = 'Employee department is required';
    }
    //rank
    if (!values.level) {
      errors.level = 'Employee level is required';
    }
    return errors;
  };
  return (
    <div>
      <Header />
      <section className="employee">
        <div className="banner-section">
          <h1 className="employee-banner">Employee Information Data</h1>
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
                  <p>{inputErrors.firstName}</p>
                  <input
                    name="firstName"
                    id="firstName"
                    type="text"
                    placeholder="Employee FirstName"
                    value={inputValues.firstName}
                    onChange={handleChange}
                    className="inputs"
                  />
                </div>
                <div className="column">
                  <label htmlFor="lastName">LastName</label>
                  <p>{inputErrors.lastName}</p>
                  <input
                    name="lastName"
                    id="lastName"
                    type="text"
                    placeholder="Employee Surname"
                    value={inputValues.lastName}
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
                  <p>{inputErrors.birthDate}</p>
                  <input
                    name="birthDate"
                    id="birthDate"
                    type="date"
                    placeholder="Birth Date"
                    value={inputValues.birthDate}
                    onChange={handleChange}
                    className="inputs"
                  />
                </div>
                <div className="column">
                  <label htmlFor="sex">Male</label>
                  <p>{inputErrors.sex}</p>
                  <input
                    name="birthDate"
                    id="birthDate"
                    type="radio"
                    // placeholder="Birth Date"
                    value={inputValues.male}
                    onChange={handleChange}
                    className="inputs"
                  />
                </div>
              </div>
              <div className="info-section">
                <div className="column">
                  <label htmlFor="joinDate">Joining Date</label>
                  <p>{inputErrors.joinDate}</p>
                  <input
                    name="joinDate"
                    id="joinDate"
                    type="date"
                    placeholder="Joining Date"
                    value={inputValues.joinDate}
                    onChange={handleChange}
                    className="inputs"
                  />
                </div>
                <div className="column">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <p>{inputErrors.phoneNumber}</p>
                  <input
                    name="phoneNumber"
                    id="phoneNumber"
                    type="tel"
                    value={inputValues.phoneNumber}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>
              <div className="info-section">
                <div className="column">
                  <label htmlFor="department">Add Department</label>
                  <p>{inputErrors.department}</p>
                  <select
                    id="department"
                    name="department"
                    value={inputValues.department}
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
                  <label htmlFor="rank">Level</label>
                  <p>{inputErrors.level}</p>
                  <select
                    id="rank"
                    name="rank"
                    value={inputValues.level}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Select employee level"
                  >
                    <option value="" hidden>
                      Set Level
                    </option>
                    <option value="Level 1">Level 1</option>
                    <option value="Level 2">Level 2</option>
                    <option value="Level 3">Level 3</option>
                  </select>
                </div>
              </div>
              <div className="btn">
                <button>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Employee;
