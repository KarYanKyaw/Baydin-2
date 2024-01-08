import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QuestionContextProvider } from "./components/questions/QuestionContext.jsx";
import { NumberContextProvider } from "./components/questions/NumberContext.jsx";
import { AnswerContextProvider } from "./components/answers/AnswerContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QuestionContextProvider>
    <NumberContextProvider>
      <AnswerContextProvider>
        <App />
      </AnswerContextProvider>
    </NumberContextProvider>
  </QuestionContextProvider>
);
