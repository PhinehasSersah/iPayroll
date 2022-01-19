import React, { useState} from 'react';

const Employee = () => {
  const initialValue = {
    firstName: '',
    lastName: '',
    email: '',
    birthDate: '',
    joinDate: '',
    phoneNumber: '',
    department: '',
    rank: '',
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
    const phoneNumberRegex = /^\+?\(?(([2][3][3])|[0])?\)?[-.\s]?\d{2}[-.\s]?\d{3}[-.\s]?\d{4}?$/
    const birthdateSplit = values.birthDate.split('-');
    const year = birthdateSplit[0];
    let date = new Date();
    let thisYear = date.getFullYear()-10;
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
    } else if(values.joinDate<dateFormat) {
      errors.joinDate = 'Join date cannot be less than today'
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
    if (!values.rank) {
      errors.rank = 'Employee rank is required';
    }
    return errors;
  };
  return (
    
    <section>
      <div className="banner-section">
        <h1 className="employee-banner">Employee Information Data</h1>
        <hr></hr>
      </div>

      <div className="employee-information">
        <h3>Add Employee</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="first-info-section">
            <p>{inputErrors.firstName}</p>
            <label htmlFor="firstName">FirstName</label>
            <input
              name="firstName"
              id="firstName"
              type="text"
              placeholder="Employee FirstName"
              value={inputValues.firstName}
              onChange={handleChange}
            />
            <p>{inputErrors.lastName}</p>
            <label htmlFor="lastName">LastName</label>
            <input
              name="lastName"
              id="lastName"
              type="text"
              placeholder="Employee Surname"
              value={inputValues.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="second-info-section">
            <p>{inputErrors.email}</p>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email Address"
              value={inputValues.email}
              onChange={handleChange}
            />
            <p>{inputErrors.birthDate}</p>
            <label htmlFor="birthDate">Date of Birth</label>
            <input
              name="birthDate"
              id="birthDate"
              type="date"
              placeholder="Birth Date"
              value={inputValues.birthDate}
              onChange={handleChange}
            />
          </div>
          <div className="third-info-section">
            <p>{inputErrors.joinDate}</p>
            <label htmlFor="joinDate">Joining Date</label>
            <input
              name="joinDate"
              id="joinDate"
              type="date"
              placeholder="Joining Date"
              value={inputValues.joindate}
              onChange={handleChange}
            />
            <p>{inputErrors.phoneNumber}</p>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              name="phoneNumber"
              id="phoneNumber"
              type="tel"
              value={inputValues.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="department">
            <p>{inputErrors.department}</p>
            <label htmlFor="department">Add Department</label>
            <select
              id="department"
              name="department"
              value={inputValues.department}
              onChange={handleChange}
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
            <p>{inputErrors.rank}</p>
            <label htmlFor="rank">Rank</label>
            <select
              id="rank"
              name="rank"
              // defaultValue="Set Rank"
              value={inputValues.rank}
              onChange={handleChange}
            >
              <option value="" hidden>
                Set Rank
              </option>
              <option value="Level 1">Level 1</option>
              <option value="Level 2">Level 2</option>
              <option value="Level 3">Level 3</option>
            </select>
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </section>
  );
};

export default Employee;
