import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Salary from "../../features/salary/salary";
import Loans from "../../features/loans/loans";
import "./account.css";
import {
  Link
} from "react-router-dom";

const Account = () => {
  return (
    <section className="main-account">
      <Header />
      <div className="account-dashboard">
        <div className="account-section">
          <h1 className="account-banner">Salary Data Dashboard</h1>
          <div className='routing'>
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
        <div className="payslip-btn">
          <button className="pay-button">Generate PaySlip</button>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Account;
