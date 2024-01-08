import React, { useEffect } from "react";
import { Navigate, Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./NavBar";
import HeaderSpacer from "./HeaderSpacer";
import Aos from "aos";
import Footer from "./Footer";
import { useQuestions } from "../questions/QuestionContext";

const AppLayout = () => {
  const { passed } = useQuestions();
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-screen flex gap-3 flex-col justify-between">
      <div className="">
        <NavBar />
        <HeaderSpacer />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
