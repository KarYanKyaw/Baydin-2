import React from "react";
import Wrapper from "../ui/Wrapper";
import NumberGrid from "./NumberGrid";
import { useParams } from "react-router-dom";
import { questionsData } from "../../data";
import QuestionUi from "./QuestionUi";
import SecondaryText from "../ui/SecondaryText";

const NumberPage = () => {
  const { ques } = useParams();
  console.log(ques);
  const question = questionsData.find(
    (el) => el.questionNo == parseInt(ques)
  ).questionName;
  return (
    <Wrapper>
      <div className="text-center flex flex-col pt-5 gap-5 justify-center items-center">
        <QuestionUi question={question} />
        <SecondaryText>အတွက် မျက်စိမှတ်၍ လက်ထောက်ကာ ရွေးချယ်ပါ။</SecondaryText>
        <NumberGrid id={ques} />
      </div>
    </Wrapper>
  );
};

export default NumberPage;
