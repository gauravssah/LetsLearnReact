import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContexProvider from './context/UserContexProvider'

function App() {


  return (

    // <UserContex.Provider>
    // </UserContex.Provider>

    <UserContexProvider>
      <h1>Hello There, How are you?</h1>
      <Login />
      <Profile />
    </UserContexProvider>
  )
}

export default App
