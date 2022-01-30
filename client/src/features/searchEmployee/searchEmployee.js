import React, { useState } from 'react';
import moment from 'moment';
import './searchEmployee.css';

const SearchEmployee = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchName, setSearchName] = useState('');

  // onSearch function
  const handleSubmit = async event => {
    event.preventDefault();
    fetch(
      'http://localhost:4000/ipayroll/api/v1/employees/search/' + searchName
    )
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
        setEmployeeData(jsonResponse);
      });
  };
  //seach handler
  const onSearch = event => {
    setSearchName(event.target.value);
  };
  //delete handler
  const handleDelete = id => {
    fetch('http://localhost:4000/ipayroll/api/v1/employees/' + id, {
      method: 'DELETE',
    });
    window.location = '/dashboard/hr';
  };
// console.log(employeeData)
  return (
    <div className="information">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-employee">
          <h4 className="search">Search Employee</h4>
        </div>
        <div className="column">
          <label htmlFor="employee-name">Enter Employee Fullname</label>
          <input
            type="text"
            id="employee-name"
            name="employee-name"
            placeholder=" Enter employee name"
            min="0"
            value={searchName}
            onChange={onSearch}
            className="input"
          />
        </div>
        <div className="search-btn">
          <button>Search</button>
        </div>
      </form>

      <div className="employee-info">
        <div className="label">
          <p>First Name :</p>
          <p>{employeeData.firstname}</p>
        </div>

        <div className="label">
          <p>Last Name :</p>

          <p>{employeeData.lastname}</p>
        </div>

        <div className="label">
          <p>Phone Number :</p>

          <p>{employeeData.phone_number}</p>
        </div>

        <div className="label">
          <p>SSNIT Number :</p>

          <p>{employeeData.snnit_number}</p>
        </div>

        <div className="label">
          <p>Email :</p>

          <p>{employeeData.email}</p>
        </div>
        <div className="label">
          <p>Start Date :</p>
          <p>{moment(employeeData.start_work_date).format('YYYY-MM-DD')}</p>

          {/* <p>{employeeData.start_work_date}</p> */}
        </div>
        <div className="search-delete">
          <button
            onClick={() => {
              handleDelete(employeeData.id);
            }}
          >
            Delete Data
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchEmployee;
