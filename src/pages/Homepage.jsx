import "./Homepage.style.css";
import { useState } from "react";
import data from "../data/questions";
import { useResult } from "../context/ResultContext";
import { useTheme } from "../context/ThemeContext";
import ThemeButton from "../components/ThemeButton";
import Background from "../components/Background";
import Start from "../components/Start";
import Question from "../components/Question";
import Result from "../components/Result";

const Homepage = () => {
  const { theme } = useTheme();
  const [start, setStart] = useState(false);
  const { result } = useResult();

  const subAnswers = result.length;
  const subQuestions = data.length;
  return (
    <div className={`container ${theme == "light" ? "dark" : "light"}`}>
      <ThemeButton />
      <Background />

      <div className="questionApp">
        {!start ? (
          <Start setStart={setStart} />
        ) : subAnswers != subQuestions ? (
          <Question />
        ) : (
          <Result setStart={setStart} />
        )}
      </div>
    </div>
  );
};

export default Homepage;
