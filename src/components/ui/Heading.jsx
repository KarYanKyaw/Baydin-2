import React from "react";

const Heading = ({ children }) => {
  return (
    <p className="text-2xl select-none font-bold text-primary text-center">
      {children}
    </p>
  );
};

export default Heading;
