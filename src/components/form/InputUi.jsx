import React, { useEffect, useRef } from "react";
import { useQuestions } from "../questions/QuestionContext";

const InputUi = ({ open }) => {
  const { handleSearch, keyword, setKeyword } = useQuestions();

  const inputRef = useRef(null);
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
    if (!open && inputRef.current) {
      setKeyword("");
    }
  }, [open]);

  return (
    <div
      data-aos={open ? "fade-down" : "fade-up"}
      data-aos-easing={open ? "linear" : "ease-out"}
    >
      <input
        value={keyword}
        onChange={(e) => handleSearch(e)}
        ref={inputRef}
        placeholder="အချစ်ရေး"
        type="text"
        className=" outline-none focus:shadow-2xl shadow-lg px-4 text-secondary bg-primary w-full py-3"
      />
    </div>
  );
};

export default InputUi;
