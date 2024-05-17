import { useState } from "react";
import Question from "../Question";
import Result from "../Result";
import data from "../../data/questions";
import { useResult } from "../../context/ResultContext";

const Start = () => {
  const [start, setStart] = useState(false);
  const { result } = useResult();

  const subAnswers = result.length;
  const subQuestions = data.length;
  return (
    <div>
      {!start ? (
        <button id="start" onClick={() => setStart(true)}>
          Teste Başla
        </button>
      ) : subAnswers != subQuestions ? (
        <Question />
      ) : (
        <Result />
      )}
    </div>
  );
};

export default Start;
