import React from "react";
import Wrapper from "./Wrapper";

const NavBar = () => {
  return (
    <header className=" top-0 fixed w-full h-[60px] flex items-center bg-dark-bg">
      <Wrapper>
        <div className="text-secondary select-none flex justify-between items-center">
          <p className="text-lg cursor-pointer hover:opacity-80">
            Min Thein Kha (လက်ထောက်ဗေဒင်)
          </p>
        </div>
      </Wrapper>
    </header>
  );
};

export default NavBar;
