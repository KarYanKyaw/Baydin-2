import React from "react";
import Wrapper from "../ui/Wrapper";
import Heading from "../ui/Heading";
import FormSection from "../form/FormSection";
import Questions from "./Questions";

const Home = () => {
  return (
    <Wrapper>
      <div className=" flex flex-col py-8 gap-8">
        <Heading >လက်ထောက်ဗေဒင်</Heading>
        <FormSection />
        <Questions />
      </div>
    </Wrapper>
  );
};

export default Home;
