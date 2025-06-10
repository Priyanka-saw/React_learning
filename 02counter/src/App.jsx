import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  // using hooks
  let [counter, setCounter] = useState(10);

  // for normal js
  // let value = 15;

  const addValue = () => {
    // counter = counter + 1;
    // console.log("value clicked", counter);

    // this will give continous value with no changes
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // setCounter callback ** with change in value
    // it jump upto givn value in usestate 
    setCounter(preCounter => (
      preCounter + 1
    ))

    // ** both are same  
    setCounter(preCounter => preCounter + 1)
    setCounter(preCounter => preCounter + 1)

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
