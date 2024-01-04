import React from "react";
import { useQuestions } from "./QuestionContext";

const PaginationUi = ({ pageNumber, handleClick, type }) => {
  const { currentPage } = useQuestions();
  const handleClickEvent = () => {
    if (type === "numberedBtn") {
      handleClick(pageNumber);
    } else {
      handleClick();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      onClick={() => handleClickEvent()}
      className={`w-10 h-10 ${
        currentPage == pageNumber
          ? "bg-primary text-secondary"
          : "bg-secondary text-primary"
      } flex select-none items-center justify-center border  hover:text-secondary hover:bg-primary duration-500`}
    >
      {pageNumber}
    </button>
  );
};

export default PaginationUi;
