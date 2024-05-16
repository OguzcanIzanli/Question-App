import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ResultProvider } from "./context/ResultContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ResultProvider>
      <App />
    </ResultProvider>
  </>
);
