import '../style_components/countdown-timer.css';
import { useState, useEffect } from 'react';
const COUNTDOWN_TARGET = new Date('2024-01-27T13:30:00');

const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const días = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const min = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seg = Math.floor((totalTimeLeft / 1000) % 60);
  return { días, hrs, min, seg };
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="countdownTimer">
      <h2>Countdown</h2>
      <div className="content">
        {Object.entries(timeLeft).map((el) => {
          const label = el[0];
          const value = el[1];
          return (
            <div className="box" key={label}>
              <div className="value">
                <span>{value}</span>
              </div>
              <span className="label">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CountdownTimer;
