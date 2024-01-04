import React from "react";

const FormHeader = ({ open, handleClick }) => {
  return (
    <div
      onClick={() => handleClick()}
      className="p-3 flex items-center justify-between text-lg cursor-pointer group bg-primary tracking-wide select-none text-secondary"
    >
      <p className="group-hover:opacity-80">
        မေးလိုသည့် မေးခွန်းအား ရှာရန် နှိပ်ပါ။
      </p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6 ${open && "rotate-180"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m19.5 8.25-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default FormHeader;
