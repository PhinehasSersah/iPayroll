import React from 'react';
import Employee from './Components/Employee-Info/Employee';
// import Login from './features/login/login';
import AdminLogic from './Components/Admin/adminLogics';
import AccountLogics from './Components/Account/accountLogics';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="/" element={<Employee />} />
        <Route exact path="/dashboard/admin" element={<AdminLogic />} />
        <Route exact path="/dashboard/hr" element={<Employee />} />
        <Route exact path="/dashboard/accounts" element={<AccountLogics />} />
      </Routes>
    </Router>
  );
};

export default App;
