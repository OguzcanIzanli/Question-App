import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ResultProvider } from "./context/ResultContext";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvider>
      <ResultProvider>
        <App />
      </ResultProvider>
    </ThemeProvider>
  </>
);
