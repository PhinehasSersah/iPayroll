import React, { useState, useEffect } from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import Department from '../../features/department/department';
import Rank from '../../features/rank/rank';
import './admin.css';

const Admin = () => {
  const initialValue = {
    levelId: '',
    salary: '',
    loanDeduction: '',
    incomeTax: '',
    tierOne: '',
    tierTwo: '',
    taxRelief: '',
    bonus: '',
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [levelData, setLevelData] = useState([]);
  const [ratesData, setRatesData] = useState([]);
  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    const { name } = event.target;
    try {
      await fetch('http://localhost:4000/ipayroll/api/v1/rates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputValues),
      });
      window.location = '/';
    } catch (err) {
      console.error(err.message);
    }
    setInputValues({ ...initialValue, [name]: '' });
  };

  useEffect(() => {
    fetch('http://localhost:4000/ipayroll/api/v1/levels')
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed');
        },
        networkError => console.log(networkError.message)
      )
      .then(jsonResponse => {
        setLevelData(jsonResponse);
      });
  }, []);
  // console.log(levelData)

  //fetching rates data
  useEffect(() => {
    fetch('http://localhost:4000/ipayroll/api/v1/rates')
      .then(
        response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Request failed');
        },
        networkError => console.log(networkError.message)
      )
      .then(jsonResponse => {
        setRatesData(jsonResponse);
      });
  }, []);

  console.log(levelData)

  return (
    <>
      <Header />
      
      <section className="administration">
        <div className="admin-banner">
          <h1> Administrative Data Management Dashboard</h1>
          {/* <p>{JSON.stringify(inputValues)}</p> */}
          <hr className="adminhr"></hr>
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
                      type="number"
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
                  />
                </div>
              </div>
              <div className="btn">
                <button>Submit</button>
              </div>
            </form>
          </div>

          {/* currently set data */}

          <div className="rate-data">
            <h4 className="rate-header">Current Rate Data</h4>
            <div className="data-row">
              {/* first row */}

              <div className="outer">
                <div className="rows">
                  <p className="label">Level</p>
                  <div className="input">
                    <p>{}</p>
                  </div>
                </div>
                <div className="rows">
                  <p className="label"> Basic Salary</p>
                  {ratesData.map((element, index) => {
                    return (
                      <div key={index} className="input">
                        {' '}
                        <p>GHC {element.salary}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* second row */}
              <div className="outer">
                <div className="rows">
                  <p className="label">Income Tax Rate</p>
                  {ratesData.map((element, index) => {
                    return (
                      <div key={index} className="input">
                        {' '}
                        <p>{element.income_tax}%</p>
                      </div>
                    );
                  })}
                </div>
                <div className="rows">
                  <p className="label">Loan Deduction Rate</p>
                  {ratesData.map((element, index) => {
                    return (
                      <div key={index} className="input">
                        {' '}
                        <p>{element.loan_deduction}%</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* third row */}
              <div className="outer">
                <div className="rows">
                  <p className="label">SSNIT Tier 1 Rate</p>
                  {ratesData.map((element, index) => {
                    return (
                      <div key={index} className="input">
                        {' '}
                        <p>{element.tier_one}%</p>
                      </div>
                    );
                  })}
                </div>
                <div className="rows">
                  <p className="label">SSNIT Tier 2 Rate</p>
                  {ratesData.map((element, index) => {
                    return (
                      <div key={index} className="input">
                        {' '}
                        <p>{element.tier_two}%</p>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* fourth row */}
              <div className="outer">
                <div className="rows">
                  <p className="label">Tax Relief Rate</p>
                  {ratesData.map((element, index) => {
                    return (
                      <div key={index} className="input">
                        {' '}
                        <p>{element.tax_relief}%</p>
                      </div>
                    );
                  })}
                </div>
                <div className="rows">
                  <p className="label">Bonus Rate</p>
                  {ratesData.map((element, index) => {
                    return (
                      <div key={index} className="input">
                        {' '}
                        <p>{element.bonus}%</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="wrapper">
        <Department />
        <Rank />
      </div>
      <Footer />
    </>
  );
};

export default Admin;
