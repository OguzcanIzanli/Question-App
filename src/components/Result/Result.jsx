import { useResult } from "../../context/ResultContext";
// import "Result.style.css";

const Result = () => {
  const { result, score } = useResult();
  console.log(score);
  return result.map((item, index) => (
    <div key={index} className={item.status}>
      {item.question}: {item.answer}
    </div>
  ));
};

export default Result;
