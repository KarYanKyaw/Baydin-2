import React from "react";
import { useNumberContext } from "./NumberContext";
import { useNavigate } from "react-router-dom";
import { openSwal } from "../ui/createSwal";

const NumberGrid = ({ id }) => {
  const { numberGridData } = useNumberContext();

  const navigate = useNavigate();

  const handleClick = async (id, value) => {
    openSwal();

    setTimeout(() => {
      navigate(`/question/${parseInt(id)}/answer/${value}`);
    }, 2100);
  };

  return (
    <div className="md:w-[50%] mx-auto grid grid-cols-9 gap-2">
      {numberGridData.map((el, index) => (
        <div
          onClick={() => handleClick(id, el.value)}
          key={index}
          className="select-none cursor-pointer hover:opacity-70 h-9 w-8 flex justify-center items-center text-white pb-1 bg-[#5b281d]"
        >
          {el.number}
        </div>
      ))}
    </div>
  );
};

export default NumberGrid;
