import { useState, useEffect } from 'react';

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown) {
    console.log('hello every sec');
  }

  return (
    <div>
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span>{remainingTime.hours}</span>
      <span>hours</span>
      <span>{remainingTime.minutes}</span>
      <span>min</span>
      <span>{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;
