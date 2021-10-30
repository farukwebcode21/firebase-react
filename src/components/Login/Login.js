import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUserGoogel, signInUserGithub} = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUserGoogel}>Google Sign In</button>
            <br />
            <button onClick={signInUserGithub}>Github Login</button>
             <br />
            <Link to="/register">New User</Link>
        </div>
    )
}

export default Login
