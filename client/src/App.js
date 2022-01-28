import axios from "axios";
import React from "react";
import Employee from "./Components/Employee-Info/Employee";
import Department from "./features/department/department";
import Login from "./features/login/login";
import Admin from "./Components/Admin/admin";
import Rank from "./features/rank/rank";
import SearchEmployee from "./features/searchEmployee/searchEmployee";
import Account from "./Components/Account/account";
import Salary from "./features/salary/salary";
import Payslip from "./features/payslip/payslip";
import PayslipLogics from "./features/payslip/payslipLogics";
import AdminLogic from "./Components/Admin/adminLogics";
import Footer from "./Components/Footer/footer";
import Loans from "./features/loans/loans";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

const App =()=> {
  return (
    // <>
    // <SearchEmployee/>
    // <Loans />
     <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/payslip" element={<Payslip />} />
        <Route exact path="/dashboard/admin" element={<AdminLogic />} />
        <Route exact path="/dashboard/hr" element={<Employee />} />
        <Route exact path="/dashboard/accounts" element={<Account />} />
      </Routes>
    </Router> 
  );
}

export default App