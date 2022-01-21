import React, { useState, useEffect } from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import './admin.css'

const Admin = () => {
  const initialValue = {
    levelId: '',
    salary: '',
    loanDeduction: '',
    incomeTax: '',
    tierOne: '',
    tierTwo:'',
    taxRelief: '',
    bonus: ''
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [levelData, setLevelData] = useState([]);
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

console.log(inputValues)
  return (
    <>
          {/* <p>{JSON.stringify(inputValues)}</p> */}
     <Header />
    <section className='administration'>

      <div className="admin-banner">
        <h1>Administrative Data Management Dashboard</h1>
        <hr></hr>
      </div>

      <div className="data-table">
        <form className='form' onSubmit={handleSubmit}>
          <br></br>
          <div className='management'>
            <h4>Salary Management</h4>
          </div>
          <div className='select-salary'>
            <div className='column'>
          <label htmlFor="levelId">Select Rank</label>
          <select
            id="levelId"
            name="levelId"
            value={inputValues.levelId}
            onChange={handleChange}
            className='input'
          >
            <option disabled hidden>
              Set Level
            </option>
            {levelData.map((element, index) => {
              return (
                <option value={element.id} key={index}>{element.name}</option>
              )
            })}
          </select>
          </div>
          <div className='column'>
          <label htmlFor="salary">Set Basic Salary</label>
          <input
            type="number"
            id="salary"
            name="salary"
            placeholder="Enter Amount"
            min="0"
            value={inputValues.salary}
            onChange={handleChange}
            className='input'
          />
          </div>
          </div>
          <div>
            <br></br>
            <div className='management'>
              <h4>Rate Management</h4>
            </div>
            <div className='select-salary'>
            <div className='column'>
            <label htmlFor="incomeTax">Set Income Tax Rate</label>
            <input
              type="number"
              id="incomeTax"
              name="incomeTax"
              placeholder="Set rate in %"
              min="0"
              max="100"
              value={inputValues.incomeTax}
              onChange={handleChange}
              className='input'
            />
            </div>
            <div className='column'>
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
              className='input'
            />
            </div>
            </div>
          </div>


          <div className='select-salary'>
            <div className='column'>
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
              className='input'
            />
            </div>
            <div className='column'>
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
              className='input'
            />
          </div>
          </div>

          <div className='select-salary'>
            <div className='column'>
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
              className='input'
            />
            </div>
            <div className='column'>
            <label htmlFor="bonus">Set Bonus Rate</label>
            <input
              type="number"
              id="bonus"
              name="bonus"
              placeholder="Set bonus rate"
              min="0"
              value={inputValues.bonus}
              onChange={handleChange}
              className='input'
            />
          </div>
          </div>
          <div className='btn'>
          <button>Submit</button>
          </div>
        </form>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Admin;
