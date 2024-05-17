import { useResult } from "../../context/ResultContext";

const Result = () => {
  const { result } = useResult();
  return result.map((item, index) => (
    <div key={index} className={item.status}>
      {item.question}: {item.answer}
    </div>
  ));
};

export default Result;
