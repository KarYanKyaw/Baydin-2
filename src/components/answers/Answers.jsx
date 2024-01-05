import React from "react";
import { useParams } from "react-router-dom";
import Heading from "../ui/Heading";
import { answersData, questionsData } from "../../data";
import Wrapper from "../ui/Wrapper";
import QuestionUi from "../questions/QuestionUi";
import SecondaryText from "../ui/SecondaryText";
import GoHomeBtn from "../ui/GoHomeBtn";

const Answer = () => {
  const { ques, num } = useParams();

  const question = questionsData.find(
    (el) => el.questionNo == ques
  ).questionName;
  const answer = answersData.find(
    (el) => el.questionNo == ques && el.answerNo == num
  ).answerResult;

  return (
    <Wrapper>
      <div className="py-20 text-center overflow-hidden flex items-center flex-col gap-4">
        <QuestionUi question={question} />
        <SecondaryText>အတွက်ဟောတမ်းမှာ</SecondaryText>
        <p className="mb-8 animate__delay-1s bg-primary animate__animated animate__fadeIn text-secondary rounded p-3 text-lg md:text-2xl shadow-xl">
          {answer}
        </p>
        <div className=" animate__delay-2s animate__animated animate__bounceInUp">
          <GoHomeBtn>မေးခွန်းပြန်ရွေးရန် ဒီကိုနှိပ်ပါ။</GoHomeBtn>
        </div>
      </div>
    </Wrapper>
  );
};

export default Answer;
