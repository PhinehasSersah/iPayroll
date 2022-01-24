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

export default function App() {
  // const [state, setState] = useState("null");
  // axios
  //   .get("http://localhost:4000/home")
  //   .then((res) => {
  //     console.log(res);
  //     return setState(res.data);
  //   })
  //   .catch((err) => console.log(err));
  return (
    <div>
      {/* <Login /> */}
      {/* <Employee /> */}
      {/* <Admin /> */}
      {/* <Rank /> */}
      {/* <Account /> */}
      {/* <Department/> */}
      {/* <SearchEmployee /> */}
      <Salary/>
    </div>
  );
}
