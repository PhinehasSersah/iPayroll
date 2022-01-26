import React from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Salary from "../../features/salary/salary";
import "./account.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

const Account = () => {
  return (
    <section className="account-section">
      <Header />
      <div className="account-dashboard">
        <div className="account-section">
          <h1 className="account-banner">Salary Data Dashboard</h1>
          <Link to="/dashboard/hr">
            <button>Employees Dashboard</button>
          </Link>
          <Link to="/dashboard/admin">
            <button>Administrator Dashboard</button>
          </Link>
          <hr className="accounthr"></hr>
        </div>
        <div className="display">
          <div className="calculation-section">
            <Salary />
          </div>
          <div className="payslip-section"></div>
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
