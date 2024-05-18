import { useResult } from "../../context/ResultContext";
import "./Result.style.css";
import data from "../../data/questions";

// eslint-disable-next-line react/prop-types
const Result = ({ setStart }) => {
  const { result, score, setResult, setScore } = useResult();

  const handleAgain = () => {
    setStart(false);
    setResult([]);
    setScore(0);
  };

  return (
    <div className="resultContainer">
      {result.map((item, index) => (
        <li key={index}>
          Soru: {item.question}
          <div className="answerList">
            Cevap:
            {<span className={`answer ${item.status}`}>{item.answer}</span>}
          </div>
        </li>
      ))}
      <div className="result">
        {data.length} soru içinden {score} doğrun var.
      </div>
      <button className="tryAgainBtn" onClick={handleAgain}>
        Tekrar Dene
      </button>
    </div>
  );
};

export default Result;
