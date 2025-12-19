import { useEffect, useState } from "react";

export const Chrono: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        const newTime = prev + 1;
        console.log("time", newTime);
        return newTime;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Chrono :</p>
      <p>{time} s.</p>
    </div>
  );
};
