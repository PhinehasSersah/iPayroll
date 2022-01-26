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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  {
    /* <Login /> */
  }
  {
    /* <Employee /> */
  }
  {
    /* <AdminLogic /> */
  }
  {
    /* <Rank /> */
  }
  {
    /* <Account /> */
  }
  {
    /* <Department/> */
  }
  {
    /* <SearchEmployee /> */
  }
  {
    /* <Salary/> */
  }
  {
    /* <Payslip /> */
  }
  {
    /* <PayslipLogics /> */
  }
  {
    /* <Footer /> */
  }
  return (
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
