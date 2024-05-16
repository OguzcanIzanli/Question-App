import { useEffect, useState } from "react";

const useCountdown = () => {
  const [counter, setCounter] = useState(30);
  const [openOptions, setOpenOptions] = useState(false);
  const [nextQuestion, setNextQuestion] = useState(0);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter((prev) => prev - 1), 500);

    if (counter === 20) {
      setOpenOptions(true);
    } else if (counter === 0) {
      setNextQuestion((prev) => prev + 1);
      setCounter(30);
    } else if (counter === 30) {
      setOpenOptions(false);
    }

    return () => clearInterval(timer);
  }, [counter]);

  return { counter, setCounter, openOptions, nextQuestion, setNextQuestion };
};

export default useCountdown;
