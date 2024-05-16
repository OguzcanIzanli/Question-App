import data from "../../data/questions";
import useCountdown from "../../hooks/useCountdown";
import { useResult } from "../../context/ResultContext";
import { useEffect } from "react";

const Question = () => {
  const { counter, setCounter, openOptions, nextQuestion, setNextQuestion } =
    useCountdown();
  const { setResult, setScore } = useResult();

  const handleClick = (e) => {
    const userAnswer = e.target.innerHTML;

    userAnswer === data[nextQuestion].answer && setScore((prev) => prev + 1);

    setNextQuestion((prev) => prev + 1);
    setCounter(30);
    setResult((prev) => [
      ...prev,
      { question: data[nextQuestion].question, answer: userAnswer },
    ]);
  };

  useEffect(() => {
    if (counter === 0) {
      setResult((prev) => [
        ...prev,
        { question: data[nextQuestion].question, answer: "Boş" },
      ]);
    }
  }, [counter, nextQuestion, setResult]);

  return (
    <div>
      <div>{counter}</div>
      <div>
        <img src={`../../../pictures/${data[nextQuestion].media}`} alt="" />
      </div>
      <div className="question">{data[nextQuestion].question}</div>
      <div className="optionBtns">
        {openOptions &&
          data[nextQuestion].options.map((option) => (
            <button key={option} onClick={handleClick} className="optionBtn">
              {option}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Question;
