import React from "react";

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
            <label htmlFor="first-name">FirstName</label>
            <input
              name="first-name"
              id="first-name"
              type="text"
              placeholder="Employee FirstName"
            />
            <label htmlFor="last-name">LastName</label>
            <input
              name="last-name"
              id="last-name"
              type="text"
              placeholder="Employee Surname"
            />
          </div>

          <div className="second-info-section">
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email Address"
            />
            <label htmlFor="birth-date">Date of Birth</label>
            <input
              name="birth-date"
              id="birth-date"
              type="date"
              placeholder="Birth Date"
            />
          </div>
          <div className="third-info-section">
            <label htmlFor="joining-date">Joining Date</label>
            <input
              name="joining-date"
              id="joining-date"
              type="date"
              placeholder="Joining Date"
            />
            <label htmlFor="telephone">Phone Number</label>
            <input id="telephone" type="tel" placeholder="Contact Number" />
          </div>
          <div className="department">
            <label htmlFor="department">Add Department</label>
            <select id="department" name="department" defaultValue='Select Department'>
              <option value="" hidden>
                Select Department
              </option>
              <option value="Service Center">Service Center</option>
              <option value="Training Center">Training Center</option>
              <option value="Operations Department">
                Operations Department
              </option>
            </select>

            <label htmlFor="salary">Rank</label>
            <select id="salary" name="salary" defaultValue='Set Rank'>
              <option disabled hidden>
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