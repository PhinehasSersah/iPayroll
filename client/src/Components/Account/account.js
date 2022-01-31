import React, { useState } from 'react';
import Header from '../Header/header';
import Salary from '../../features/salary/salary';
import Loans from '../../features/loans/loans';
import Payslip from '../../features/payslip/payslip';
import './account.css';
import { Link } from 'react-router-dom';
import { Email } from '../../features/email/email';

const Account = ({
  paySlipData,
  handlePaySubmit,
  handleMonthChange,
  paySlipMonth,
}) => {
  const [viewPayslip, setViewPayslip] = useState(true);

  return (
    <section className="main-account">
      <Header />
        <div className="account-section">
          <h1 className="account-banner">Salary Data Dashboard</h1>
          <div className="routing">
            <p>Navigate to</p>
            <Link to="/dashboard/hr">
              <button className="rout-button">Employees Dashboard</button>
            </Link>
            <Link to="/dashboard/admin">
              <button className="rout-button">Administrator Dashboard</button>
            </Link>
          </div>
          <hr className="accounthr"></hr>
        </div>
        <div className="display">
          <div className="calculation-section">
            <Salary />
          </div>
          <div className="payslip-section">
            <Loans />
          </div>
        </div>

        <div className="payslip-data">
          <form className="form-data" onSubmit={handlePaySubmit}>
            <div className="title">
              <h4>Generate Employee Payslip</h4>
            </div>
            <label htmlFor="select-month">Select Payslip Month</label>
            <input
              id="select-month"
              name="select-month"
              type="month"
              placeholder="select salary month"
              required
              value={paySlipMonth}
              onChange={handleMonthChange}
              className="select"
            />
            <div className="generate-btn">
              <button>Generate</button>
            </div>
          </form>
          <div className="payslip-btn">
            <h4>View or hide payslip</h4>
            <button
              onClick={() => setViewPayslip(!viewPayslip)}
              className="pay-button"
            >
              Toggle Payslip
            </button>
          </div>
        </div>
        <div className='email'>
          <Email />
        </div>
        <div className={viewPayslip ? 'payslip-view' : 'payslip-close'}>
          <Payslip paySlipData={paySlipData} />
        </div>
    </section>
  );
};

export default Account;
