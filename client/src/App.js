import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React, { useState } from "react";

function App() {
  const [state, setState] = useState("null");
  axios
    .get("http://localhost:4000/home")
    .then((res) => {
      console.log(res);
      return setState(res.data);
    })
    .catch((err) => console.log(err));
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <p>{state}</p>
        </a>
      </header>
    </div>
  );
}

export default App;
