import React, { useState } from 'react';
import Payslip from './payslip';

const PayslipLogics = () => {
  const [paySlipMonth, setPaySlipMonth] = useState('');
  const [paySlipData, setPaySlipData] = useState([]);

  //handle input change
  const handleChange = event => {
    const { value } = event.target;
    setPaySlipMonth(value);
  };

  //handle submit function
  const handleSubmit = async event => {
    event.preventDefault();
    fetch('http://localhost:4000/ipayroll/api/v1/payslips/' + paySlipMonth)
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
        setPaySlipData(jsonResponse);
      });
  };
  return (
    <section>
      <Payslip
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        paySlipData={paySlipData}
        paySlipMonth={paySlipMonth}
      />
    </section>
  );
};

export default PayslipLogics;
