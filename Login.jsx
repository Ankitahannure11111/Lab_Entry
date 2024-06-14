import React, { useState } from 'react';
import "./Login.css"
const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const correctPassword = 'lab123';
  
    const handleLogin = () => {
      if (password === correctPassword) {
        onLogin();
      } else {
        setError('You have entered an incorrect password.');
      }
    };
  
    return (
     
      <div className="login">
         <img src= "https://static-00.iconduck.com/assets.00/fingerprint-icon-1843x2048-qqajkhw7.png" height={"100px"} />
       <h4 >ENTER YOUR PILEARNING PASSWORD</h4>
        <input 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        /><br/><br/>
       
         <button className="btn" onClick={handleLogin}>Enter Lab</button>
        {error && <p>{error}</p>}
      </div>
    );
  };
  
  export default Login;