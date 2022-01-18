import React from 'react';

const Employee = () => {
  return (
    <section>
      <div className="banner-section">
        <h1 className="employee-banner">Employee Information Data</h1>
        <hr></hr>
      </div>

      <div className="employee-information">
          <h3>Add Employee</h3>
        <form className="form">
          <div className="first-info-section">
            <label for="first-name">FirstName</label>
            <input
              id="first-name"
              type="text"
              placeholder="Employee FirstName"
            ></input>
            <label for="last-name">LastName</label>
            <input
              id="last-name"
              type="text"
              placeholder="Employee Surname"
            ></input>
          </div>

          <div className="second-info-section">
            <label for="email">E-mail</label>
            <input id="email" type="email" placeholder="Email Address"></input>
            <label for="birth-date">Date of Birth</label>
            <input id="birth-date" type="date" placeholder="Birth Date"></input>
          </div>
          <div className="third-info-section">
            <label for="joining-date">Joining Date</label>
            <input
              id="joining-date"
              type="date"
              placeholder="Joining Date"
            ></input>
            <label for="telephone">Phone Number</label>
            <input
              id="telephone"
              type="tel"
              placeholder="Contact Number"
            ></input>
          </div>
          <div className="department">
            <label for="department">Add Department</label>
            <select id="department" name="department">
              <option value="" disabled selected hidden>
                Select Department
              </option>
              <option value="Service Center">Service Center</option>
              <option value="Training Center">Training Center</option>
              <option value="Operations Department">
                Operations Department
              </option>
            </select>

            <label for="salary">Rank</label>
            <select id="salary" name="salary">
              <option value="" disabled selected hidden>
                Set Rank
              </option>
              <option value="Level 1">Level 1</option>
              <option value="Level 2">Level 2</option>
              <option value="Level 3">Level 3</option>
            </select>
          </div>
          <input type='submit'>Submit</input>
        </form>
      </div>
    </section>
  );
};

export default Employee;
