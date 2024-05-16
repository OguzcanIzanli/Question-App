import { useEffect, useState } from "react";

const useCountdown = () => {
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    return () => clearInterval(timer);
  }, [counter]);

  return { counter, setCounter };
};

export default useCountdown;
