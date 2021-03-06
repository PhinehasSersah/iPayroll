import React, { useState } from 'react';
import Account from './account';

const AccountLogics = () => {
  const [paySlipMonth, setPaySlipMonth] = useState('');
  const [paySlipData, setPaySlipData] = useState([]);

  //handle input change
  const handleMonthChange = event => {
    const { value } = event.target;
    setPaySlipMonth(value);
  };

  //handle submit function
  const handlePaySubmit = async event => {
    event.preventDefault();
    fetch('/ipayroll/api/v1/payslips/' + paySlipMonth)
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed');
        },
        networkError => console.log(networkError.message)
      )
      .then(jsonRes => {
        return setPaySlipData(jsonRes);
      });
    // window.location = '/dashboard/accounts';
  };

  return (
    <section>
      <Account
        handlePaySubmit={handlePaySubmit}
        handleMonthChange={handleMonthChange}
        paySlipMonth={paySlipMonth}
        paySlipData={paySlipData}
      />
    </section>
  );
};

export default AccountLogics;
