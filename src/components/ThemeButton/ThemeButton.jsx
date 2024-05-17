import { useTheme } from "../../context/ThemeContext";
import "./ThemeButton.style.css";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className="themeBtn"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <i className="fa-regular fa-sun"></i>
      ) : (
        <i className="fa-regular fa-moon"></i>
      )}
    </div>
  );
};

export default ThemeButton;
