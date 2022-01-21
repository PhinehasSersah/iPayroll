import React,{useState, useEffect} from 'react';

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
    <div>
      <h3>Create New Rank</h3>
      <hr></hr>
      <form onSubmit={handleSubmit}>
      <label htmlFor='rank'>Add Rank</label>
      <input
      id='rank'
      name='name'
       type="text"
       placeholder=" Set Rank Level"
       value={inputValues.rank}
       onChange={handleChange}
       />
       <button>Create</button>
       </form><div>
        {rank.map((section, index) => {
          return (
            <div key={section.id}>
              <li>{section.name}</li>
              <button
                onClick={() => {
                  deleteRank(section.id);
                }}
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
