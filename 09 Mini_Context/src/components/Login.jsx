import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContex';

function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);

    const handalSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }


    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                placeholder='username' />
            <br />
            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <br /> <br />
            <button onClick={handalSubmit}>Submit</button>
        </div>
    )
}

export default Login
