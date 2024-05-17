import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const ResultContext = createContext();

export const ResultProvider = ({ children }) => {
  const [result, setResult] = useState([]);
  const [score, setScore] = useState(0);

  const values = {
    result,
    setResult,
    score,
    setScore,
  };

  return (
    <ResultContext.Provider value={values}>{children}</ResultContext.Provider>
  );
};

ResultProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useResult = () => useContext(ResultContext);
