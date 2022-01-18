import React from 'react';

const Login = () => {
  return (
    <div className="login-page">
      <h1>Welcome</h1>
      <img src="" alt="company-logo"></img>
      <br></br>
      <form>
        <label htmlFor="username">User Name</label>
        <input
          name="username"
          id="username"
          type="text"
          placeholder="Enter User Name"
        />
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          id="password"
          type="password"
          placeholder="Enter Password"
        />
        <br></br>
        <br></br>
        <button>LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
