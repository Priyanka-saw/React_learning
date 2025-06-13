import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("");

  // use ref hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "`@#$%^&*()_+{}|:<>?/[]";

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 3)
  window.navigator.clipboard.writeText(Password)
}, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-10 text-orange-500 bg-gray-800 mt-10">
        <h1 className="text-white text-3xl text-center mb-4">
          Password Generator
        </h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-2 px-3 bg-white "
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard}
           className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-700">
            copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
