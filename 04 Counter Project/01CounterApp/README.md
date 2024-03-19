# React useState Hook Example

## Introduction

This README provides an explanation of a React functional component using the `useState` hook to manage state. The component demonstrates a simple counter application where users can increment and decrement a count value within a specified range.

## Code Explanation

```javascript
import { useState } from 'react';
import './App.css';

function App() {
  let maxNum = 10;
  const [count, setCount] = useState(0);
  const [hideIncbtn, sethideIncbtn] = useState(false);
  const [hidedecbtn, sethidedecbtn] = useState(true);

  let increase = () => {
    if (count >= 0) {
      sethidedecbtn(false);
    }
    if (count === maxNum) {
      sethideIncbtn(true);
    } else {
      setCount(count + 1);
    }
  }

  let decrease = () => {
    if (count <= maxNum) {
      sethideIncbtn(false);
    }
    if (count === 0) {
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

export default App;



# Features

- The `useState` hook is imported from the 'react' package to manage state within a functional component.
- The component maintains three state variables: `count`, `hideIncbtn`, and `hideDecbtn`.
- The `increase` function increments the `count` state by 1, with buttons disabled if the count reaches the maximum value (`maxNum`) or if the count is already at the maximum value.
- The `decrease` function decrements the `count` state by 1, with buttons disabled if the count reaches 0 or if the count is already at 0.

## Usage

To use this component, you can simply integrate it into your React application. The `App` component can be rendered within your application to display the counter functionality.

## Note

This README serves as a documentation guide for understanding the usage and functionality of the `useState` hook within a React component.
