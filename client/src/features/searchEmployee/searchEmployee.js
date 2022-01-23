import React, { useState, useEffect } from 'react';
import './searchEmployee.css'

const SearchEmployee = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [searchName, setSearchName] = useState('');
//   useEffect(() => {
//     fetch('http://localhost:4000/ipayroll/api/v1/employees')
//       .then(
//         response => {
//           if (response.ok) {
//             return response.json();
//           }
//           throw new Error('Request failed');
//         },
//         networkError => console.log(networkError.message)
//       )
//       .then(jsonResponse => {
//         setEmployeeData(jsonResponse);
//       });
//   }, []);
  console.log(employeeData)

  // onSearch function
  const onSearch = event => {
    setSearchName(event.target.value);
  };
  //storing filtered response
  const filteredInfo = employeeData.filter(element =>
    element.name.includes(searchName)
  );

  return (
    <div className="information">
        <form className='search-form'>
        <div className='search-employee'><h4 className='search'>Search Employee</h4></div>
      <div className="column">
                  <label htmlFor="employee-name">Enter employee name</label>
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
                <div className='search-btn'>
                <button>Search</button>
                </div>
                </form>
      {filteredInfo.map((element, index) => {
        return (
          <div className="employee-info" key={index}>
            <div className="detail-info">
              <p>{element.fname}</p>
            </div>
            <div className="detail-info">
              <p>{element.lname}</p>
            </div>
            <div className="detail-info">
              <p>{element.phoneNum}</p>
            </div>
            {/* <div className="detail-info">
              <p>{element.ssnit}</p>
            </div> */}
            <div className="detail-info">
              <p>{element.email}</p>
            </div>
            <div className="detail-info">
              <p>{element.dept}</p>
            </div>
            <div className="detail-info">
              <p>{element.ssnitNum}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SearchEmployee;
