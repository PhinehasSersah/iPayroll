import axios from 'axios';
import React, { useState } from 'react';
import Employee from './Components/Employee-Info/Employee';
import Department from './features/department/department';
import Login from './features/login/login';
import Admin from './Components/Admin/admin';
import Rank from './features/rank/rank';
import SearchEmployee from './features/searchEmployee/searchEmployee';
import Account from './Components/Account/account';
import Salary from './features/salary/salary';
import Payslip from './features/payslip/payslip';
import PayslipLogics from './features/payslip/payslipLogics';
import AdminLogic from './Components/Admin/adminLogics';
import Footer from './Components/Footer/footer';
export default function App() {
  
  return (
    <div>
      {/* <Login /> */}
      {/* <Employee /> */}
      {/* <AdminLogic /> */}
      {/* <Rank /> */}
      {/* <Account /> */}
      {/* <Department/> */}
      {/* <SearchEmployee /> */}
      {/* <Salary/> */}
      {/* <Payslip /> */}
      <PayslipLogics/>
      {/* <Footer /> */}
    </div>
  );
}
