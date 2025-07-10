import { useState, useCallback} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassWord] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassWord(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
     
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-6 py-8 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-2xl text-center mb-6 font-semibold">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
            type="text"
            value={password}
            className="outline-none w-full px-4 py-2 text-gray-800"
            placeholder="Password"
            readOnly
          />
        </div>

        <button
          onClick={passwordGenerator}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition duration-200"
        >
          Generate Password
        </button>

        

        <button
          onClick={copyToClipboard}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200 mt-4"
        >
          Copy
        </button>
      </div>
    </>
  );
}

export default App;
