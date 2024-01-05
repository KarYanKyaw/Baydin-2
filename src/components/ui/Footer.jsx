import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <div
      className={`p-3 w-full flex text-center select-none justify-between items-center shadow-lg text-secondary bg-btn`}
    >
      <Wrapper>
        <p>&copy; reserved to Kar Yan Kyaw 2024</p>
      </Wrapper>
    </div>
  );
};

export default Footer;
