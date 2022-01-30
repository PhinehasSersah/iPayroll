import React, { useState, useEffect } from "react";
import Account from "./account";

const AccountLogics = () => {
  const [paySlipMonth, setPaySlipMonth] = useState("");
  const [paySlipData, setPaySlipData] = useState([]);

  //handle input change
  const handleMonthChange = (event) => {
    const { value } = event.target;
    setPaySlipMonth(value);
  };

  //handle submit function
  const handlePaySubmit = async (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/ipayroll/api/v1/payslips/" + paySlipMonth)
      .then(
        (response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Request failed");
        },
        (networkError) => console.log(networkError.message)
      )
      .then((jsonResponse) => {
        return setPaySlipData(jsonResponse);
        // console.log(jsonResponse);
      });
    // window.location = "./accounts";
  };

  // useEffect(()=> handlePaySubmit)

  return (
    <section>
      <Account
        handlePaySubmit={handlePaySubmit}
        handleMonthChange={handleMonthChange}
        paySlipMonth={paySlipMonth}
        paySlipData={paySlipData}
        // togglePayslip={togglePayslip}
      />
    </section>
  );
};

export default AccountLogics;
