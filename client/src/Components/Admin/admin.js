import React from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import Department from "../../features/department/department";
import Rank from "../../features/rank/rank";
import { Link } from "react-router-dom";
import "./admin.css";


const Admin = ({
  inputValues,
  levelData,
  selectedRateData,
  handleSubmit,
  handleChange,
  handleSelect,
}) => {
  return (
    <>
      <Header />
      <section className="administration">
        <div className="admin-banner">
          <h1> Administrative Data Management Dashboard</h1>
          <div className='routing'>
            <p>Navigate to</p>
          <Link to="/dashboard/hr">
            <button className="rout-button">Employees Dashboard</button>
          </Link>
          <Link to="/dashboard/accounts">
            <button className="rout-button">Accounts Dashboard</button>
          </Link>
          </div>
          <hr className='adminhr'></hr>
        </div>

        <div className="admin-data">
          <div className="data-table">
            <form className="form" onSubmit={handleSubmit}>
              <br></br>
              <div className="management">
                <h4>Set Salary</h4>
              </div>
              <div className="select-salary">
                <div className="column">
                  <label htmlFor="levelId">Select Level</label>
                  <select
                    id="levelId"
                    name="levelId"
                    value={inputValues.levelId}
                    onChange={handleChange}
                    className="input"
                  >
                    <option>Set Level</option>
                    {levelData.map((element, index) => {
                      return (
                        <option value={element.id} key={index}>
                          {element.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="column">
                  <label htmlFor="salary">Set Basic Salary</label>
                  <input
                    type="number"
                    id="salary"
                    name="salary"
                    placeholder="Enter Amount"
                    min="0"
                    value={inputValues.salary}
                    onChange={handleChange}
                    className="input"
                    step="0.01"
                  />
                </div>
              </div>
              <div>
                <br></br>
                <div className="management">
                  <h4>Set Rates</h4>
                </div>
                <div className="select-salary">
                  <div className="column">
                    <label htmlFor="incomeTax">Set Income Tax Rate</label>
                    <input
                      type="text"
                      id="incomeTax"
                      name="incomeTax"
                      placeholder="Set rate in percentage"
                      min="0"
                      max="100"
                      value={inputValues.incomeTax}
                      onChange={handleChange}
                      className="input"
                    />
                  </div>
                  <div className="column">
                    <label htmlFor="loanDeduction">Loan Deduction Rate</label>
                    <input
                      type="number"
                      id="loanDeduction"
                      name="loanDeduction"
                      placeholder="Set rate in percentage"
                      min="0"
                      max="100"
                      value={inputValues.loanDeduction}
                      onChange={handleChange}
                      className="input"
                      step="0.01"
                    />
                  </div>
                </div>
              </div>

              <div className="select-salary">
                <div className="column">
                  <label htmlFor="tierOne">Set SSNIT Tier 1 Rate</label>
                  <input
                    type="number"
                    id="tierOne"
                    name="tierOne"
                    placeholder="Set rate in percentage"
                    min="0"
                    max="100"
                    value={inputValues.tierOne}
                    onChange={handleChange}
                    className="input"
                    step="0.01"
                  />
                </div>
                <div className="column">
                  <label htmlFor="tierTwo">Set SSNIT Tier 2 Rate</label>
                  <input
                    type="number"
                    id="tierTwo"
                    name="tierTwo"
                    placeholder="Set rate in percentage"
                    min="0"
                    max="100"
                    value={inputValues.tierTwo}
                    onChange={handleChange}
                    className="input"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="select-salary">
                <div className="column">
                  <label htmlFor="taxRelief">Tax Relief Rate</label>
                  <input
                    type="number"
                    id="taxRelief"
                    name="taxRelief"
                    placeholder="Set rate in percentage"
                    min="0"
                    max="100"
                    value={inputValues.taxRelief}
                    onChange={handleChange}
                    className="input"
                    step="0.01"
                  />
                </div>
                <div className="column">
                  <label htmlFor="bonus">Set Bonus Rate</label>
                  <input
                    type="number"
                    id="bonus"
                    name="bonus"
                    placeholder="Set bonus rate"
                    min="0"
                    value={inputValues.bonus}
                    onChange={handleChange}
                    className="input"
                    step="0.01"
                  />
                </div>
              </div>
              <div className="btn">
                <button>Submit</button>
              </div>
            </form>
          </div>

          {/* current data */}

          <div className="rate-data">
            <h4 className="rate-header">Current Rate Data</h4>
            <div className="data-row">
              {/* first row */}
              <div className="outer">
                <div className="rows">
                  <label htmlFor="label">Select Level</label>
                  <select
                    id="levelId"
                    name="levelId"
                    value={levelData.id}
                    onChange={handleSelect}
                    className="input"
                  >
                    <option>Set Level</option>
                    {levelData.map((element, index) => {
                      return (
                        <option value={element.id} key={index}>
                          {element.name}
                        </option>
                      );
                    })}
                  </select>
                </div>

                {/* display selected leves data */}
                <div className="rows">
                  <p className="label"> Basic Salary</p>
                  <div className="input">
                    {" "}
                    <p>GHC {selectedRateData && selectedRateData.salary}</p>
                  </div>
                </div>
              </div>
              {/* second row */}
              <div className="outer">
                <div className="rows">
                  <p className="label">Income Tax Rate</p>

                  <div className="input">
                    {" "}
                    <p>{selectedRateData && selectedRateData.income_tax}%</p>
                  </div>
                </div>
                <div className="rows">
                  <p className="label">Loan Deduction Rate</p>

                  <div className="input">
                    {" "}
                    <p>
                      {selectedRateData && selectedRateData.loan_deduction}%
                    </p>
                  </div>
                </div>
              </div>
              {/* third row */}
              <div className="outer">
                <div className="rows">
                  <p className="label">SSNIT Tier 1 Rate</p>

                  <div className="input">
                    {" "}
                    <p>{selectedRateData && selectedRateData.tier_one}%</p>
                  </div>
                </div>
                <div className="rows">
                  <p className="label">SSNIT Tier 2 Rate</p>

                  <div className="input">
                    {" "}
                    <p>{selectedRateData && selectedRateData.tier_two}%</p>
                  </div>
                </div>
              </div>
              {/* fourth row */}
              <div className="outer">
                <div className="rows">
                  <p className="label">Tax Relief Rate</p>

                  <div className="input">
                    {" "}
                    <p>{selectedRateData && selectedRateData.tax_relief}%</p>
                  </div>
                </div>
                <div className="rows">
                  <p className="label">Bonus Rate</p>

                  <div className="input">
                    {" "}
                    <p>{selectedRateData && selectedRateData.bonus}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wrapper">
        <div className="sub">
          <Department />
        </div>
        <div className="sub">
          <Rank />
        </div>
      </div>
      <div className="footer-div">
        <Footer />
      </div>
    </>
  );
};

export default Admin;
