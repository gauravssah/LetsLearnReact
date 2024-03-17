import { useState } from 'react'
import './App.css'

function App() {
  let maxNum = 10;
  const [count, setCount] = useState(0);
  const [hideIncbtn, sethideIncbtn] = useState(false);
  const [hidedecbtn, sethidedecbtn] = useState(true);


  let increase = () => {
    if (count >= 0) {
      sethidedecbtn(false);
    }
    if (count == maxNum) {
      sethideIncbtn(true);
    } else {
      setCount(count + 1);
    }
  }

  let decrease = () => {
    if (count <= maxNum) {
      sethideIncbtn(false);
    }
    if (count == 0) {
      sethidedecbtn(true);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="container">
        <h1>Here is your Count : {count}</h1>

        <button disabled={hideIncbtn} onClick={increase} >Inc(+)</button>
        <button disabled={hidedecbtn} onClick={decrease}>Dec(-)</button>
      </div>

    </>
  )
}

export default App
