import React, { useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./NavBar";
import HeaderSpacer from "./HeaderSpacer";
import Aos from "aos";
import Footer from "./Footer";

const AppLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-screen flex gap-3 flex-col justify-between">
      <div className="">
        <NavBar />
        <HeaderSpacer />
        <Outlet />
        <ScrollRestoration />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
