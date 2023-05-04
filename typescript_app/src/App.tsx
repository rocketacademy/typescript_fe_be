import React, { useState, MouseEvent } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  const handlePlus = (e: MouseEvent) => {
    setCount(count + 1);
  };
  const handleMinus = (e: MouseEvent) => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {count}
        <div className="Flex">
          <button onClick={(e) => handlePlus(e)}>+</button>
          <button onClick={(e) => handleMinus(e)}>-</button>
        </div>

        <Form />
      </header>
    </div>
  );
}

export default App;
