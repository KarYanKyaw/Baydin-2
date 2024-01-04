import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import HeaderSpacer from "./HeaderSpacer";
import Aos from "aos";

const AppLayout = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <NavBar />
      <HeaderSpacer />
      <div className="min-h-screen bg-white">
        <Outlet />
      </div>
    </>
  );
};

export default AppLayout;
