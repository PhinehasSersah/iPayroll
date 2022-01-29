import React from 'react';
import amalitech from '../../amalitech.png';
import Footer from '../../Components/Footer/footer';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './payslip.css';

const Payslip = ({ paySlipData }) => {
  return (
    <section id='top'>
      {paySlipData &&
        paySlipData.map((element, index) => {
          return (
            <div className="payslip" key={index}>
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
                    <p>{element.employee_id}</p>
                  </div>
                  <div className="employeeId">
                    <p>Grade : </p>
                    <p>{element.level}</p>
                  </div>
                  <div className="employeeId">
                    <p>Period : </p>
                    <p>{element.month_year}</p>
                  </div>
                </div>
                <div className="second-line">
                  <div className="employeeId">
                    <p>Employee Name : </p>
                    <p>{element.full_name}</p>
                  </div>
                  <div className="employeeId">
                    <p>Department : </p>
                    <p>{element.department}</p>
                  </div>
                  <div className="employeeId">
                    <p>Joining Date : </p>
                    <p>
                      {moment.utc(element.start_work_date).format('YYYY-MM-DD')}
                      {/* {moment.utc(employeeData.start_work_date).format('YYYY-MM-DD')} */}
                    </p>
                  </div>
                </div>
                <div className="third-line">
                  <div className="employeeId">
                    <p>SSNIT Number : </p>
                    <p>{element.snnit_number}</p>
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
                  <p>{element.basic_salary}</p>
                  <p>{element.bonus}</p>
                  <p>{element.tax_relief}</p>
                  <p>{element.initial_amount}</p>
                </div>
                <div className="table-columns deductions">
                  <p>{element.income_tax}</p>
                  <p>{element.tier_one}</p>
                  <p>{element.loan_deduction}</p>
                </div>
              </div>
              {/* total Deductions */}
              <div className="totals">
                <div className="inner">
                  <p>Total Earnings : </p>
                  <p>
                    GHC{' '}
                    {element.basic_salary +
                      element.bonus +
                      element.tax_relief +
                      element.initial_amount}
                  </p>
                </div>
                <div className="inner">
                  <p>Total Deductions : </p>
                  <p>
                    GHC {' '}
                    {element.income_tax +
                      element.tier_one +
                      element.loan_deduction}
                  </p>
                </div>
              </div>

              {/* calculating salary */}
              <div className="calculations">
                <div className="line-1">
                  <div className="gross">
                    <p>Gross Salary :</p>
                    <p>
                      GHC{' '}
                      {element.basic_salary +
                        element.bonus +
                        element.tax_relief +
                        element.initial_amount}
                    </p>
                  </div>
                  <div className="gross">
                    <p>Employee SSNIT Contribution :</p>
                    <p>GHC {element.tier_one}</p>
                  </div>
                </div>
                <div className="line-1">
                  <div className="gross">
                    <p>Deductions :</p>
                    <p>
                      GHC{' '}
                      {element.income_tax +
                        element.tier_one +
                        element.loan_deduction}
                    </p>
                  </div>
                  <div className="gross">
                    <p>Company SSNIT Contribution :</p>
                    <p>GHC {element.tier_two}</p>
                  </div>
                </div>
                <div className="line-1">
                  <div className="gross">
                    <p>Net Salary :</p>
                    <p>
                      GHC{' '}
                      {element.basic_salary +
                        element.bonus +
                        element.tax_relief +
                        element.initial_amount -
                        (element.income_tax +
                          element.tier_one +
                          element.loan_deduction)}
                    </p>
                  </div>
                  <div className="gross">
                    <p>Total SSNIT Contribution :</p>
                    <p>GHC {element.tier_one + element.tier_two}</p>
                  </div>
                </div>
              </div>
              <div className="director">
                <p>Director's Signature......................</p>
              </div>
            </div>
          );
        })}
        <Footer />
    </section>
  );
};

export default Payslip;
