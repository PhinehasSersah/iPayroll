import React, { useState,useEffect } from 'react';

const Department = () => {
  const initialValue = {
    name: '',
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [department, setDepartment] = useState([]);

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({[name] :value});
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
    } catch (err) {
      console.error(err.message);
    }
    setInputValues({...initialValue, [name]:''})
  };

  const getDepartment = () => {
    
  }
  return (
    <div>
      {/* <p>{JSON.stringify(inputValues)}</p> */}
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
    </div>
  );
};

export default Department;
