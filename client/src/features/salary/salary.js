import React, { useState, useEffect } from 'react';
import './salary.css';

const Salary = () => {

  const [salaryMonth, setSalaryMonth] = useState('');
  const [employees, setEmployees] = useState([]);
  const [ratesData, setRatesData] = useState([]);

  //fetch employees function
  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        'http://localhost:4000/ipayroll/api/v1/employees'
      );
      const jsonResponse = await response.json();
      return setEmployees(jsonResponse);
    } catch (err) {
      console.error(err.message);
    }
  };
  // // fetching employees function
  useEffect(() => fetchEmployees(), []);
  const fetchRates = async () => {
    try {
      const response = await fetch(
        'http://localhost:4000/ipayroll/api/v1/rates'
      );
      const jsonResponse = await response.json();
      return setRatesData(jsonResponse);
    } catch (err) {
      console.error(err.message);
    }
  };
  //fetching rates
  useEffect(() => fetchRates(), []);

  const sendObject = async () => {
    try {
      employees &&
        employees.forEach(element => {
          const lData =
            ratesData &&
            ratesData.find(rate => rate.level_id === element.level_id);
          // console.log
          const toSend = {
            employeeId: element.id,
            monthYear: salaryMonth,
            taxRelief: (lData.tax_relief * lData.salary) / 100,
            incomeTax: (lData.income_tax * lData.salary) / 100,
            loanDeduction: (lData.loan_deduction * lData.salary) / 100,
            salary: lData.salary,
            tierOne: (lData.tier_one * lData.salary) / 100,
            tierTwo: (lData.tier_two * lData.salary) / 100,
            bonus: (lData.bonus * lData.salary) / 100,
          };
          console.log(toSend);
          fetch('http://localhost:4000/ipayroll/api/v1/remunerations', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(toSend),
          });
        });
      // window.location = './';
    } catch (err) {
      console.error(err.message);
    }
  };
  // sendObject();
  console.log(salaryMonth);

  //handleChange
  const handleChange = event => {
    const { value } = event.target;
    setSalaryMonth(value);
  };

  return (
    <div>
      <div className="month">
        <h5>Calculate Monthly Salary</h5>
        <form className='select-month'>
          <label htmlFor="month">Select Month</label>
          <input
            id="month"
            name="month"
            type="month"
            placeholder="select salary month"
            required
            value={salaryMonth}
            onChange={handleChange}
            className='select'
          ></input>

          <div className="calculate-salary">
            <button
              className="calc"
              onClick={() => {
                sendObject();
              }}
            >
              Calculate Salary
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Salary;
