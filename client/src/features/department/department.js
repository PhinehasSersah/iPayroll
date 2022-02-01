import React, { useState, useEffect } from 'react';
import './department.css';

const Department = () => {
  const initialValue = {
    name: '',
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [department, setDepartment] = useState([]);

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ [name]: value });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const { name } = event.target;
    fetch('http://localhost:4000/ipayroll/api/v1/departments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputValues),
    })
      .then(res => res.json())
      .then(jsonRes => console.log(jsonRes));
    // window.location = '/dashboard/admin';

    setInputValues({ ...initialValue, [name]: '' });
  };

  console.log(inputValues);
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

  const deleteDepartment = id => {
    fetch('http://localhost:4000/ipayroll/api/v1/departments/' + id, {
      method: 'DELETE',
    });
    window.location = '/dashboard/admin';
  };
  return (
    <div className="department-section">
      <h4>Create New Department</h4>
      <div className="department-div">
        <form className="department-form" onSubmit={e => handleSubmit(e)}>
          <label className="department" htmlFor="name">
            Department
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter Department"
            onChange={handleChange}
            value={inputValues.name}
            className="set-department"
          />
          <button className="department-btn">Create</button>
        </form>
      </div>
      <div className="levels">
        {department.map((section, index) => {
          return (
            <div className="rendered-levels" key={section.id}>
              <div className="left">
                <li>{section.name}</li>
              </div>
              <button
                type="button"
                onClick={() => {
                  deleteDepartment(section.id);
                }}
                className="rendered-btn"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Department;
