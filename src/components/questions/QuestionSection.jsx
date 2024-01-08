import React from "react";
import { useQuestions } from "./QuestionContext";
import { Link } from "react-router-dom";
import { questionsData } from "../../data";

const QuestionSection = () => {
  const { setAllQuestions, questions, setKeyword, handlePassed } =
    useQuestions();
  const handleClick = () => {
    setKeyword("");
    setAllQuestions(questionsData);
    handlePassed();
  };
  return (
    <ul>
      {questions?.map(({ questionNo, questionName }) => (
        <Link
          onClick={() => handleClick()}
          to={`/question/${questionNo}`}
          className="select-none cursor-pointer hover:scale-[1.05] duration-500 mb-5 border p-3 flex bg-secondary gap-1 items-center"
          key={questionNo}
        >
          <p className="text-primary text-sm md:text-lg font-bold">
            {questionNo}.
          </p>
          <p className="text-primary text-sm md:text-lg font-bold">
            {questionName}
          </p>
        </Link>
      ))}
    </ul>
  );
};

export default QuestionSection;
