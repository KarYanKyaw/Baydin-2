import { createContext, useContext, useEffect, useState } from "react";
import { questionsData } from "../../data";

const QuestionContext = createContext();

export const QuestionContextProvider = ({ children }) => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");

  const searchQuestion = (text) => {
    if (text.length > 3) {
      setAllQuestions(
        allQuestions.filter((el) =>
          el.questionName.toLowerCase().includes(text.toLowerCase())
        )
      );
    } else if (text.length === 0) {
      setAllQuestions(questionsData);
    }
  };

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setKeyword(searchText);
    searchQuestion(searchText);
  };

  const dataFetching = () => {
    setAllQuestions(questionsData);
  };

  useEffect(() => {
    dataFetching();
  }, []);

  const nextPage = () => {
    if (currentPage < getTotalPages()) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const specificPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getTotalPages = () => {
    return Math.ceil(allQuestions.length / 15);
  };

  const getCurrentQuestions = () => {
    const startIndex = (currentPage - 1) * 15;
    const endIndex = startIndex + 15;
    return allQuestions.slice(startIndex, endIndex);
  };

  const data = {
    questions: getCurrentQuestions(),
    currentPage,
    totalPages: getTotalPages(),
    nextPage,
    prevPage,
    specificPage,
    keyword,
    handleSearch,
    setKeyword,
    allQuestions,
    setAllQuestions,
  };

  return (
    <QuestionContext.Provider value={data}>{children}</QuestionContext.Provider>
  );
};

export const useQuestions = () => useContext(QuestionContext);
