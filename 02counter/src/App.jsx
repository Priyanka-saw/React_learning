import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  // using hooks
  let [counter, setCounter] = useState(0);

  // for normal js
  // let value = 15;

  const addValue = () => {
    // counter = counter + 1;
    // console.log("value clicked", counter);

    setCounter(counter + 1);
  };

  const removeValue = () => {
    // counter = counter - 1;
    // console.log(counter - 1);

    setCounter(counter - 1);
  };

  return (
    <>
      <h2>Counter Updation</h2>
      <h2>value : {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      <p>Footer : {counter}</p>
    </>
  );
}

export default App;
