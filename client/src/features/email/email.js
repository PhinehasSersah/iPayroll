import React, { useState } from 'react';
import './email.css';

export const Email = () => {
  const [paySlipMonth, setPaySlipMonth] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setPaySlipMonth(value);
  };

  const sendEmail = async event => {
    event.preventDefault();
    let email = {
      monthYear: paySlipMonth,
    };
    try {
      fetch('http://localhost:4000/ipayroll/api/v1/payslips/send-slips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      })
        .then(res => res.json())
        .then(jsonRes => jsonRes);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="email-section">
        <h4>Send Employee Monthly Payslips</h4>
        <form className="select-month">
          <label htmlFor="month">Select Month</label>
          <input
            id="month"
            name="emailMonth"
            type="month"
            placeholder="Select Payslip Month"
            required
            value={paySlipMonth}
            onChange={handleChange}
            className="select"
          ></input>
          <div className="sendEmail">
            <button
              onClick={event => {
                sendEmail(event);
              }}
              className="calc"
            >
              E-mail Payslip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
