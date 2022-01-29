import React from 'react';
import './loans.css';

export const LoansDisplay = ({
  handleChange,
  selectData,
  employeeData,
  handleSubmit,
}) => {
  return (
    <div className="loans-section">
      <form className="loan-form" onSubmit={handleSubmit}>
        <div className="title">
          <h5>Employee Loans Data</h5>
        </div>
        <div className="select-name">
          <label htmlFor="employee">Select Employee</label>
          <select
            id="employee"
            name="employeeId"
            value={selectData.employeeId}
            onChange={handleChange}
            className="inputs"
            placeholder="Select Employee Name"
            required
          >
            <option value="" hidden>
              Select Employee Name
            </option>
            {employeeData &&
              employeeData.map((element, index) => {
                return (
                  <option value={element.id} key={index}>
                    {element.firstname} {element.lastname}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="select-name">
          <label htmlFor="initialAmount">Enter Loan Amount</label>
          <input
            name="initialAmount"
            id="initialAmount"
            type="number"
            value={selectData.amount}
            onChange={handleChange}
            className="inputs"
            placeholder="Enter Amount"
            required
            step="0.1"
          />
        </div>
        <div className="select-name">
        <label htmlFor="monthYear">Select Month</label>
          <input
            id="monthYear"
            name="monthYear"
            type="month"
            placeholder="select month"
            required
            value={selectData.monthYear}
            onChange={handleChange}
            className="inputs"
          ></input>
        </div>
        <div className="loan-btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};
