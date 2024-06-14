
import React, { useState } from 'react';
import Login from './components/login/Login';
import Lab from './components/lab/Lab';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [remainingTime, setRemainingTime] = useState(600); // 10 minutes

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleExit = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Lab 
          onExit={handleExit} 
          remainingTime={remainingTime} 
          setRemainingTime={setRemainingTime} 
        />
      )}
    </div>
  );
};

export default App;

