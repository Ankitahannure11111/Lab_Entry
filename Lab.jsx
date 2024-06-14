
import React, { useEffect, useState } from 'react';

const Lab = ({ onExit, remainingTime, setRemainingTime }) => {
  const [timeLeft, setTimeLeft] = useState(remainingTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onExit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onExit]);

  useEffect(() => {
    setRemainingTime(timeLeft);
  }, [timeLeft, setRemainingTime]);

  return (
    <div className="lab">
      <p>Time remaining: {timeLeft} seconds</p>
      <button onClick={onExit}>Exit Lab</button>
    </div>
  );
};

export default Lab;
