import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import SearchEmployee from '../../features/searchEmployee/searchEmployee';
import './employee.css';
import { Link } from 'react-router-dom';

const EmployeeDisplay = ({
  handleChange,
  handleSubmit,
  inputValues,
  department,
  levels,
}) => {
  return (
    <div className="employee-dashboard">
      <Header />
      <section className="employee">
        <div className="banner-section">
          <h1 className="employee-banner">Employee Data Dashboard</h1>
          <div className="routing">
            <p>Navigate to </p>
            <Link to="/dashboard/accounts">
              <button className="rout-button">Accounts Dashboard</button>
            </Link>
            <Link to="/dashboard/admin">
              <button className="rout-button">Administrator Dashboard</button>
            </Link>
          </div>
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
                    {department.map((element, index) => {
                      return (
                        <option value={element.id} key={index}>
                          {element.name}
                        </option>
                      );
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
                    {levels.map((element, index) => {
                      return (
                        <option value={element.id} key={index}>
                          {element.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="info-section">
                <div className="column">
                  <label htmlFor="snnit">SSNIT Number</label>
                  <input
                    name="snnitNum"
                    id="snnit"
                    type="number"
                    value={inputValues.snnitNum}
                    onChange={handleChange}
                    className="inputs"
                    placeholder="Enter SSNIT Number"
                    required
                  />
                </div>
              </div>
              <div className="column">
                <label>Sex</label>
              </div>
              <div className="info-section sex-section">
                <div className="column">
                  <label className="sex-group" htmlFor="male">
                    Male
                  </label>
                  <input
                    name="sex"
                    id="male"
                    type="radio"
                    value="1"
                    onChange={handleChange}
                    className="sex"
                    required
                  />
                </div>
                <div className="column">
                  <label className="sex-group" htmlFor="female">
                    Female
                  </label>
                  <input
                    name="sex"
                    id="female"
                    type="radio"
                    value="2"
                    onChange={handleChange}
                    className="sex"
                    required
                  />
                </div>

                <div className="column">
                  <label className="sex-group" htmlFor="others">
                    Other
                  </label>
                  <input
                    name="sex"
                    id="others"
                    type="radio"
                    value="3"
                    onChange={handleChange}
                    className="sex"
                    required
                  />
                </div>
              </div>
              <div className="btn">
                <button>Submit</button>
              </div>
            </div>
          </form>
          <div className='search-name'>
          <SearchEmployee />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EmployeeDisplay;
