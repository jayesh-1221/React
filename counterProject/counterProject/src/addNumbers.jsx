import { useState } from "react";

function AddNumbers() {
  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [total, setTotal] = useState("");

  const HandleAddition = () => {
    const total = parseFloat(num1) + parseFloat(num2);
    setTotal(total);
  };

  return (
    <>
      <h1>Addition of two numbers</h1>
      <input
        type="number"
        onChange={(e) => {
          setNum1(e.target.value);
        }}
        placeholder="Enter num1 :"
      />

      <input
        type="number"
        onChange={(e) => {
          setNum2(e.target.value);
        }}
        placeholder="Enter num2:"
      />

      <button onClick={HandleAddition}> Add</button>

      <h2>Result :{ total }</h2>
    </>
  );
}

export default AddNumbers;
