import React from "react";

const Department = () => {
  
  return (
    <div>
      <h3>Create Department</h3>
      <hr></hr>
      <form>
        <label htmlFor="department">Create Department</label>
        <input
          name="department"
          type="text"
          placeholder="Enter Department Name"
        />
        <button>Create</button>
      </form>
    </div>
  );
};

export default Department;
