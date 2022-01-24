import React from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './account.css';

const Account = () => {
  return (
    <section className="account-section">
      <Header />
      <div className="account-dashboard">
        <div className="account-section">
          <h1 className="account-banner">Salary Data Dashboard</h1>
          <hr className="accounthr"></hr>
        </div>
        <div className="display">
          <div className="calculation-section"></div>
          <div className="payslip-section"></div>
        </div>
        <div className='payslip-btn'>
          <button className='pay-button'>Generate PaySlip</button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Account;
