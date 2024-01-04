import React, { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./components/questions/Home";
import Answers from "./components/answers/Answers";
import "aos/dist/aos.css";
import AOS from "aos";
import "aos/dist/aos.css";

const routers = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "answers",
        element: <Answers />,
      },
    ],
  },
]);

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <RouterProvider router={routers} />;
};

export default App;
