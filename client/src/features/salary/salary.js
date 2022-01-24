import React, { useState, useEffect } from 'react';

const Salary = () => {


  // const [salaryData, setSalaryData] = useState();
  const [salaryMonth, setSalaryMonth] = useState('');
  const [employees, setEmployees] = useState(null);
  const [ratesData, setRatesData] = useState(null);

  // // fetching employees function
  useEffect(() => {
    fetch('http://localhost:4000/ipayroll/api/v1/employees')
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
        setEmployees(jsonResponse);
      });
  }, []);

  //fetching rates
  useEffect(() => {
   
    fetch('http://localhost:4000/ipayroll/api/v1/rates')
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
        setRatesData(jsonResponse);
      });
  }, []);
  

  const sendObject  = async() => {
    employees && employees.forEach(element => {
      const lData =  ratesData && ratesData.find(rate => rate.level_id === element.level_id);
      const toSend = {
        employeeId: element.id,
        monthYear: salaryMonth,
        taxRelief: (lData.tax_relief *lData.salary)/100,
        incomeTax: (lData.income_tax *lData.salary)/100,
        loanDeduction:(lData.loan_deduction*lData.salary)/100,
        salary: lData.salary,
        tierOne:(lData.tier_one*lData.salary)/100,
        tierTwo:(lData.tier_two*lData.salary)/100,
        bonus: (lData.bonus*lData.salary)/100,
      };
      console.log(toSend);
    });
  }
  sendObject()
  console.log(salaryMonth)
  
  
  



  //handleChange
  const handleChange = event => {
    const { value } = event.target;
    setSalaryMonth(value);
  };

  return (
    <div>
      <div className="month">
        <label htmlFor="month">Select Month</label>
        <input
          id="month"
          name="month"
          type="month"
          placeholder="select salary month"
          required
          value={salaryMonth}
          onChange={handleChange}
        ></input>
      </div>
      <div className="calculate-salary">
        <button className="calc">Calculate Salary</button>
      </div>
    </div>
  );
};

export default Salary;
