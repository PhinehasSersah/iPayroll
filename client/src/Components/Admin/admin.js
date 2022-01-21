import React, { useState, useEffect } from 'react';

const Admin = () => {
  const initialValue = {
    levelId: '',
    salary: '',
    loanDeduction: '',
    incomeTax: '',
    tierOne: '',
    tierTwo:'',
    taxRelief: '',
    bonus: ''
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [levelData, setLevelData] = useState([]);
  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const { name } = event.target;
    try {
      await fetch('http://localhost:4000/ipayroll/api/v1/rates', {
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
        setLevelData(jsonResponse);
      });
  }, []);

console.log(levelData)
  return (
    <section>
      <p>{JSON.stringify(inputValues)}</p>
      <div className="admin-banner">
        <h1>Administrative Data Management</h1>
        <hr></hr>
      </div>

      <div className="data-table">
        <form onSubmit={handleSubmit}>
          <br></br>
          <div>
            <h4>Salary Management</h4>
          </div>
          <label htmlFor="levelId">Select Rank</label>
          <select
            id="levelId"
            name="levelId"
            value={inputValues.levelId}
            onChange={handleChange}
          >
            <option disabled hidden>
              Set Level
            </option>
            {levelData.map((element, index) => {
              return (
                <option key={index}>{element.id}</option>
              )
            })}
          </select>
          <label htmlFor="salary">Set Basic Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            placeholder="Enter Amount"
            min="0"
            value={inputValues.salary}
            onChange={handleChange}
          />
          <div>
            <br></br>
            <div>
              <h4>Rate Management</h4>
            </div>
            <label htmlFor="incomeTax">Set Income Tax Rate</label>
            <input
              type="number"
              id="incomeTax"
              name="incomeTax"
              placeholder="Set rate in %"
              min="0"
              max="100"
              value={inputValues.incomeTax}
              onChange={handleChange}
            />
             <label htmlFor="loanDeduction">Loan Deduction Rate</label>
            <input
              type="number"
              id="loanDeduction"
              name="loanDeduction"
              placeholder="Set rate in percentage"
              min="0"
              max="100"
              value={inputValues.loanDeduction}
              onChange={handleChange}
            />


            
          </div>
          <div>
           
            <label htmlFor="tierOne">Set SSNIT Tier 1 Rate</label>
            <input
              type="number"
              id="tierOne"
              name="tierOne"
              placeholder="Set rate in percentage"
              min="0"
              max="100"
              value={inputValues.tierOne}
              onChange={handleChange}
            />
            <label htmlFor="tierTwo">Set SSNIT Tier 2 Rate</label>
            <input
              type="number"
              id="tierTwo"
              name="tierTwo"
              placeholder="Set rate in percentage"
              min="0"
              max="100"
              value={inputValues.tierTwo}
              onChange={handleChange}
            />
          </div>
          <div>
            
            <label htmlFor="taxRelief">Tax Relief Rate</label>
            <input
              type="number"
              id="taxRelief"
              name="taxRelief"
              placeholder="Set rate in %"
              min="0"
              max="100"
              value={inputValues.taxRelief}
              onChange={handleChange}
            />
            <label htmlFor="bonus">Set Bonus Rate</label>
            <input
              type="number"
              id="bonus"
              name="bonus"
              placeholder="Set bonus rate"
              min="0"
              value={inputValues.bonus}
              onChange={handleChange}
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
