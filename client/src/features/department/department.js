import React, { useState, useEffect } from 'react';

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
    const { name } = event.target;
    event.preventDefault();
    try {
      await fetch('http://localhost:4000/ipayroll/api/v1/departments', {
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
    window.location = '/';
  };
  return (
    <div>
      <h3>Create New Department</h3>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Create Department</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter Department Name"
          onChange={handleChange}
          value={inputValues.name}
        />
        <button>Create</button>
      </form>
      <div>
        {department.map((section, index) => {
          return (
            <div key={section.id}>
              <li>{section.name}</li>
              <button
                onClick={() => {
                  deleteDepartment(section.id);
                }}
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
