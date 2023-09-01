import '../style_components/countdown.css';
import { useState, useEffect } from 'react';

const Countdown = () => {
  const [days, setDays] = useState(0);

  const deadline = 'January, 27, 2024';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown-container">
      <p className="countdown">{days}</p>
      <span className="countdown-span"> días para celebrar juntos!</span>
    </div>
  );
};

export default Countdown;
