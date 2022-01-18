import React from 'react';

export default function Rank() {
  return (
    <div>
      <h3>Create Rank</h3>
      <hr></hr>
      <label htmlFor="department">Select Department</label>
      <select id="department" name="department" defaultValue='Choose Department'>
        <option value="" disabled hidden>
          Choose Department
        </option>
        <option value="Service Center">Service Center</option>
        <option value="Training Center">Training Center</option>
        <option value="Operations Department">Operations Department</option>
      </select>
      <label>Add Rank</label>
      <input type="text" placeholder="Rank Level"></input>
    </div>
  );
}
