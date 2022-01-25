import React, {useState, useEffect} from 'react';
import amalitech from '../../amalitech.png';
import './payslip.css';

const Payslip = () => {

    const [employeeDetails, setEmployeeDetails] = useState([]);
    const [salaryData, setSalaryData] = useState([]);
    

    //fetching employee details
    





  return (
    <div className="payslip">
      {/* amalitech logo and ipayroll */}
      <div className="payslip-header">
        <img src={amalitech} alt="company logo"></img>
        <div className="center">
          <p className="payroll">
            <strong className="i">i</strong>Payroll Employee PaySlip
          </p>
        </div>
      </div>
      <hr className="top-underline"></hr>

      <div className="employee-details">
        <div className="first-line">
          <div className="employeeId">
            <p>Employee Id : </p>
            <p>{}tewwwer</p>
          </div>
          <div className="employeeId">
            <p>Grade : </p>
            <p>{}teewtew</p>
          </div>
          <div className="employeeId">
            <p>Period : </p>
            <p>{}tewttytttttttytu</p>
          </div>
        </div>
        <div className="second-line">
          <div className="employeeId">
            <p>Employee Name : </p>
            <p>{}twet</p>
          </div>
          <div className="employeeId">
            <p>Department : </p>
            <p>{}tewter</p>
          </div>
          <div className="employeeId">
            <p>Joining Date : </p>
            <p>{}trwr</p>
          </div>
        </div>
        <div className="third-line">
          <div className="employeeId">
            <p>SSNIT Number : </p>
            <p>{}rtwr</p>
          </div>
        </div>
        <hr className="employee-info-underline"></hr>
      </div>

      {/* actual table data */}
      <div className="criterion">
        <h5>Criterion</h5>
        <h5>Earnings</h5>
        <h5>Deductions</h5>
      </div>

      {/* data table */}
      <div className="datable">
        <div className="table-columns">
          <p>Basic Salary</p>
          <p>Working Bonus</p>
          <p>Tax Relief</p>
          <p>Loan Amount</p>
          <p>Income Tax</p>
          <p>SSNIT Deduction</p>
          <p>Loan Deduction</p>
        </div>
        <div className="table-columns">
          <p>{}salary</p>
          <p>{}bonus</p>
          <p>{}tax releif</p>
          <p>{}loan</p>
        </div>
        <div className="table-columns deductions">
          <p>{}tax</p>
          <p>{}ssnit</p>
          <p>{}loan</p>
        </div>
      </div>
      {/* total Deductions */}
      <div className="totals">
        <div className="inner">
          <p>Total Earnings : </p>
          <p>GHC {}</p>
        </div>
        <div className="inner">
          <p>Total Deductions :</p>
          <p>GHC{}</p>
        </div>
      </div>

      {/* calculating salary */}
      <div className="calculations">
        <div className="line-1">
          <div className="gross">
            <p>Gross Salary :</p>
            <p>GHC {}</p>
          </div>
          <div className="gross">
            <p>Employee SSNIT Contribution :</p>
            <p>GHC {}</p>
          </div>
        </div>
        <div className="line-1">
          <div className="gross">
            <p>Deductions :</p>
            <p>GHC {}</p>
          </div>
          <div className="gross">
            <p>Company SSNIT Contribution :</p>
            <p>GHC {}</p>
          </div>
        </div>
        <div className="line-1">
          <div className="gross">
            <p>Net Salary :</p>
            <p>GHC {}</p>
          </div>
          <div className="gross">
            <p>Total SSNIT Contribution :</p>
            <p>GHC {}</p>
          </div>
        </div>
      </div>
      <div className="director">
        <p>Director's Signature......................</p>
      </div>
    </div>
  );
};

export default Payslip;
