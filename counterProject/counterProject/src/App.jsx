import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddNumbers from "./addNumbers";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter >= 20) {
      alert("The value can not be above 20");
    } else {
      setCounter((prevCounter)=>prevCounter+1);  
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
      setCounter((prevCounter)=>prevCounter+1);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      alert("The value can not be less than zero");
    } else {
      setCounter(counter - 1);
    }
  };

  const addNumber2 = () => {
    if (counter >= 34) alert("add 2 can be more than 35");
    else {
      setCounter(counter + 2);
    }
  };

  return (
    <>
      <h1>Counter</h1>
      <h2>counter= {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>

      <button onClick={addNumber2}>Add 2</button>
    </>
  );
}

export default App;
