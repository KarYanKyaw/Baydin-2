import React from "react";
import QuestionHeader from "./QuestionHeader";
import QuestionSection from "./QuestionSection";
import { useQuestions } from "./QuestionContext";
import PaginationUi from "./PaginationUi";
import NotFoundQuestion from "./NotFoundQuestion";

const Questions = () => {
  const { totalPages, questions, nextPage, prevPage, specificPage } =
    useQuestions();
  const pageButtons = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  return (
    <div className=" flex flex-col gap-4 ">
      <QuestionHeader />
      {questions.length === 0 ? (
        <NotFoundQuestion />
      ) : (
        <>
          <QuestionSection />
          <div className="flex items-center flex-col gap-3 justify-center">
            <div className="flex gap-3">
              <PaginationUi pageNumber={"<"} type={""} handleClick={prevPage} />
              {pageButtons.map((pageNumber, index) => (
                <PaginationUi
                  key={index}
                  pageNumber={pageNumber}
                  handleClick={specificPage}
                  type={"numberedBtn"}
                />
              ))}
              <PaginationUi pageNumber={">"} type={""} handleClick={nextPage} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Questions;
