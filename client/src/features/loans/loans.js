import React, { useState, useEffect } from 'react';
import { LoansDisplay } from './loansDisplay';

const Loans = () => {
  let loanData = {
    employeeId: '',
    initialAmount: '',
    amountLeft: '',
    monthYear: ''
  };

  const [employeeData, setEmployeeData] = useState();
  const [selectData, setSelectData] = useState(loanData);

  //fetchin employees data
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
        setEmployeeData(jsonResponse);
      });
  }, []);

  //handleChange
  const handleChange = event => {
    const { name, value } = event.target;
    setSelectData({ ...selectData, [name]: value });
  };
  //setting amount left value
  const setAmountLeft = () => {
    return (selectData.amountLeft = selectData.initialAmount);
  };
  setAmountLeft();

  const handleLoanStatus = () => {
    try {
      fetch(
        'http://localhost:4000/ipayroll/api/v1/employees/updateLoanStatus/' +
          selectData.employeeId,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ onLoan: true }),
        }
      );
      window.location = '/dashboard/accounts';
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { name } = event.target;
    try {
      await fetch('http://localhost:4000/ipayroll/api/v1/loans', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectData),
      });
      handleLoanStatus();
      window.location = '/dashboard/accounts';
    } catch (err) {
      console.error(err.message);
    }
    setSelectData({ ...loanData, [name]: '' });
  };
  return (
    <LoansDisplay
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      selectData={selectData}
      employeeData={employeeData}
    />
  );
};
export default Loans;
