import { useTheme } from "../../context/ThemeContext";
import "./Background.style.css";

const Background = () => {
  const { theme } = useTheme();
  return (
    <div className="background">
      <div className={`shape ${theme == "light" ? "dark" : "light"}`}></div>
      <div className={`shape ${theme == "light" ? "dark" : "light"}`}></div>
    </div>
  );
};

export default Background;
