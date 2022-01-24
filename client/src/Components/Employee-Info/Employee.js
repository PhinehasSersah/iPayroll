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
    snnitNum:''
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [department, setDepartment] = useState([]);
  const [levels, setLevels] = useState([]);

  // handleChange function
  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  // fetching department
  useEffect(() => {
    fetch('http://localhost:4000/ipayroll/api/v1/departments')
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed');
        },
        networkError => console.log(networkError.message)
      )
      .then(jsonResponse => {
        setDepartment(jsonResponse);
      });
  }, []);

  //fetching levels
  useEffect(() => {
    fetch('http://localhost:4000/ipayroll/api/v1/levels')
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed');
        },
        networkError => console.log(networkError.message)
      )
      .then(jsonResponse => {
        setLevels(jsonResponse);
      });
  }, []);


 // handle submit function
  const handleSubmit = async event => {
    event.preventDefault();
    const { name } = event.target;
    try {
      await fetch('http://localhost:4000/ipayroll/api/v1/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValues),
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
    setInputValues({ ...initialValue, [name]: '' });
  };

  return (
    <div>
      <Header />
      <section className="employee">
        <div className="banner-section">
          <h1 className="employee-banner">Employee Data Dashboard</h1>
         
          <hr className="employeehr"></hr>
        </div>

        <div className="employee-information">
          <form className="form" onSubmit={handleSubmit}>
            <h4>Add New Employee</h4>
            <div className="employee-data">
              <div className="info-section">
                <div className="column">
                  <label className="emp-label" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    name="fname"
                    id="firstName"
                    type="text"
                    placeholder="Employee FirstName"
                    value={inputValues.fname}
                    onChange={handleChange}
                    className="inputs"
                    required
                  />
                </div>
                <div className="column">
                  <label htmlFor="lastNlnameame">Last Name</label>
                  <input
                    name="lname"
                    id="lastName"
                    type="text"
                    placeholder="Employee Surname"
                    value={inputValues.lname}
                    onChange={handleChange}
                    className="inputs"
                    required
                  />
                </div>
              </div>

              <div className="info-section">
                <div className="column">
                  <label htmlFor="email">E-mail</label>
                  <input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    value={inputValues.email}
                    onChange={handleChange}
                    className="inputs"
                    required
                  />
                </div>
                <div className="column">
                  <label htmlFor="birthDate">Date of Birth</label>
                  <input
                    name="dob"
                    id="birthDate"
                    type="date"
                    placeholder="Birth Date"
                    value={inputValues.dob}
                    onChange={handleChange}
                    className="inputs"
                    required
                  />
                </div>
              </div>
              <div className='column'>
              <label >Sex</label>
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
                    required
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
                    required
                  />
                </div>

                <div className="column">
                  <label className='sex-group' htmlFor="others">Other</label>
                  <input
                    name="sex"
                    id="others"
                    type="radio"
                    value='3'
                    onChange={handleChange}
                    className="sex"
                    required
                  />
                </div>
              </div>
              <div className="info-section">
                <div className="column">
                  <label htmlFor="joinDate">Joining Date</label>
                  <input
                    name="startDate"
                    id="joinDate"
                    type="date"
                    placeholder="Joining Date"
                    value={inputValues.startDate}
                    onChange={handleChange}
                    className="inputs"
                    required
                  />
                </div>
                <div className="column">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    name="phoneNum"
                    id="phoneNumber"
                    type="tel"
                    value={inputValues.phoneNum}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Enter Mobile Number"
                    required
                  />
                </div>
              </div>
              <div className="info-section">
                <div className="column">
                  <label htmlFor="department">Add Department</label>
                  <select
                    id="department"
                    name="dept"
                    value={inputValues.dept}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Select employee department"
                    required
                  >
                    <option value="" hidden>
                      Select Department
                    </option>
                    {department.map((element, index)=> {
                      return(
                        <option value={element.id} key={index}>{element.name}</option>
                      )
                    })}
                  </select>
                </div>
                <div className="column">
                  <label htmlFor="level">Level</label>
                  <select
                    id="level"
                    name="level"
                    value={inputValues.level}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Select employee level"
                    required
                  >
                    <option value="" hidden>
                      Set Level
                    </option>
                    {levels.map((element, index)=> {
                      return(
                        <option value={element.id} key={index}>{element.name}</option>
                      )
                    })}
                  </select>

                </div>
              </div>
              <div className='info-section'>
              <div className="column">
                  <label htmlFor="snnit">SSNIT Number</label>
                  <input
                    name="snnitNum"
                    id="snnit"
                    type="tel"
                    value={inputValues.snnitNum}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Enter Mobile Number"
                    required
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
