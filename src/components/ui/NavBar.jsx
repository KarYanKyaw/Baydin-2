import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {
  return (
    <header className="z-[1005] top-0 fixed w-full h-[60px] flex items-center bg-primary">
      <Wrapper>
        <div className="text-secondary select-none items-center gap-3 flex">
          <img src={logo} className="w-12 h-12 rounded" alt="" />
          <Link to={"/"} className="text-lg cursor-pointer hover:opacity-80">
            <p> Min Thein Kha (လက်ထောက်ဗေဒင်)</p>
          </Link>
        </div>
      </Wrapper>
    </header>
  );
};

export default NavBar;
