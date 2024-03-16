import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return (
    <div>
      <h2>This is Custom React !</h2>
    </div>
  )

};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Myapp /> */}
  </React.StrictMode>,
)
