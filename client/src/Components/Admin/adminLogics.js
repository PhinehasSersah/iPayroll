import React, { useState, useEffect } from 'react';
import Admin from './admin';

const AdminLogic = () => {
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
  const [currentLevel, setCurrentLevel] = useState('');

  //handle change function
  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  //handle current data select change
  const handleSelect = event => {
    const { value } = event.target;
    setCurrentLevel(value);
  };
  //handle submit function
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


  const selectedRateData = ratesData.find(
    rate => rate.level_id === Number(currentLevel)
  );

  return (
    <>
     <Admin 
     inputValues={inputValues}
     levelData={levelData}
     selectedRateData={selectedRateData}
     ratesData={ratesData}
     handleSubmit={handleSubmit}
     handleChange={handleChange}
     handleSelect={handleSelect}
     />
    </>
  );
};

export default AdminLogic;
