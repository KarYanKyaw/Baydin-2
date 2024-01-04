import React from "react";
import { useQuestions } from "./QuestionContext";

const QuestionsSection = () => {
  const { questions } = useQuestions();
  return (
    <ul>
      {questions?.map(({ questionNo, questionName }) => (
        <li
          className="select-none cursor-pointer hover:scale-[1.05] duration-500 mb-5 border p-3 flex bg-secondary gap-1 items-center"
          key={questionNo}
        >
          <p className="text-primary text-sm md:text-lg font-bold">
            {questionNo}.
          </p>
          <p className="text-primary text-sm md:text-lg font-bold">
            {questionName}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default QuestionsSection;
