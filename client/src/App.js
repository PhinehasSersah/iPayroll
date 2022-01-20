import axios from "axios";
import React, { useState } from "react";
import Header from "./Components/Header/header";
import Employee from "./Components/Employee-Info/Employee";
import Department from "./features/department/department";
import Rank from "./features/rank/rank";
import Login from "./features/login/login";
import Footer from "./Components/Footer/footer";
import Admin from "./Components/Admin/admin";

export default function App() {

  const [state, setState] = useState("null");
  axios
    .get("http://localhost:4000/home")
    .then((res) => {
      console.log(res);
      return setState(res.data);
    })
    .catch((err) => console.log(err));
  return (
    <div>
       <Login />
      {/* <Employee /> */}
      {/* <p>{state}</p> */}
       {/* <Header />  */}
      
      {/* <Department />
      <Rank />  */}
      {/* <Admin /> */}
      
      {/* <Footer />  */}
      
    </div>
  );
}
