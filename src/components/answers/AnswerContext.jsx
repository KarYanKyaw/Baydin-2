import { createContext, useContext, useState } from "react";
import { answersData } from "../../data";

const AnswerContext = createContext();

export const AnswerContextProvider = ({ children }) => {
  const [answers, setAnswers] = useState(answersData);
  const data = { answers };
  return (
    <AnswerContext.Provider value={data}>{children}</AnswerContext.Provider>
  );
};
export const useAnswers = () => useContext(AnswerContext);
