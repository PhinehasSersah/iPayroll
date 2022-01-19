import React,{useState} from "react";

const Department = () => {
  
  const initialValue = {
    department: '',
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
      <h3>Create New Department</h3>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <label htmlFor="department">Create Department</label>
        <input
          id="department"
          name="department"
          type="text"
          placeholder="Enter Department Name"
          onChange={handleChange}
          value={inputValues.department}
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default Department;
