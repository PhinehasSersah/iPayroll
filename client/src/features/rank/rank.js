import React,{useState} from 'react';

export default function Rank() {

  const initialValue = {
    rank: '',
  };
  const [inputValues, setInputValues] = useState(initialValue);

  const handleChange = event => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };
  const handleSubmit = async event => {
    event.preventDefault();
    try {
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <p>{JSON.stringify(inputValues)}</p>
      <h3>Create New Rank</h3>
      <hr></hr>
      <form onSubmit={handleSubmit}>
      {/* <label htmlFor="department">Select Department</label>
      <select 
      id="department"
       name="department" 
       defaultValue='Choose Department'
       onChange={handleChange}
       >
        <option value="" disabled hidden>
          Choose Department
        </option>
        <option value="Service Center">Service Center</option>
        <option value="Training Center">Training Center</option>
        <option value="Operations Department">Operations Department</option>
      </select> */}
      <label htmlFor='rank'>Add Rank</label>
      <input
      id='rank'
      name='rank'
       type="text"
       placeholder="Rank Level"
       value={inputValues.rank}
       onChange={handleChange}
       />
       <button>Create</button>
       </form>
    </div>
  );
}
