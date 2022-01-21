import React, { useState, useEffect } from 'react';
import './rank.css';

export default function Rank() {
  const initialValue = {
    name: '',
  };
  const [inputValues, setInputValues] = useState(initialValue);
  const [rank, setRank] = useState([]);

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  //submit function
  const handleSubmit = async event => {
    const { name } = event.target;
    event.preventDefault();
    try {
      await fetch('http://localhost:4000/ipayroll/api/v1/levels', {
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
  // fetch rank data
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
        setRank(jsonResponse);
      });
  }, []);
  //delete rank data
  const deleteRank = id => {
    fetch('http://localhost:4000/ipayroll/api/v1/levels/' + id, {
      method: 'DELETE',
    });
    window.location = '/';
  };

  return (
    <div className="rank-section">
      <h4>Create New Rank</h4>
      <div className="rank-div">
        <form className="rank-form" onSubmit={handleSubmit}>
          <label className="rank" htmlFor="rank">
            Create New Rank
          </label>
          <input
            id="rank"
            name="name"
            type="text"
            placeholder="Create new rank"
            value={inputValues.rank}
            onChange={handleChange}
            className="set-rank"
          />
          <button className="rank-btn">Create</button>
        </form>
      </div>
      <div className="levels">
        {rank.map((section, index) => {
          return (
            <div className="rendered-levels" key={section.id}>
              <div className="left">
                {' '}
                <li>{section.name}</li>
              </div>
              <button
                onClick={() => {
                  deleteRank(section.id);
                }}
                className="rendered-btn"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
