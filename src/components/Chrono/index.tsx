import { useEffect, useState } from "react";

export const Chrono: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted) {
      const interval = setInterval(() => {
        setTime((prev) => {
          const newTime = prev + 1;
          console.log("time", newTime);
          return newTime;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isStarted]);

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleStop = () => {
    setIsStarted(false);
  };

  return (
    <div>
      <p>Chrono :</p>
      <p>{time} s.</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
};
