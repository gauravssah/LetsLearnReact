import "./App.css"

import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(7);
  const [nummberAllowed, setNummberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (nummberAllowed) str += "1234567890";
    if (specialCharAllowed) str += "~!@#$%^&*_-";

    for (let i = 1; i <= length; i++) {
      let ch = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(ch);

    }

    setPassword(pass);

  }, [length, nummberAllowed, specialCharAllowed, setPassword])

  useEffect(() => {
    generatePassword()
  }, [length, nummberAllowed, specialCharAllowed, generatePassword])


  const passwordRef = useRef(null);

  // const copyPassword = () => {
  //   navigator.clipboard.writeText(password)
  //     .then(() => {
  //       alert("Password copied to clipboard");
  //     })
  //     .catch((err) => {
  //       console.error('Could not copy text: ', err);
  //     });
  // }

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, max);

    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className="containers">
        <h1>Password Generator</h1>

        <div className="passwordContainer">
          <input type="text" placeholder="Password" readOnly value={password} ref={passwordRef} />
          <button className="copybtn" onClick={copyPassword} >Copy</button>
        </div>

        <div className="dependency">
          <input type="range" min={1} max={26} value={length} onChange={(e) => setLength(e.target.value)} />
          <p>Length : ( {length} )</p>

          <input type="checkbox" name="number" id="number" defaultChecked={nummberAllowed} onChange={() => setNummberAllowed((prev) => !prev)} />
          <label htmlFor="number">Number</label>

          <input type="checkbox" name="Characters" id="Characters" defaultChecked={specialCharAllowed} onChange={() => setSpecialCharAllowed((prev) => !prev)} />
          <label htmlFor="Characters">Characters</label>
        </div>

        <div className="github">
          <h2>Code with 💖 on <a href="https://github.com/gauravssah" target="_blank" >GitHub</a> </h2>
        </div>

      </div>
    </>
  )
}

export default App
