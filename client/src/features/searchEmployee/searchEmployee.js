import React, {useState} from 'react';
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
    window.location = '/';
  }
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
        <div className="display-box">
          <div className="label">
            <p>First Name :</p>
            <div className="detail-info">
              <p className="fetch-data">{employeeData.firstname}</p>
            </div>
          </div>

          <div className="label">
            <p>Last Name :</p>
            <div className="detail-info">
              <p>{employeeData.lastname}</p>
            </div>
          </div>

          <div className="label">
            <p>Phone Number :</p>
            <div className="detail-info">
              <p>{employeeData.phone_number}</p>
            </div>
          </div>

          <div className="label">
            <p>SSNIT Number :</p>
            <div className="detail-info">
              <p>{employeeData.snnit_number}</p>
            </div>
          </div>

          <div className="label">
            <p>Email :</p>
            <div className="detail-info">
              <p>{employeeData.email}</p>
            </div>
          </div>
          {console.log(employeeData)}
          <div className="label">
            <p>Start Date :</p>
            <div className="detail-info">
              <p>{employeeData.start_work_date}</p>
            </div>
          </div>
          <div className='search-delete'>
          <button onClick={()=> {
            handleDelete(employeeData.id)}}>Delete Data</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchEmployee;
