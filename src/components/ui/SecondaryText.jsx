import React from "react";

const SecondaryText = ({ children }) => {
  return (
    <p className=" text-primary font-bold opacity-85 md:text-lg text-base">
      {children}
    </p>
  );
};

export default SecondaryText;
