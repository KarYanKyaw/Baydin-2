import React from "react";
import SecondaryText from "./SecondaryText";
import GoHomeBtn from "./GoHomeBtn";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center gap-7 justify-center min-h-screen">
      <SecondaryText>An Error Occurred, please go back home</SecondaryText>
      <GoHomeBtn>Go Back Home</GoHomeBtn>
    </div>
  );
};

export default ErrorPage;
