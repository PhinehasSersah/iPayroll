import React, { useState } from 'react';

const Admin = () => {
  const initialValue = {
    rank: '',
    salary: '',
    incomeTax: '',
    staffloan: '',
    loanDeductionRate: '',
    tier1: '',
    tier2: '',
    taxRelief: '',
  };
  const [inputValues, setInputValues] = useState(initialValue);

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    try {
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <section>
      {/* <p>{JSON.stringify(inputValues)}</p> */}
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
          <label htmlFor="rank">Select Rank</label>
          <select
            id="rank"
            name="rank"
            value={inputValues.rank}
            onChange={handleChange}
          >
            <option disabled hidden>
              Set Rank
            </option>
            <option value="Level 1">Level 1</option>
            <option value="Level 2">Level 2</option>
            <option value="Level 3">Level 3</option>
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
            <label htmlFor="staffloan">Set Staffloan Value</label>
            <input
              type="number"
              id="staffloan"
              name="staffloan"
              placeholder="Set loan amount"
              min="0"
              value={inputValues.staffloan}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="loanDeductionRate">Loan Deduction Rate</label>
            <input
              type="number"
              id="loanDeductionRate"
              name="loanDeductionRate"
              placeholder="Set rate in %"
              min="0"
              max="100"
              value={inputValues.loanDeductionRate}
              onChange={handleChange}
            />
            <label htmlFor="tier1">Set SSNIT Tier 1 Rate</label>
            <input
              type="number"
              id="tier1"
              name="tier1"
              placeholder="Set rate in %"
              min="0"
              max="100"
              value={inputValues.tier1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="tier2">Set SSNIT Tier 2 Rate</label>
            <input
              type="number"
              id="tier2"
              name="tier2"
              placeholder="Set rate in %"
              min="0"
              max="100"
              value={inputValues.tier2}
              onChange={handleChange}
            />
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
          </div>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Admin;
