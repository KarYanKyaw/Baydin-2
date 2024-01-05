import React from "react";
import { Link } from "react-router-dom";

const GoHomeBtn = ({ children }) => {
  return (
    <Link
      to={"/"}
      className="block rounded hover:opacity-80 bg-btn px-4 py-2 text-secondary"
    >
      {children}
    </Link>
  );
};

export default GoHomeBtn;
