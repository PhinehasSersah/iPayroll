import React, { useState, useEffect } from "react";
import EmployeeDisplay from "./EmployeeDisplay";

const Employee = () => {
  const initialValue = {
    fname: "",
    lname: "",
    email: "",
    dob: "",
    startDate: "",
    phoneNum: "",
    dept: "",
    level: "",
    sex: "",
    snnitNum: "",
    onLoan: false
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [department, setDepartment] = useState([]);
  const [levels, setLevels] = useState([]);

  // handleChange function
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  // fetching department
  useEffect(() => {
    fetch("http://localhost:4000/ipayroll/api/v1/departments")
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
        setDepartment(jsonResponse);
      });
  }, []);

  //fetching levels
  useEffect(() => {
    fetch("http://localhost:4000/ipayroll/api/v1/levels")
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
        setLevels(jsonResponse);
      });
  }, []);

  // handle submit function
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name } = event.target;
    try {
      await fetch("http://localhost:4000/ipayroll/api/v1/employees", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputValues),
      });
      window.location = "/dashboard/hr";
    } catch (err) {
      console.error(err.message);
    }
    setInputValues({ ...initialValue, [name]: "" });
  };
  return (
    <>
    <EmployeeDisplay 
    handleChange={handleChange}
    handleSubmit={handleSubmit}
    inputValues={inputValues}
    department={department}
    levels={levels}
    />
    </>
   
  );
};

export default Employee;
