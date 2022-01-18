import React from 'react';
import { hydrate } from 'react-dom/cjs/react-dom.development';

const Admin = () => {
  return (
    <section>
      <div className="admin-banner">
        <h1>Administrative Data Management</h1>
        <hr></hr>
      </div>

      <div className="data-table">
        <form>
          <br></br>
          <div>
            <h4>Salary Management</h4>
          </div>
          {/* <label>Select Department</label>
          <select
            id="department"
            name="department"
            defaultValue="Select Department"
          >
            <option value="" hidden>
              Select Department
            </option>
            <option value="Service Center">Service Center</option>
            <option value="Training Center">Training Center</option>
            <option value="Operations Department">Operations Department</option>
          </select> */}
          <label htmlFor="salary">Select Rank</label>
          <select id="salary" name="salary" defaultValue="Set Rank">
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
            min='0'
            max='10000'
          />
          <div>
            <br></br>
            <div>
              <h4>Rate Management</h4>
            </div>

            <label htmlFor="income-tax-rate">Set Income Tax Rate</label>
            <input
              type="number"
              id="income-tax-rate"
              name="income-tax-rate"
              placeholder="Set rate in %"
              min='0'
              max='1'
            />
            <label htmlFor="staffloan">Set Staffloan Value</label>
            <input
              type="number"
              id="staffloan"
              name="staffloan"
              placeholder="Set loan amount"
              min='0'
              max='5000'
            />
          </div>
          <div>
            <label htmlFor="deduction-rate">Loan Deduction Rate</label>
            <input
              type="number"
              id="deduction-rate"
              name="deduction-rate"
              placeholder="Set rate in %"
              min='0'
              max='1'
            />
            <label htmlFor="ssnit-tier-1">Set SSNIT Tier 1 Rate</label>
            <input
              type="number"
              id="ssnit-tier-1"
              name="ssnit-tier-1"
              placeholder="Set rate in %"
              min='0'
              max='1'
            />
          </div>

          <div>
            <label htmlFor="ssnit-tier-2">Set SSNIT Tier 2 Rate</label>
            <input
              type="number"
              id="ssnit-tier-2"
              name="ssnit-tier-2"
              placeholder="Set rate in %"
              min='0'
              max='1'
            />
            <label htmlFor="tax-relief">Tax Relief Rate</label>
            <input
              type="number"
              id="tax-relief"
              name="tax-relief"
              placeholder="Set rate in %"
              min='0'
              max='1'
            />
          </div>
         <button>Submit</button> 
        </form>
      </div>
    </section>
  );
};

export default Admin;
